import "./App.css";
import logo from "./logo2.png";
import { useState, useEffect } from "react";
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
import {  Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="App">
      {isSmallScreen ? (
        <MobileNavigation
          handleDrawerToggle={handleDrawerToggle}
          openDrawer={openDrawer}
        />
      ) : (
        <NavigationAppBar />
      )}
      <Routes>
      <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

function MobileNavigation({ handleDrawerToggle, openDrawer }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "black" }}>
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
          >
            <img
              src={logo}
              alt="Logo"
              style={{ marginLeft: "30px", height: "30px" }}
            />
            Outfit Oracle
          </Typography>
        </Toolbar>
      </AppBar>
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

function NavigationAppBar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "black" }}>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton> */}
        <img
          src={logo}
          alt="Logo"
          style={{ marginRight: "10px", height: "40px" }}
        />
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          Outfit Oracle
        </Typography>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/weather">
          <WeatherIcon />
        </Button>
        <Button color="inherit" component={Link} to="/about-us">
          <AboutUsIcon />
        </Button>
        <Button color="inherit" component={Link} to="/clothings">
        <span class="material-symbols-outlined">styler</span>
        </Button>
        <Button color="inherit" varient="outlined" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
