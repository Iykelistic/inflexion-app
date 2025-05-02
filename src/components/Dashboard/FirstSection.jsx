import React from 'react';
import {
    Box,
    Grid, 
    Paper,
    Typography,
    Link,
    Icon
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import necessary icons for stat cards
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PiSimCardBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";


import Chakra from "../../assets/images/Chakra.svg";
import Smile from "../../assets/images/Smile.svg";

const StatCard = ({ title, value, percentage, icon, percentageColor }) => {
    const tealColor = '#4FD1C5';
    const primaryTextColor = '#2D3748';
    const secondaryTextColor = '#A0AEC0';

    return (
      
        <Paper
            elevation={0}
            sx={{
                width: '250px',    
                height: '80px',     
                borderRadius: '8px', 
                p: 2,            
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #E2E8F0',
                boxSizing: 'border-box'
            }}
        >
            <Box>
                <Typography sx={{ color: secondaryTextColor, fontSize: '12px', fontWeight: '700', mb: 0.5, fontFamily: "Poppins, san-serif", }}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography sx={{ color: primaryTextColor, fontSize: '18px', fontWeight: '700', fontFamily: "Poppins, san-serif", }}>
                        {value}
                    </Typography>
                    <Typography sx={{ color: percentageColor, fontSize: '14', fontWeight: '700', fontFamily: "Poppins, san-serif", }}>
                        {percentage}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: tealColor,
                    borderRadius: '12px', 
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                }}
            >
                 {React.cloneElement(icon, { sx: { fontSize: '1.5rem' } })}
            </Box>
        </Paper>
    );
};


export default function FirstSection() {
    // --- Define Colors ---
    const tealColor = '#4FD1C5';
    const primaryTextColor = '#2D3748';
    const secondaryTextColor = '#A0AEC0';
    const greenColor = '#48BB78';
    const redColor = '#F56565';
    const cardBg = '#FFFFFF';
    // const cardBorderRadius = '15px'; // Defined directly on elements now

    const statData = [
        { title: "Today's Money", value: "$53,000", percentage: "+55%", icon: <AccountBalanceWalletIcon />, percentageColor: greenColor },
        { title: "Today's Users", value: "2,300", percentage: "+5%", icon: <TbWorld style={{fontSize: "1.5rem"}}/>, percentageColor: greenColor },
        { title: "New Clients", value: "+3,052", percentage: "-14%", icon: <PiSimCardBold style={{fontSize: "1.5rem"}}/>, percentageColor: redColor },
        { title: "Total Sales", value: "$173,000", percentage: "+8%", icon: <ShoppingCartIcon />, percentageColor: greenColor },
    ];

    return (
        <Box sx={{ p: 3, backgroundColor: '#F8F9FA', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}> {/* Main container as flex column */}


            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                 {statData.map((stat, index) => (

                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        percentage={stat.percentage}
                        icon={stat.icon}
                        percentageColor={stat.percentageColor}
                    />
                 ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}> 
                <Paper
                   elevation={0}
                   sx={{
                     width: '620px',
                     height: '290px',
                     borderRadius: '15px',
                     backgroundColor: cardBg,
                     display: 'flex', 
                     flexDirection: 'row',
                     border: '1px solid #E2E8F0',
                     overflow: 'hidden', 
                     p: 0,
                     boxSizing: 'border-box',
                     alignItems: 'center', 
                     flexShrink: 0 
                    }}
                >
                 
                    <Box sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}> 
                        <Typography sx={{ color: secondaryTextColor, fontSize: '12px', fontWeight: '700', mb: 0.5, fontFamily: "Poppins, san-serif", }}>
                            Built by developers
                        </Typography>
                        <Typography sx={{ color: primaryTextColor, fontSize: '18px', fontWeight: '700', mb: 1, fontFamily: "Poppins, san-serif", }}>
                            Purity UI Dashboard
                        </Typography>
                        <Typography sx={{ color: secondaryTextColor, fontSize: '14px', lineHeight: 1.6, mb: 2, fontWeight: '400', fontFamily: "Poppins, san-serif", }}>
                            From colors, cards, typography to complex elements, you will find the full documentation.
                        </Typography>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: primaryTextColor,
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                mt: 'auto',
                                '&:hover': { color: tealColor }
                            }}
                        >
                            Read more <ArrowForwardIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
                        </Link>
                    </Box>

                     <Box
                        sx={{
                            width: '250px',
                            height: '255px', 
                            backgroundColor: tealColor,
                            borderRadius: '7px', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mr: '18px' 
                        }}
                    >
                         <img src={Chakra} alt="Chakra UI Logo" style={{ maxWidth: '80%', height: 'auto' }} />
                    </Box>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        width: '440px',
                        height: '290px',
                        borderRadius: '15px',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid #E2E8F0',
                        color: 'white',
                        boxSizing: 'border-box',
                        flexShrink: 0,
                        backgroundColor: "fff"
                    }}
                >
    
                    <img
                        src={Smile}
                        alt="People working together"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%', 
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0,
                        }}
                    />
                 
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            zIndex: 1,
                           
                        }}
                    />
                   
                    <Box
                       sx={{
                         position: 'relative',
                         zIndex: 2,
                         p: 3,
                         height: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'flex-end',
                         boxSizing: 'border-box',
                         marginTop: "-6rem"
                       }}
                    >
                        <Typography sx={{ fontSize: '18px', fontWeight: '700', mb: 1, fontFamily: "Poppins, san-serif", }}>
                            Work with the Rockets
                        </Typography>
                        <Typography sx={{ fontSize: '14px', lineHeight: 1.6, mb: 2, opacity: 0.9, width: "85%", fontWeight: "400", fontFamily: "Poppins, san-serif", }}>
                            Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
                        </Typography>
                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                color: 'white',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': { opacity: 0.8 }
                            }}
                        >
                            Read more <ArrowForwardIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
                        </Link>
                    </Box>
                </Paper>

            </Box>
        </Box>
    );
}