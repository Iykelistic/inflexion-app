import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  LinearProgress, 
  IconButton,   
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';     

import logoXd from '../../assets/images/AdobeXD.svg';        
import logoAtlassian from '../../assets/images/Atlassian.svg'; 
import logoSlack from '../../assets/images/Slack.svg';   
import logoSpotify from '../../assets/images/Spotify.svg'; 
import logoJira from '../../assets/images/Jira.svg';   

const projectsData = [
  {
    id: 'proj1',
    logo: logoXd,
    name: 'Software Import/Export',
    budget: '$14,000',
    status: 'Working',
    completion: 60,
  },
  {
    id: 'proj2',
    logo: logoAtlassian,
    name: 'Add Progress Track',
    budget: '$3,000',
    status: 'Canceled',
    completion: 10,
  },
  {
    id: 'proj3',
    logo: logoSlack,
    name: 'Fix Platform Errors',
    budget: 'Not set',
    status: 'Done',
    completion: 100,
  },
  {
    id: 'proj4',
    logo: logoSpotify,
    name: 'Launch our Mobile App',
    budget: '$32,000',
    status: 'Done',
    completion: 100,
  },
  {
    id: 'proj5',
    logo: logoJira,
    name: 'Add the New Pricing Page',
    budget: '$400',
    status: 'Working',
    completion: 25,
  },
];


const tealColor = '#4FD1C5'; 

function SecondTable() {
  return (
  
    <Box
      sx={{
        width: '100%', 
        maxWidth: '1080px', 
        minHeight: '300px', 
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        overflow: 'hidden', 
        margin: "1.5rem auto"
      }}
    >
     
      <Box className="p-4 md:p-6">
        {/* Header Section */}
        <Box className="mb-5">
           <Typography
            variant="h6"
            component="h2"
            className="text-slate-800 font-bold"
            sx={{ fontFamily: "'Poppins', sans-serif", paddingTop: "15px", marginLeft: "1.5rem", fontSize: "18px", fontWeight: "700"}}
          >
            Projects
          </Typography>
          <Box className="flex items-center mt-1" sx={{marginLeft: "1.5rem"}}>
             <CheckCircleIcon sx={{ color: '#48BB78', fontSize: '0.8rem', mr: 0.5 }} /> 
             <Typography variant="body2" className="text-slate-500 font-medium" sx={{color: "#A0AEC0", fontSize: "14px", fontWeight: "400", fontFamily: "Poppins, sans-serif"}}>
                <span className="text-slate-600" sx={{color: "#A0AEC0", fontSize: "14px", fontWeight: "400", fontFamily: "Poppins, sans-serif"}}>30 done</span> this month
             </Typography>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer>
       
          <Table sx={{ minWidth: 600 }} aria-label="projects table">
            <TableHead>
              <TableRow sx={{ '& th': { borderBottom: 'none' } }}>
                {/* Companies Header */}
                <TableCell className="text-xs font-bold uppercase text-slate-400 !py-3 !pl-0 !pr-2 !w-2/5" sx={{color: "#A0AEC0", fontSize: "10px", fontWeight: "700", fontFamily: "Poppins, sans-serif"}}> 
                  Companies
                </TableCell>
                {/* Budget Header */}
                <TableCell className="text-xs font-bold uppercase text-slate-400 !py-3 !px-2" sx={{color: "#A0AEC0", fontSize: "10px", fontWeight: "700", fontFamily: "Poppins, sans-serif"}}>
                  Budget
                </TableCell>
                {/* Status Header */}
                <TableCell className="text-xs font-bold uppercase text-slate-400 !py-3 !px-2" sx={{color: "#A0AEC0", fontSize: "10px", fontWeight: "700", fontFamily: "Poppins, sans-serif"}}>
                  Status
                </TableCell>
                {/* Completion Header */}
                <TableCell className="text-xs font-bold uppercase text-slate-400 !py-3 !px-2" sx={{color: "#A0AEC0", fontSize: "10px", fontWeight: "700", fontFamily: "Poppins, sans-serif"}}>
                  Completion
                </TableCell>
                {/* Action Header */}
                <TableCell className="text-xs font-bold uppercase text-slate-400 !py-3 !pl-2 !pr-0 text-center">
                   {/* Empty */}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectsData.map((project) => (
                <TableRow
                  key={project.id}
                  sx={{
                    '& td, & th': { borderBottom: '1px solid #E9EDF7' },
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                  
                >
                  {/* Companies Cell */}
                  <TableCell className="!py-3 !pl-0 !pr-2">
                    <Box className="flex items-center">
                      <Avatar
                         alt={project.name}
                         src={project.logo}
                         variant="rounded" 
                         sx={{ width: 24, height: 24 }} 
                      />
                      <Typography variant="body2" className="font-bold text-slate-700 ml-3 second__table__name">
                        {project.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Budget Cell */}
                  <TableCell className="!py-3 !px-2">
                     <Typography variant="body2" className="font-semibold text-slate-600  second__table__name_i">
                       {project.budget}
                     </Typography>
                  </TableCell>

                  {/* Status Cell */}
                  <TableCell className="!py-3 !px-2">
                     <Typography variant="body2" className="font-semibold text-slate-600 second__table__name_i">
                       {project.status}
                     </Typography>
                  </TableCell>

                  {/* Completion Cell */}
                  <TableCell className="!py-3 !px-2">
                    <Box>
                        <Typography variant="body2" sx={{ color: tealColor, fontWeight: '700', mb: 0.5, fontSize: "14px", fontFamily: "Poppins, sans-serif"}}>
                            {project.completion}%
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={project.completion}
                            sx={{
                                height: 5, 
                                borderRadius: 5,
                                backgroundColor: '#E2E8F0', 
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: tealColor,
                                    borderRadius: 5,
                                },
                            }}
                        />
                    </Box>
                  </TableCell>

                  {/* Action Cell */}
                  <TableCell className="!py-2 !pl-2 !pr-0 text-center">
                     <IconButton
                        size="small"
                        aria-label="more options"
                        
                        onClick={(e) => { console.log('Options for:', project.id); }}
                      >
                         <MoreVertIcon sx={{ color: '#A0AEC0' }} /> 
                      </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default SecondTable;