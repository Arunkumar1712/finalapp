import "./App.css";
import { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import {LoginForm} from './loginmodal';
import {SignupForm} from './signuppage';
import {Clothing} from './clothingpage';
import { MobileNavigation, NavigationAppBar } from "./MobileNavigation";
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import {UserContextProvider} from './context/userContext'
import {Weather} from './weatherpage'
import {Recommendation} from './clothrecom'
import {Werecommendation} from "./weasug"
import AboutUs from "./aboutUs"

axios.defaults.baseURL='https://capstone-backend-b6i0.onrender.com';
axios.defaults.withCredentials = true
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
    <UserContextProvider>
    <div className="App">
      {isSmallScreen ? (
        <MobileNavigation
          handleDrawerToggle={handleDrawerToggle}
          openDrawer={openDrawer}
        />
      ) : (
        <NavigationAppBar />
      )}
      <Toaster position ='bottom-right' toastOptions={{duration : 2000}}/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<LoginForm  />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/clothings" element={<Clothing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/recomendations/:itemname" element={<Recommendation/>}/>
      <Route path="/:routesuggestion" element={<Werecommendation/>}/>
      </Routes>
    </div>
    </UserContextProvider>
  );
}

export default App;
