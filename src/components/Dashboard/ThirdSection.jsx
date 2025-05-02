import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    LinearProgress,
    Avatar,
    AvatarGroup,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses 
} from '@mui/lab'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import CreditCardIcon from '@mui/icons-material/CreditCard'; 

import AdobeXD from "../../assets/images/AdobeXD.svg";
import Atlassian from "../../assets/images/Atlassian.svg";
import Jira from "../../assets/images/Jira.svg";
import Linkedin from "../../assets/images/Linkedin.svg";
import Slack from "../../assets/images/Slack.svg";
import Spotify from "../../assets/images/Spotify.svg";
import HTML from "../../assets//images/HTML.svg";
import dropbox from "../../assets/images/dropbox.svg";

import Roy from "../../assets/images/Roy.svg";
import Sam from "../../assets/images/Sam.svg";
import Justin from "../../assets/images/Justin.svg";
import Frank from "../../assets/images/Frank.svg";
import Elipse from "../../assets/images/Elipse.svg";
import Daniel from "../../assets/images/Daniel.svg";



const projectsData = [
    { id: 1, iconSrc: AdobeXD, name: 'Chakra Soft UI Version', members: [Roy, Sam, Justin, Frank, Elipse], budget: '$14,000', completion: 60 },
    { id: 2, iconSrc: Atlassian, name: 'Add Progress Track', members: [Justin, Frank], budget: '$3,000', completion: 10 },
    { id: 3, iconSrc: Slack, name: 'Fix Platform Errors', members: [Sam, Daniel], budget: 'Not set', completion: 100 },
    { id: 4, iconSrc: Spotify, name: 'Launch our Mobile App', members: [Roy, Sam, Justin, Elipse], budget: '$32,000', completion: 100 },
    { id: 5, iconSrc: Jira, name: 'Add the New Pricing Page', members: [Roy, Sam, Justin, Frank, Elipse], budget: '$400', completion: 25 },
    { id: 6, iconSrc: Linkedin, name: 'Redesign New Online Shop', members: [Justin, Daniel], budget: '$7,600', completion: 40 },
];

  const ordersData = [

   { id: 1, iconComponent: NotificationsIcon, title: '$2400, Design changes', date: '22 DEC 7:20 PM', color: 'success.main' },
   { id: 2, iconSrc: HTML, title: 'New order #4219423', date: '21 DEC 11:21 PM', color: 'error.main' },
   { id: 3, iconComponent: ShoppingCartIcon, title: 'Server Payments for April', date: '21 DEC 9:28 PM', color: 'info.main' },
   { id: 4, iconComponent: CreditCardIcon, title: 'New card added for order #3210145', date: '20 DEC 3:52 PM', color: 'warning.main' },
   { id: 5, iconSrc: dropbox, title: 'Unlock packages for Development', date: '19 DEC 11:35 PM', color: 'secondary.main' },
   { id: 6, iconSrc: AdobeXD, title: 'New order #9851258', date: '18 DEC 4:41 PM', color: 'primary.main' },
 ];

export default function ThirdSection() {
    const primaryTextColor = '#2D3748';
    const secondaryTextColor = '#A0AEC0';
    const greenColor = '#48BB78';
    const cardBg = '#FFFFFF';
    const cardBorderColor = '#E2E8F0';
    const headerTextColor = '#A0AEC0'; 
    const tealColor = '#4FD1C5'; 

    return (
        <Box sx={{ p: 3, pt: 0, backgroundColor: '#F8F9FA', flexGrow: 1 }}> 
            <Grid container spacing={4}>

                <Grid item xs={12} lg={7}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: '15px',
                            border: `1px solid ${cardBorderColor}`,
                            backgroundColor: cardBg,
                            overflow: 'hidden', 
                            height: '100%',
                            width: "100%",
            
                        }}
                    >
                        {/* Card Header */}
                        <Box sx={{ p: 3, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '18px', mb: 0.5, fontFamily: "Poppins, san-serif" }}>
                                    Projects
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <CheckCircleIcon sx={{ color: greenColor, fontSize: '1rem' }} />
                                    <Typography sx={{ fontSize: '14px', color: secondaryTextColor, fontWeight: "700", fontFamily: "Poppins, san-serif"}}>
                                        <Typography component="span" sx={{ fontWeight: '400', fontFamily: "Poppins, san-serif"}}>30 done</Typography> this month
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton size="small">
                                <MoreVertIcon sx={{ color: secondaryTextColor }}/>
                            </IconButton>
                        </Box>

                        {/* Table */}
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="projects table">
                                <TableHead>
                                    <TableRow>
                                    
                                        <TableCell sx={{ color: headerTextColor, fontWeight: '700', fontSize: '10px', borderBottom: 'none', pt: 1, pb: 1, pl: 3, width: '35%', fontFamily: "Poppins, san-serif"}}>COMPANIES</TableCell>
                                        <TableCell sx={{ color: headerTextColor, fontWeight: '700', fontSize: '10px', borderBottom: 'none', pt: 1, pb: 1, width: '20%', fontFamily: "Poppins, san-serif"}}>MEMBERS</TableCell>
                                        <TableCell sx={{ color: headerTextColor, fontWeight: '700', fontSize: '10px', borderBottom: 'none', pt: 1, pb: 1, width: '15%', fontFamily: "Poppins, san-serif"}}>BUDGET</TableCell>
                                        <TableCell sx={{ color: headerTextColor, fontWeight: '700', fontSize: '10px', borderBottom: 'none', pt: 1, pb: 1, pr: 3, width: '30%', fontFamily: "Poppins, san-serif"}}>COMPLETION</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {projectsData.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
                                        >
                  {/* Company Cell */}
                  <TableCell component="th" scope="row" sx={{ borderBottom: `1px solid ${cardBorderColor}`, py: 1.5, pl: 3 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
 
                                                    <Box
                                                        component="span" 
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: 24, 
                                                            height: 24,
                                                        }}
                                                    >
                                                        <img
                                                            src={row.iconSrc}
                                                            alt="" 
                                                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                        />
                                                    </Box>
                                                    <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '14px', fontFamily: "Poppins, san-serif"}}>
                                                        {row.name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>

                                            {/* Members Cell */}

                                            <TableCell sx={{ borderBottom: `1px solid ${cardBorderColor}`, py: 1.5, margin: "0 auto"}}>
                                                <AvatarGroup max={5} sx={{ '& .MuiAvatar-root': { width: 24, height: 24 }}}>
                                                    {row.members.map((src, index) => (
                                                        <Avatar key={index} src={src} />
                                                    ))}
                                                </AvatarGroup>
                                            </TableCell>


                                            {/* Budget Cell */}
                                            <TableCell sx={{ borderBottom: `1px solid ${cardBorderColor}`, py: 1.5 }}>
                                                <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '14px', fontFamily: "Poppins, san-serif"}}>
                                                    {row.budget}
                                                </Typography>
                                            </TableCell>

                                            {/* Completion Cell */}
                                            <TableCell sx={{ borderBottom: `1px solid ${cardBorderColor}`, py: 1.5, pr: 3 }}>
                                                <Box sx={{ width: '100%' }}>
                                                   <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '14px', mb: 0.5, textAlign: 'left', fontFamily: "Poppins, san-serif" }}>
                                                        {row.completion}%
                                                    </Typography>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={row.completion}
                                                        sx={{
                                                            height: '5px',
                                                            borderRadius: '3px',
                                                            backgroundColor: '#E2E8F0',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: tealColor,
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                  {/* Orders Overview Card */}
                  <Grid item xs={12} lg={5}>
                     <Paper
                        elevation={0}
                        sx={{
                            borderRadius: '15px',
                            border: `1px solid ${cardBorderColor}`,
                            backgroundColor: cardBg,
                            height: '100%',
                            p: 3,
                        }}
                    >
                         {/* Card Header */}
                         <Box sx={{ mb: 2 }}>
                            {/* ... Header content ... */}
                             <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '18px', mb: 0.5, fontFamily: "Poppins, san-serif"}}>
                                Orders overview
                            </Typography>
                             <Typography sx={{ fontSize: '14px', color: secondaryTextColor, fontWeight: "700", fontFamily: "Poppins, san-serif"}}>
                                <Typography component="span" sx={{ color: greenColor, fontWeight: '400', fontSize: "14px", fontFamily: "Poppins, san-serif"}}>+30%</Typography> this month
                            </Typography>
                         </Box>

                         {/* Timeline */}
                         <Timeline
                           sx={{
                                p: 0,
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}
                         >
                            {ordersData.map((item, index) => {
                                // --- CHANGE: Conditional rendering based on icon type ---
                                let IconContent;
                                if (item.iconComponent) {
                                    // It's an MUI Icon Component
                                    const MUIcon = item.iconComponent;
                                    IconContent = <MUIcon sx={{ fontSize: '1rem', color: 'white' }}/>;
                                } else if (item.iconSrc) {
                                    // It's an image source
                                    IconContent = (
                                        <img
                                            src={item.iconSrc}
                                            alt="" // Decorative
                                            style={{
                                                width: '16px', // Adjust size to fit dot
                                                height: '16px',
                                                filter: item.color === 'secondary.main' ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(80deg) brightness(100%) contrast(100%)' : undefined // Example: Make secondary icon white via filter
                                            }}
                                        />
                                    );
                                }

                                return (
                                    <TimelineItem key={item.id} sx={{ minHeight: '60px' }}>
                                        <TimelineSeparator>
                                            <TimelineDot sx={{
                                                bgcolor: item.color,
                                                boxShadow: 'none',
                                                m: 0,
                                                p: 0.8, // Keep padding for the dot size
                                                display: 'flex', // Center the content (icon or img)
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                 {IconContent} {/* Render the determined icon/image */}
                                            </TimelineDot>

                                            {index < ordersData.length - 1 && <TimelineConnector sx={{ bgcolor: cardBorderColor }} />}
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ pt: 0.5, pb: 2, pl: 2 }}>
                                             <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '14px', fontFamily: "Poppins, san-serif"}}>
                                                {item.title}
                                            </Typography>
                                            <Typography sx={{ color: secondaryTextColor, fontSize: '12px', fontWeight: "700", fontFamily: "Poppins, san-serif"}}>
                                                {item.date}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                );
                            })}
                         </Timeline>
                    </Paper>
                </Grid>    

            </Grid>
        </Box>
    );
}