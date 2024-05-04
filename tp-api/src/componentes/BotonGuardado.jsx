import React from "react";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';
import Update from '@mui/icons-material/Update';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import { Await, useNavigate } from 'react-router-dom';
import PorVer from "./PorVer";
import { Link } from 'react-router-dom';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus({pelicula}) {
  console.log("esto es la pelicula", pelicula)
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handlePorVer = () =>{
    navigate("/PorVer", { state: { objeto: pelicula } });
    
  }
  const handlePreferidas = () =>{
    navigate("/Preferidas", { state: { objeto: pelicula } });
    
  }
  const handleVistas = () =>{
    navigate("/Vistas", { state: { objeto: pelicula } });
    
  }

  return (
    <div>
      <Button 
        id="demo-customized-button"
       /* aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation*/
        onClick={handleClick}
        
        endIcon={<BookmarkBorder id="botonbookmark"/>}
      >
      Guardar
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Agregar a lista:
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem  onClick={handlePreferidas} disableRipple >
          <FavoriteBorder />
          Preferidas
          <AddCircleOutline id="botonagregar"/>
        </MenuItem>
        <MenuItem onClick={handlePorVer} disableRipple>
          <Update />
          Por ver
          <AddCircleOutline id="botonagregar2"/>
        </MenuItem>
        <MenuItem onClick={handleVistas} disableRipple>
          <RemoveRedEye />
          Vistas
          <AddCircleOutline id="botonagregar3"/>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}