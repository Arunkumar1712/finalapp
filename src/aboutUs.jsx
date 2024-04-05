import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import video from "./images/AdobeStock_703437187_Video_4K_Preview.mp4"
import img from "./images/abt2.jpeg"
import img1 from "./images/abut1.webp"
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import fashionicon from "./images/fashionicon.webp";
import customer from "./images/customer.png";
import empower from "./images/empower.webp"
import Grid from "@mui/material/Grid";

const AboutUs = () => {
  return (
    <>
    <div class="aboutpage">
        <h2>Discover the story behind our passion for fashion and our commitment to helping you find your perfect style</h2>
    </div>
    <div className="abttxt">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 style={{ color: "white" }}>Style Stars: Meet Our Model Mavericks</h1>
        <h3 style={{ color: "white" }}>Transforming ordinary into extraordinary – because everyone deserves to feel like a model.</h3>
      </div>
    </div>
    <div>
        <h1 style={{ color: "white" }}>BUT WHY US ?</h1>
<Box sx={{ 
  display: "grid", 
  gridTemplateColumns: "1fr", 
  gap: 0, 
  padding: 0, 
  margin: 0, 
  '@media (min-width: 600px)': { 
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "40px",
    margin: "40px"
  } 
}}>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px", }}>
    <CardMedia
      component="img"
      height="270"
      image={img}
      alt="picture"
      sx={{ objectFit: "cover",'@media (min-width: 600px)':{width:"100%"} }}
    />
  </Card>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px" }}>
    <CardContent className="abtcrttxt">
      <h2>Why We Do What We Do</h2>
      <Typography  sx={{ fontSize: "15px" }} variant="body2" color="textSecondary" component="div">
        Outfit Oracle empowers users to look and feel confident with personalized outfit recommendations. We simplify the process of choosing outfits, making fashion accessible to all, regardless of budget. Our mission is to boost confidence and self-expression through affordable, stylish clothing options. We engage with users to continually improve our services and ensure they always feel their best.
      </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px" }}>
    <CardContent className="abtcrttxt">
      <h2>Our Approach</h2>
      <Typography  sx={{ fontSize: "15px" }} variant="body2" color="textSecondary" component="div">
      We strive to elevate your outfit selection experience by tailoring 
      recommendations to your local weather conditions. At Outfit Oracle, 
      we understand that feeling your best means dressing appropriately for
       the climate. Our commitment is to provide high-quality clothing suggestions
        that align with your style preferences and the prevailing weather patterns. 
        With our service, you can effortlessly dress to impress while staying within 
        your budget, regardless of the forecast.
    </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px", }}>
    <CardMedia
      component="img"
      height="290"
      image={img1}
      alt="picture"
      sx={{ objectFit: "cover",'@media (min-width: 600px)':{width:"100%"} }}
    />
  </Card>
</Box>

<div class="abtval">
<h1 style={{ marginTop: '30px',paddingTop:"30px"}}>Our Values,What we Beleive In</h1>
    <Box sx={{ 
  display: "grid", 
  gridTemplateColumns: "1fr", 
  gap: 0, 
  padding: 0, 
  margin: 0, 
  height:"auto",
  
  '@media (min-width: 600px)': { 
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: "40px",
    margin: "40px"
  } 
}}>

   
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px", maxWidth: "calc(100% - 40px)"  }}>
    <CardContent className="abtcrttxt">
    <img src={customer} alt="Logo" style={{ marginRight: '10px', height: '100px' }} />
      <h2>Customer Centricity</h2>
      <Typography  sx={{ fontSize: "15px" }} variant="body2" color="textSecondary" component="div">
      Placing the needs and satisfaction of our users at the forefront of everything we do.
      Upholding honesty, transparency, and ethical standards in all aspects of our operations.
      {/* Celebrating diversity and ensuring that our services cater to individuals from all backgrounds  */}
      </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px" }}>
    <CardContent className="abtcrttxt">
    <img src={fashionicon} alt="Logo" style={{ marginRight: '10px', height: '60px' }} />
      <h2 >Innovation</h2>

      <Typography  sx={{ fontSize: "15px" }} variant="body2" color="textSecondary" component="div">
      Striving for continuous improvement and creativity in providing personalized outfit recommendations.
      Engaging with our users and the broader community to foster a sense of belonging and collaboration
      </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width: "80%", borderRadius: "10px", margin: "20px" }}>
    <CardContent className="abtcrttxt">
    <img src={empower} alt="Logo" style={{ marginRight: '10px', height: '80px' }} />
      <h2>Empowerment</h2>
      <Typography  sx={{ fontSize: "15px" }} variant="body2" color="textSecondary" component="div">
      Empowering individuals to express themselves confidently through their clothing choices and personal style.
      Ensuring the highest standards of quality in our products, services, and user experiences.
      </Typography>
    </CardContent>
  </Card>
</Box>

</div>

</div>
<div class="Footerbg">
<Link to="/clothings" style={{ textDecoration: "none" }}>
              <Button
                className="hpbtn"
                variant="contained"
                style={{ backgroundColor: "#E36414" ,marginLeft:"20px"}}
              >
                Find Your Style
              </Button>
            </Link>
            <Link to="/weather" style={{ textDecoration: "none" }}>
              <Button
                className="hpbtn"
                variant="contained"
                style={{ backgroundColor: "#E36414" ,marginRight:"20px",marginLeft:"20px"}}
              >
                Get Suggestion Based on Weather
              </Button>
            </Link>
            <Typography class="fttext" variant="body1" paragraph>
          Thank you for choosing Outfit Oracle for all your fashion needs. We look forward to helping you look your best every day!
        </Typography>
</div>
    


    </>
  );
};

export default AboutUs;