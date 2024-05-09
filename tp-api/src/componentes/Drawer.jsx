import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";





const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
   
    setOpen(true);
  };

  const handleDrawerClose = () => {
    
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      {<div position="static" open={open}>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            
          >
            <MenuIcon />
          </IconButton>
          
        
      </div>}
      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor: '#26425A', // Cambia el color de fondo del Drawer a negro
            color: 'black', // Cambia el color del texto a blanco
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <img
            className="logo-header-responsive"
            src={require("../imagenes/logos/logo blanco3.png")}
            alt="logo-header"
          />
        <Divider />
        <List className='listas-responsive'>
         <Link  to="/inicio" onClick={handleDrawerClose} className='itemresponsive'>Inicio</Link>
         <Link to="/Vistas" onClick={handleDrawerClose} className='itemresponsive'>Vistas</Link>
         <Link to="/PorVer" onClick={handleDrawerClose} className='itemresponsive'>Por ver</Link>
         <Link to="/Preferidas" onClick={handleDrawerClose} className='itemresponsive'>Preferidas</Link>
          
        </List>
        
      </Drawer>
    
    </Box>
  );
}