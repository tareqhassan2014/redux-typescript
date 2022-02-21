import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
        </IconButton>
        
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
 
      <AppBar position="static" className='white100'>
        <Toolbar className='header'>
         <div className='row navbarMenu white100'>
             <div className='col-md-3 col-lg-3 d-flex navbarDiv'>
                 <img
                     src='https://i.ibb.co/9ZmfvMV/ecommerce-websites-logo-design20-removebg-preview.png'
                     alt='menu logo not fount'
                     loading="lazy" 
                     width='60%'
                 />
             </div>
             <div className='col-md-5 col-lg-6 '>
             <Search>
                 <SearchIconWrapper>
                   <SearchIcon />
                 </SearchIconWrapper>
                 <StyledInputBase
                   placeholder="Search…"
                   inputProps={{ 'aria-label': 'search' }}
                 />
                 </Search>
             </div>
             <div className='col-md-3 col-lg-3 navbarDiv'>
             <Box sx={{ flexGrow: 1 }} />
                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                 
                 <IconButton
                   size="large"
                   aria-label="show 17 new notifications"
                   color="inherit"
                 >
                   <Badge badgeContent={17} color="error">
                   <ShoppingCartIcon />
                   </Badge>
                 </IconButton>
                 <IconButton
                   size="large"
                   edge="end"
                   aria-label="account of current user"
                   aria-controls={menuId}
                   aria-haspopup="true"
                   onClick={handleProfileMenuOpen}
                   color="inherit"
                 >
                   <AccountCircle />
                 </IconButton>
                 </Box>
                 <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                 <IconButton
                   size="large"
                   aria-label="show more"
                   aria-controls={mobileMenuId}
                   aria-haspopup="true"
                   onClick={handleMobileMenuOpen}
                   color="inherit"
                 >
                   <MoreIcon />
                 </IconButton>
                 </Box>
              </div>
          </div> 
        </Toolbar>
        {renderMobileMenu}
      {renderMenu}
      </AppBar>
   

  );
}
 
 