
import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Box
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom'; 
import SigninLogo from "../../assets/images/SigninLogo.svg";
import Spiral from "../../assets/images/Spiral.svg";
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart'; 
import PersonIcon from '@mui/icons-material/Person'; 
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; 
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IoCard } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import { PiSimCardBold } from "react-icons/pi";

export default function Sidebar() {

    const location = useLocation();
    const currentPath = location.pathname;

    const [activeItem, setActiveItem] = useState('Dashboard'); 

    const mainNavItems = [
        { text: 'Dashboard', icon: <HomeIcon />, route: '/' },
        { text: 'Tables', icon: <BarChartIcon />, route: '/tables' },
        { text: 'Billing', icon: <IoCard style={{color: "#4FD1C5"}}/> },
        { text: 'RTL', icon: <TiSpanner  style={{color: "#4FD1C5"}}/> },
    ];

    const accountNavItems = [
        { text: 'Profile', icon: <PersonIcon /> },
        { text: 'Sign In', icon: <PiSimCardBold  style={{color: "#4FD1C5"}}/> }, 
        { text: 'Sign Up', icon: <RocketLaunchIcon /> },
    ];

    // --- Define Colors ---
    const tealColor = '#4FD1C5';        
    const lightTealBg = '#EDFDFD';      
    const activeTextColor = '#2D3748';   
    const inactiveTextColor = '#A0AEC0';
    const iconActiveColor = '#FFFFFF';  
    const iconInactiveColor = tealColor; 
    const iconActiveBg = tealColor;      
    const iconInactiveBg = '#FFFFFF';  
    const sidebarBg = '#FFFFFF';         
    const helpBoxBg = '#4FD1C5';     

    const iconBoxStyle = {
        minWidth: 'auto', 
        marginRight: '16px', 
    };

    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36, 
        height: 36, 
        borderRadius: '12px',
        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)', 
    };

    return (
       
        <div className="h-screen w-64 bg-white text-gray-800 flex flex-col justify-between p-4 border-r border-gray-200">
            <div>
              
                <div className="flex items-center mb-8 px-2"> 
                    
                    <img src={SigninLogo} alt="Vandelay Industries Logo" className="h-8 mr-2 sidebar__logo"/> 
                    <p className="sidebar__logo__text" >
                    VANDELAY INDUSTRIES
                </p>
                </div>

                <List component="nav" sx={{ px: 1 }}> 
    {mainNavItems.map((item) => {
const isActive = activeItem === item.text;

        return (
            <ListItem key={item.text} disablePadding className="mb-2"> 
                <ListItemButton
                    onClick={() => setActiveItem(item.text)} // ✅ Update active item on click
                    component={item.route ? Link : 'div'}
                    to={item.route || undefined}
                    className="rounded-lg transition-colors duration-200 ease-in-out"
                    sx={{
                        py: 1, 
                        px: 2,
                        backgroundColor: isActive ? 'white' : 'transparent',
                        borderRadius: "10px",
                        boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none', 
                        '&:hover': {
                            backgroundColor: !isActive ? lightTealBg : 'white', 
                        },
                    }}
                >
                    <ListItemIcon sx={iconBoxStyle}>
                        <Box
                            sx={{
                                ...iconContainerStyle,
                                backgroundColor: isActive ? iconActiveBg : iconInactiveBg,
                                marginBottom: "0.7rem"
                            }}
                        >
                            {React.cloneElement(item.icon, {
                                sx: {
                                    color: isActive ? iconActiveColor : iconInactiveColor,
                                    fontSize: '1.3rem'
                                }
                            })}
                        </Box>
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                            sx: {
                                color: isActive ? activeTextColor : inactiveTextColor,
                                fontWeight: isActive ? '700' : '700',
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontFamily: "Poppins, san-serif", 
                                marginBottom: "0.7rem"
                            }
                        }}
                    />
                </ListItemButton>
            </ListItem>
        );
    })}
</List>

                <Typography
                    variant="caption"
                    className="px-4 mt-6 mb-2 block font-semibold uppercase" 
                    sx={{ color: activeTextColor, marginLeft: "1.2rem"}} 
                >
                    Account Pages
                </Typography>

                <List component="nav" sx={{ px: 1 }}> 
                    {accountNavItems.map((item) => (
                        <ListItem key={item.text} disablePadding className="mb-2">
                            <ListItemButton
                                className={`rounded-lg transition-colors duration-200 ease-in-out`}
                                sx={{
                                    py: 1, 
                                    px: 2,
                                    backgroundColor: 'transparent', 
                                    '&:hover': {
                                            backgroundColor: lightTealBg, 
                                    },
                                 }}
                            >
                                <ListItemIcon sx={iconBoxStyle}>
                                    <Box
                                        sx={{
                                            ...iconContainerStyle,
                                            backgroundColor: iconInactiveBg, 
                                             marginBottom: "0.7rem"
                                        }}
                                    >
                                        
                                        {React.cloneElement(item.icon, {
                                             sx: {
                                                color: iconInactiveColor,
                                                fontSize: '1.1rem'
                                             }
                                        })}
                                    </Box>
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: inactiveTextColor, 
                                            fontWeight: '700',
                                            fontSize: "12px",
                                            fontStyle: "normal",
                                            fontFamily: "Poppins, san-serif", 
                                             marginBottom: "0.7rem"
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>

            <Box
                sx={{
                    width: '218px',   
                    height: '169px',  
                    borderRadius: '15px', 
                    backgroundColor: helpBoxBg, 
                    mt: 'auto',        
                    mx: 'auto',        
                    mb: 2,             
                    p: '16px',        
                    position: 'relative', 
                    overflow: 'hidden',  
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'flex-start', 
                    boxSizing: 'border-box', 
                    color: 'white',      
                }}
            >
               
                <img
                    src={Spiral}
                    alt=""
                    style={{
                        position: 'absolute',
                        bottom: '-10px',
                        right: '-20px', 
                        width: '100%',   
                        height: 'auto',
                        zIndex: 0,       
                        pointerEvents: 'none', 
                        opacity: 0.6,    
                    }}
                />

                
                <Box sx={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                    
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '12px', 
                            p: '6px',           
                            display: 'inline-flex', 
                            mb: 1,         
                            marginLeft: "-9rem"
                        }}
                    >
                        <HelpOutlineIcon sx={{ color: helpBoxBg, fontSize: 24 }} />
                    </Box>

    
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textAlign: 'left', mb: 0.5,  marginLeft: "-6rem"}}>
                        Need help?
                    </Typography>
                    <Typography variant="caption" sx={{ textAlign: 'left', mb: 1, opacity: 0.9,  marginLeft: "-3rem"}}> 
                        Please check our docs
                    </Typography>
                </Box>

      
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        position: 'relative', 
                        zIndex: 1,
                        backgroundColor: 'white',
                        color: activeTextColor,
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '12px', 
                        py: 0.8, 
                        fontSize: '12px', 
                        mt: 'auto' 
                    }}
                >
                    DOCUMENTATION
                </Button>
            </Box>
        </div> 
    );
}