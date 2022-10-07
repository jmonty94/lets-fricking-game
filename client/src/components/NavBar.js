import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Image } from 'mui-image';
import navbarLogo from './../images/dashboard-logo-lfg-white.png';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Current Team', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters  sx={{ justifyContent: 'space-between'}}>
          <Image
            src={navbarLogo}
            height="73.72px"
            width="285.94px"
            fit='contain'
            duration={3000}
            easing=
            'cubic-bezier(0.7, 0, 0.6, 1)'
            showLoading=
            {false}
            errorIcon=
            {true}
            shift={null}
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: { p: 0 }, md: { pl: 15 } } }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                           {/* const settings = ['Profile', 'Current Team', 'Logout']; */}

                                    <MenuItem>

                                      <Link to="/users/1">  <Typography textAlign="center">Profile</Typography> </Link>
                                      {/* change styling */}
                                    </MenuItem>
                                    <MenuItem>

                                      <Link to="">  <Typography textAlign="center">Current Team</Typography> </Link>
                                      {/* needs proper link */}
                                    </MenuItem>
                                    {Auth.loggedIn() ? (
                                      <MenuItem onClick={() => Auth.logout()}>
                                        <Typography textAlign="center">Log Out</Typography> 
                                      </MenuItem>
                                    ) : (
                                      <MenuItem>
                                        <Link to="/signinup">  <Typography textAlign="center">Login/Signup</Typography> </Link>
                                      </MenuItem>
                                    )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;