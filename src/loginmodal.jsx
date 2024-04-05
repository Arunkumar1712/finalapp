import React,{useState,useContext} from "react";
import { TextField, Button, Box } from "@mui/material";
import "./App.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "./context/userContext";
// import { MobileNavigation } from "./MobileNavigation";
export function LoginForm() {
  const { setUser } = useContext(UserContext);
    const navigate = useNavigate()
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
  const [data,setData] = useState({
    email:"",
    password:"",

  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login action
    const { email, password } = data;
    try {
        const response = await axios.post('/login', { email, password });
        const responseData = response.data;
        if (responseData.error) {
            toast.error(responseData.error);
        } else {
            // Store the token in local storage
            localStorage.setItem('token', responseData.token);
            // Update user state in parent component
            setUser(responseData.user);
            setData({});
            toast.success('Welcome to OutfitOracle!');
            navigate("/home");
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
};


  return (
    <div
      className="bglogin"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loginbox">
        <h2 style={{ color: "white" }}>Login</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "100%", // Make text fields wider
            },
            '@media (max-width: 600px)': {
              '& .MuiTextField-root': {
                width: 'calc(100% - 16px)', 
               // Adjust width for smaller screens
              },
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData({...data, email:e.target.value})}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>
          <div>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData({...data, password:e.target.value})}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>
          <div style={{ display: "flex", margin: "10px" }}>
            <Typography
              href="#"
              variant="body1"
              component="h2"
              sx={{ color: "white" }}
            >
              Forget password?
            </Typography>
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{
              m: 1,
              margin: "10px",
              width: "90%", // Make button wider
              height: "38px", // Change button height
              color: "black",
              backgroundColor: "white",
              borderRadius: "30px",
              fontSize: "14px",
            }}
          >
            Login
          </Button>
          <Typography
            variant="body1"
            component="h2"
            sx={{ color: "white" }}
            className="register-button"
          >
            Don't have an Account?{" "}
            <Button
              type="submit"
              variant="text"
              sx={{ color: "white" }}
              component={Link}
              to="/signup"
            >
              signup
            </Button>
          </Typography>
        </Box>
       
      </div>
    </div>
  );
}
