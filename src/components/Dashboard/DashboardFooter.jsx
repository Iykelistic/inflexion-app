import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function DashboardFooter() {
 
    const secondaryTextColor = '#A0AEC0'; 
    const cardBorderColor = '#E2E8F0';   
    const primaryTextColor = '#2D3748';   

    const footerLinks = ['About Us', 'Privacy', 'Blog', 'License'];

    return (
        <Box
            component="footer" 
            sx={{
                py: 3,
                px: 3, 
                mt: 4, 
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center', 
                color: secondaryTextColor, 
                flexWrap: 'wrap',
                gap: 2 
            }}
        >
           
            <Typography sx={{ fontSize: '12px', fontWeight: "400", fontFamily: "Poppins, san-serif"}}>
                © 2022, Made with Lorem for a better web
            </Typography>

            <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}> 
                {footerLinks.map((text) => (
                    <Link
                        key={text}
                        href="#"
                        underline="hover" 
                        sx={{
                            color: 'inherit', 
                            fontSize: '12px',
                            fontWeight: '400',
                            fontFamily: "Poppins, san-serif",
                            '&:hover': {
                                color: primaryTextColor, 
                            }
                        }}
                    >
                        {text}
                    </Link>
                ))}
            </Box>
        </Box>
    );
}