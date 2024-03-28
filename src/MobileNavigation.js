import logo from "./logo2.png";
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
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/system';
const StyledAppBar = styled(AppBar)({
  boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.5)', // White shadow
});
export function MobileNavigation({ handleDrawerToggle, openDrawer }) {
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
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/signup">
            <ListItemText primary="Signup" />
          </ListItem>
          <ListItem button component={Link} to="/account">

            <ListItemText primary="Account" />
          </ListItem>
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
        <StyledButton color="inherit" component={Link} to="/login">
          Login
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/signup">
          Signup
        </StyledButton></div>
      </Toolbar>
    </StyledAppBar>
  );
}
