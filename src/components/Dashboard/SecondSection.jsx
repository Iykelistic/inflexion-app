import React from 'react';
import {
    Box,
    Paper,
    Typography,
    LinearProgress,
    Divider
} from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale, 
  LinearScale, 
  BarElement, 
  PointElement, 
  LineElement, 
  Title,
  Tooltip,
  Legend,
  Filler 
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { TiSpanner } from "react-icons/ti";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
);

const SummaryStat = ({ icon, title, value, progress }) => {
    const tealColor = '#4FD1C5';
    const primaryTextColor = '#2D3748';
    const secondaryTextColor = '#A0AEC0';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                 <Box sx={{
                    backgroundColor: tealColor,
                    borderRadius: '50%',
                    p: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                 }}>
                    {React.cloneElement(icon, { sx: { fontSize: '1rem' } })}
                 </Box>
                <Typography sx={{ fontSize: '12px', fontWeight: "700", fontFamily: "Poppins, san-serif", color: secondaryTextColor }}>{title}</Typography>
            </Box>
            <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: "Poppins, san-serif", color: primaryTextColor, mb: 0.5 }}>
                {value}
            </Typography>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    width: '80%',
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: '#E2E8F0',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: tealColor,
                    },
                 }}
            />
        </Box>
    );
};


export default function SecondSection() {
    const primaryTextColor = '#2D3748';
    const secondaryTextColor = '#A0AEC0';
    const greenColor = '#48BB78';
    const cardBg = '#FFFFFF';
    const chartDarkBg = '#2D3748'; 
    const cardBorderColor = '#E2E8F0';
    const tealColor = '#4FD1C5'; 
    const darkLineColor = '#2D3748'; 


    const summaryData = [
        { icon: <AccountBalanceWalletIcon/>, title: "Users", value: "32,984", progress: 70 },
        { icon: <RocketLaunchIcon />, title: "Clicks", value: "2,42m", progress: 40 },
        { icon: <ShoppingCartIcon />, title: "Sales", value: "2,400$", progress: 60 },
        { icon: <TiSpanner />, title: "Items", value: "320", progress: 30 },
    ];

    const barChartData = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
        datasets: [
            {
                label: 'Active Users',
                data: [300, 250, 120, 280, 220, 450, 400, 350, 500], 
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 0,
                borderRadius: 5, 
                barThickness: 10, 
            },
        ],
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }, 
        },
        scales: {
            x: {
                grid: { display: false }, 
                ticks: { color: secondaryTextColor }, 
                 border: { display: false }, 
            },
            y: {
                beginAtZero: true,
                max: 500, 
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false, 
                 },
                ticks: {
                    color: secondaryTextColor, 
                    stepSize: 100,
                    padding: 10 
                },
                border: { display: false }, 
            },
        },
    };


    // Line Chart (Sales Overview) Data
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Dataset 1 (Teal)',
                data: [220, 250, 200, 280, 350, 300, 380, 320, 280, 230, 300, 420], // Dummy data
                borderColor: tealColor,
                backgroundColor: 'rgba(79, 209, 197, 0.2)', 
                tension: 0.4, 
                fill: true, 
                pointRadius: 0, 
                pointHoverRadius: 5, 
            },
            {
                label: 'Dataset 2 (Dark)',
                data: [500, 400, 350, 250, 280, 220, 260, 290, 240, 210, 250, 280], // Dummy data
                borderColor: darkLineColor,
                backgroundColor: 'rgba(45, 55, 72, 0.1)', 
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 5,
            },
        ],
    };

     const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                 grid: { display: false },
                 ticks: { color: secondaryTextColor },
                 border: { display: false },
            },
            y: {
                beginAtZero: true,
                max: 500, 
                grid: {
                    color: cardBorderColor, 
                    // borderDash: [5, 5], 
                    drawBorder: false,
                },
                ticks: {
                    color: secondaryTextColor,
                    stepSize: 100,
                    padding: 10
                },
                border: { display: false },
            },
        },
        interaction: { 
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
     };

  


    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, p: 3, backgroundColor: '#F8F9FA' }}>

            {/* Card 1: Active Users */}
            <Paper
                elevation={0}
                sx={{
                    width: '440px',
                    borderRadius: '15px',
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorderColor}`,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                    boxSizing: 'border-box'
                 }}
            >
                {/* --- Bar Chart --- */}
                <Box
                    sx={{
                        height: '250px',
                        backgroundColor: chartDarkBg,
                        m: 2,
                        borderRadius: '12px',
                        p: 2, 
                        position: 'relative'
                    }}
                >
                    <Bar options={barChartOptions} data={barChartData} />
                </Box>

                {/* Text Content */}
                <Box sx={{ px: 3, pt: 1, pb: 2 }}>
                    <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '18px', mb: 0.5, fontFamily: "Poppins, san-serif"}}>
                        Active Users
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: secondaryTextColor, fontWeight: '700', fontFamily: "Poppins, san-serif"}}>
                        <Typography component="span" sx={{ color: greenColor, fontWeight: '400', fontSize: "14px", fontFamily: "Poppins, san-serif"}}>(+23)</Typography> than last week
                    </Typography>
                </Box>

                <Divider sx={{ mx: 3 }} />

                {/* Summary Stats Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3, pt: 2 }}>
                    {summaryData.map((item, index) => (
                        <SummaryStat
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            value={item.value}
                            progress={item.progress}
                        />
                    ))}
                </Box>
            </Paper>

            {/* Card 2: Sales Overview */}
           
            <Paper
                elevation={0}
                sx={{
                    width: '620px',
                    borderRadius: '15px',
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorderColor}`,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                    boxSizing: 'border-box'
                 }}
            >
                {/* Text Content */}
                <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontWeight: '700', color: primaryTextColor, fontSize: '18px', mb: 0.5, fontFamily: "Poppins, san-serif"}}>
                        Sales overview
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: secondaryTextColor, fontWegiht: "700", fontFamily: "Poppins, san-serif"}}>
                        <Typography component="span" sx={{ color: greenColor, fontWeight: "400", fontFamily: "Poppins, san-serif"}}>(+5)</Typography> more in 2021
                    </Typography>
                </Box>

                {/* --- Line Chart --- */}
                <Box
                    sx={{
                        height: '350px',
                        flexGrow: 1,
                        p: 2, 
                        pt: 0, 
                        position: 'relative' 
                    }}
                >
                     <Line options={lineChartOptions} data={lineChartData} />
                </Box>
            </Paper>
        </Box>
    );
}