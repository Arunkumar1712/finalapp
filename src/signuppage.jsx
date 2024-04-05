import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "./App.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function SignupForm({ onSignup }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
const navigate = useNavigate()
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",

  })
  const handleSubmit = async (event) => {
    event.preventDefault();
   
   const {name, email, password}=data
try{
    const {data} = await axios.post('/signup',{
        name,email,password
    })
    if(data.error){
        toast.error(data.error)
    }else{
        setData({})
        toast.success('Login Successful. Welcome to OutfitOracle!')
        navigate('/login')
    }
}catch(error){
   console.log(error        )
}
   
  };
//   console.log(name);
//   console.log(email);
//   console.log(password);
  return (
    <div
      className="signbg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="signbox">
        <h2 style={{ color: "white" }}>Signup</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: '100%', // Make text fields wider
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
              id="name"
              label="Name"
              type="name"
              value={data.name}
              onChange={(e) => setData({...data, name:e.target.value})}
              sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          </div>
          <div>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData({...data, email:e.target.value})}
              sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
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
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{
              m: 1,
              margin: "10px",
              width: '90%', // Make button wider
              height: '38px', // Change button height
              color: "black",
              backgroundColor: "white",
              borderRadius: "30px",
              fontSize: '14px'
            }}
          >
            Register
          </Button>
          <Typography variant="body1" component="h2" sx={{ color: "white" }} className="register-button">
            Already a member?{" "}
            <Button type="submit" variant="text" sx={{ color: "white" }} component={Link} to="/login">
              login
            </Button>
          </Typography>
        </Box>
      </div>
    </div>
  );
}
