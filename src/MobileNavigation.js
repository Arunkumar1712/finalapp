import logo from "./images/logo2.png";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WeatherIcon from "@mui/icons-material/Cloud";
import AboutUsIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import HomeMaxOutlinedIcon from "@mui/icons-material/HomeMaxOutlined";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/system';
import {useContext,useState} from "react";
import { UserContext } from "./context/userContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {   Menu, MenuItem } from "@mui/material";
import axios from 'axios';

const StyledAppBar = styled(AppBar)({
  boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.5)', // White shadow
});
export function MobileNavigation({ handleDrawerToggle, openDrawer }) {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint
      const response = await axios.post('/logout');
      const responseData = response.data;
      // Check if the response contains a success message or any other indicator
      if (responseData.success) {
        // Redirect the user to the login page or any other appropriate page
        navigate("/home");
        
      } else {
        // If the logout request fails or returns unexpected data, handle it appropriately
        console.error('Logout failed:', responseData.error || 'Unexpected response data');
        // Display an error message to the user or handle the error in some other way
        // Example: toast.error('Logout failed. Please try again later.');
      }
    } catch (error) {
      // Handle errors - Display error message or log the error for debugging
      console.error('An error occurred during logout:', error);
      // Example: Display a generic error message to the user
      // toast.error('An error occurred during logout. Please try again later.');
    }
  };
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar className="appbar" style={{ backgroundColor: "black" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Blank space to maintain the position of the toggle button */}

          <Typography
            variant="h6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            className="appbar"
          >
            <img
              src={logo}
              alt="Logo"
              style={{ marginLeft: "30px", height: "30px" }} />
            Outfit Oracle
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
        <List>
          <ListItem button component={Link} to="/home">
            <ListItemIcon>
              <HomeMaxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/weather">
            <ListItemIcon>
              <WeatherIcon />
            </ListItemIcon>
            <ListItemText primary="Weather" />
          </ListItem>
          <ListItem button component={Link} to="/about-us">
            <ListItemIcon>
              <AboutUsIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button component={Link} to="/clothings">
            <ListItemIcon>
              <span class="material-symbols-outlined">styler</span>
            </ListItemIcon>
            <ListItemText primary="Clothings" />
          </ListItem>
          {/* Conditional rendering based on user authentication */}
          {user ? (
            <>
              <ListItem button onClick={handleMenuOpen}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItem>
              <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>{user.name}</MenuItem>
              <MenuItem disabled>{user.email}</MenuItem>
              {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
            </Menu>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={Link} to="/signup">
                <ListItemText primary="Signup" />
              </ListItem>
              {/* <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem> */}
            </>
          )}
        </List>
        
      </Drawer>
    </>
  );
}



// Styled Button component with white hover color
const StyledButton = styled(Button)({
  '&:hover': {
    color: 'white',
     // White hover color
  },
});

export function NavigationAppBar() {
  const navigate =useNavigate()
  const {user} = useContext(UserContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint
      const response = await axios.post('/logout');
      const responseData = response.data;
      // Check if the response contains a success message or any other indicator
      if (responseData.success) {
        // Clear caches
        caches.keys().then(function(names) {
          for (let name of names)
            caches.delete(name);
        });
        
        // Redirect the user to the login page or any other appropriate page
        navigate('/login');
        
        // Reload the page
        window.location.reload();
      } else {
        // If the logout request fails or returns unexpected data, handle it appropriately
        console.error('Logout failed:', responseData.error || 'Unexpected response data');
        // Display an error message to the user or handle the error in some other way
        // Example: toast.error('Logout failed. Please try again later.');
      }
    } catch (error) {
      // Handle errors - Display error message or log the error for debugging
      console.error('An error occurred during logout:', error);
      // Example: Display a generic error message to the user
      // toast.error('An error occurred during logout. Please try again later.');
    }
  };
  
  return (
    <StyledAppBar position="static" sx={{ borderColor: 'white' }}>
      <Toolbar style={{ backgroundColor: 'black' }}>
        <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          Outfit Oracle
        </Typography>
        <div className ="navbarhover">
        <StyledButton color="inherit" component={Link} to="/home">
          Home
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/weather">
          Weather
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/about-us">
          About Us
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/clothings">
          Clothings
        </StyledButton>
        {/* <StyledButton color="inherit" component={Link} to="/login">
          Login
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/signup">
          Signup
        </StyledButton> */}
        </div>
        {user ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>{user.name}</MenuItem>
              <MenuItem disabled>{user.email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <StyledButton color="inherit" component={Link} to="/login">
          Login
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/signup">
          Signup
        </StyledButton>
        {/* <StyledButton color="inherit" onClick={handleLogout} component={Link} to="/login">
          Logout
        </StyledButton> */}
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}
