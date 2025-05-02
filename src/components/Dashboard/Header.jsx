import React from 'react';
import {
  Toolbar,
  Typography,
  Breadcrumbs,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Header({
  pageTitle = "Dashboard",
  breadcrumbParent = "Pages",
  placeholderText = "Type here...",
  signInText = "Sign In"
}) {
  const primaryTextColor = '#2D3748';
  const secondaryTextColor = '#A0AEC0';
  const iconColor = '#718096';
  const inputBgColor = '#F8F9FA';
  const appBarBgColor = '#FFFFFF';

  return (
    <Box sx={{ backgroundColor: inputBgColor, color: primaryTextColor, py: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Section */}
        <Box>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontSize: '0.875rem',
              color: secondaryTextColor,
              mb: 0.5,
              mt: '1.2rem'
            }}
          >
            <Typography sx={{ color: secondaryTextColor }}>{breadcrumbParent}</Typography>
            <Typography sx={{ color: primaryTextColor, fontWeight: '500' }}>{pageTitle}</Typography>
          </Breadcrumbs>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: primaryTextColor, pt: '10px' }}
          >
            {pageTitle}
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            placeholder={placeholderText}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: iconColor, fontSize: '1.25rem' }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: '12px',
                backgroundColor: appBarBgColor,
                fontSize: '0.875rem',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }
            }}
            variant="outlined"
            sx={{ width: '250px' }}
          />

          <Button
            startIcon={<PersonOutlineIcon sx={{ fontSize: '1.25rem' }} />}
            sx={{
              color: iconColor,
              textTransform: 'none',
              fontWeight: 'medium',
              fontSize: '0.875rem',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            {signInText}
          </Button>

          <IconButton size="small" sx={{ color: iconColor }}>
            <SettingsIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
          <IconButton size="small" sx={{ color: iconColor }}>
            <NotificationsNoneIcon sx={{ fontSize: '1.25rem' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
}
