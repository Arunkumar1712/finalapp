import "./App.css";
import { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { MobileNavigation, NavigationAppBar } from "./MobileNavigation";
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

export default App;
