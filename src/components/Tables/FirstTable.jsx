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
  Chip,
  Link,
} from '@mui/material';

// Image Imports (ensure paths are correct)
import avatarElaine from '../../assets/images/Elaine.svg';
import avatarSidra from '../../assets/images/Sidra.svg';
import avatarKramer from '../../assets/images/Cosmo.svg';
import avatarNewman from '../../assets/images/Newman.svg';
import avatarCostanza from '../../assets/images/Frank.svg';
import avatarArt from '../../assets/images/Art.svg';

const authorsData = [
      { id: 1, name: 'Elaine Benes', email: 'elaine@vandelay.com', avatar: avatarElaine, jobTitle: 'Manager', jobArea: 'Organization', status: 'Online', employedDate: '14/06/21', },
      { id: 2, name: 'Sidra Holland', email: 'sidra@vandelay.com', avatar: avatarSidra, jobTitle: 'Programmer', jobArea: 'Developer', status: 'Offline', employedDate: '14/06/21', },
      { id: 3, name: 'Cosmo Kramer', email: 'kramer@vandelay.com', avatar: avatarKramer, jobTitle: 'Executive', jobArea: 'Projects', status: 'Online', employedDate: '14/06/21', },
      { id: 4, name: 'Newman', email: 'newman@usps.com', avatar: avatarNewman, jobTitle: 'Manager', jobArea: 'Organization', status: 'Online', employedDate: '14/06/21', },
      { id: 5, name: 'Frank Costanza', email: 'frank@vandelay.com', avatar: avatarCostanza, jobTitle: 'Programmer', jobArea: 'Developer', status: 'Offline', employedDate: '14/06/21', },
      { id: 6, name: 'Art VanDelay', email: 'art.ie@vandelay.com', avatar: avatarArt, jobTitle: 'Designer', jobArea: 'UI/UX Design', status: 'Offline', employedDate: '14/06/21', },
];

function FirstTable() {
  return (
    // --- Outer Card Container ---
    <Box
      sx={{
        width: '100%',
        maxWidth: '1080px', 
        minHeight: '400px', 
        backgroundColor: 'white', 
        borderRadius: '15px',  
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
        overflow: 'hidden', 
        p: 0, 
        margin: '0 auto',
      }}

    >

      <Box
          className="p-4 md:p-6"
      >
        <Typography
          variant="h6"
          component="h2"
          className="text-slate-800 font-bold mb-5" 
          sx={{ fontFamily: "'Poppins', sans-serif", paddingTop: "10px", marginLeft: "1rem", fontSize: "18px", fontWeight: "700"}}
        >
          Authors Table
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="authors table">
            <TableHead>
              <TableRow sx={{ '& th': { borderBottom: 'none' } }}>
               
                 <TableCell className="text-xs font-bold uppercase text-slate-500 !py-3 !pl-0 !pr-2 first__table__header">Author</TableCell>
                 <TableCell className="text-xs font-bold uppercase text-slate-500 !py-3 !px-2 first__table__header">Function</TableCell>
                 <TableCell className="text-xs font-bold uppercase text-slate-500 !py-3 !px-2 first__table__header">Status</TableCell>
                 <TableCell className="text-xs font-bold uppercase text-slate-500 !py-3 !px-2 first__table__header">Employed</TableCell>
                 <TableCell className="text-xs font-bold uppercase text-slate-500 !py-3 !pl-2 !pr-0 text-center first__table__header"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {authorsData.map((author) => (

                <TableRow
                  key={author.id}
                  sx={{
                    '& td, & th': { borderBottom: '1px solid #E2E8F0' },
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="!py-3 !pl-0 !pr-2">
                    <Box className="flex items-center">
                      <Avatar alt={author.name} src={author.avatar} sx={{ width: 40, height: 40, borderRadius: '12px' }} />
                      <Box className="ml-3">
                        <Typography variant="body2" className="font-bold text-slate-800 first__table__name">{author.name}</Typography>
                        <Typography variant="caption" className="text-slate-500" sx={{marginLeft: "0.7rem", fontWeight: "400", fontSize: "14px", color: "#718096", fontFamily: "Poppins, sans-serif"}}>{author.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell className="!py-3 !px-2">
                     <Typography variant="body2" className="font-semibold text-slate-700 first__table__name_i">{author.jobTitle}</Typography>
                     <Typography variant="caption" className="text-slate-500" sx={{fontWeight: "400", fontSize: "14px", color: "#718096", fontFamily: "Poppins, sans-serif"}}>{author.jobArea}</Typography>
                  </TableCell>
                  <TableCell className="!py-3 !px-2">
                    <Chip label={author.status} size="small" sx={{ height: '24px', fontSize: '14px', fontWeight: '700', borderRadius: '8px', fontFamily: "Poppins, sans-serif", ...(author.status === 'Online' ? { backgroundColor: '#48BB78', color: '#fff' } : { backgroundColor: '#CBD5E0', color: '#fff' }) }} />
                  </TableCell>
                   <TableCell className="!py-3 !px-2">
                     <Typography variant="body2" className="font-semibold text-slate-700 first__table__name_i">{author.employedDate}</Typography>
                   </TableCell>
                   <TableCell className="!py-3 !pl-2 !pr-0 text-center">
                      <Link href="#" underline="none" className="text-xs font-semibold text-slate-500 hover:text-slate-700 first__table__edit" onClick={(e) => { e.preventDefault(); console.log('Edit author:', author.id); }}>Edit</Link>
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

export default FirstTable;