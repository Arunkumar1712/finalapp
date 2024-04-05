import React from "react";
import GIRL from "./images/GIRL.png";
import Girl from "./images/girl3.jpg";
import "../src/App.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import logo from "./images/logof.png";
import insta from "./images/Instagram_icon.png.webp"
import x from "./images/X.png"
import lin from "./images/linkedin.png"
import play from "./images/Googleplaystore.png"
import app from "./images/appstore.png"
import  { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";

export function Homepage() {

  const [data, setData] = useState([]);
  // const[teamData,setTeamData]=useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/homepagedata");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <div className="caption">
        
        <div className="texthome">
          Never Ask, What Should I Wear? -
          <span style={{ color: "#D04848" }}>Again ,</span> "
          <span style={{ color: "#FDE767" }}>Unlock</span> Your{" "}
          <span style={{ color: "#F3B95F" }}> Confidence </span> with the
          <span style={{ color: "#6895D2" }}> Perfect Outfit</span> ",
          "Effortless Style, Every Day"
          <div className="text1home">
            Never stare at your closet again. Get daily outfit inspiration with
            OutfitOracle.
            <Link to="/weather" style={{ textDecoration: "none" }}>
              <Button
                className="hpbtn"
                variant="contained"
                style={{ backgroundColor: "#E36414" }}
              >
                Get styled
              </Button>
            </Link>
          </div>
        </div>
        <div className="imagehome">
          <img src={GIRL} alt="girl" style={{ height: "300px" }}></img>
        </div>
      </div> 
      <div className="text2home" style={{ rowGap: "40px" , fontSize:"30px"}}>
        <p>
          <span style={{ color: "#FDE767" }}>Unlock</span> Your{" "}
          <span style={{ color: "#D04848" }}>Style!,</span>
          <span style={{ color: "#6895D2" }}> Discover</span> Your{" "}
          <span style={{ color: "#F3B95F" }}> Signature Look </span>{" "}
        </p>
        <CarouselRatio data={data} />
        <Section/>
        <div style={{color:"#E8751A"}}>Meet Our Best Team</div>
        <Cards/>
        <Footer/>
      </div>
    </div>
  );
}

// const data = [
//   {
//     src: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/4/543e6b8CD20221111206503LD-Blue_1.jpg?rnd=20200526195200&tr=w-512",
//     title: "Floral Smocked Short Sleeve Midi Dress",
//     description: "Western wear",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20240318/kQ8C/65f852dc16fd2c6e6a67429c/-473Wx593H-442296103-pink-MODEL.jpg",
//     title: "Foil Print Flared Kurta with Waist Tie-Up",
//     description: "Ethnic wear",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20230419/9rjx/643f8608711cf97ba733671e/-473Wx593H-466055092-blue-MODEL.jpg",
//     title: "Striped Full-Sleeves Shirt FABLE STREET perfect for day",
//     description: "Work wear",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20231212/HSmh/657873b0ddf7791519c8a00e/-473Wx593H-469567092-black-MODEL.jpg",
//     title: "Women Lightly Washed Denim Jacket",
//     description: "Jackets & Coats",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20220927/BXLJ/6332e11ef997dd1f8d1fd8fb/-473Wx593H-441127969-jetblack-MODEL.jpg",
//     title: "Women Fastdry Tapered Workout Joggers",
//     description: "Track Pants",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20231107/Jnp7/6549699bddf7791519730eca/-473Wx593H-466777908-blue-MODEL.jpg",
//     title: "Women Printed textured Relaxed Fit Top",
//     description: "Shirts, Tops & Tunic",
//   },
//   {
//     src: "https://assets.ajio.com/medias/sys_master/root/20240216/qXBD/65ce6d7005ac7d77bb5d35e3/-473Wx593H-467078556-red-MODEL.jpg",
//     title: "Kanchipuram Banarasi Silk Saree with Woven Border",
//     description: "Traditional Sarees",
//   },
  
// ];

export default function CarouselRatio({ data })  {
  return (
   
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: "90%",
        margin:"20px",
        height: 350,
        alignItems: "center",
        backgroundColor: "#0d0d0d",
        padding: 2,
        borderRadius: "10px",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
        background: "linear-gradient(to bottom right,  	#0d0d0d,#0d0d0d)",
        "@media (max-width: 600px)": {
          // Media query for screens smaller than 600px (adjust breakpoint as needed)
          height: 250, // Adjusted height for mobile screens
          width: "88%", // Full width for mobile screens
        },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="vertical"
          size="sm"
          key={item.title}
          variant="outlined"
          sx={{
            minWidth: "150px",
            height: "250px",
            marginLeft: "10px",
            backgroundColor: "#0d0d0d", // Set background color to black
            color: "white", // Set text color to white
            border: "black", // Set border color to faded white
            borderRadius: "8px", // Optional: Add border radius for rounded corners
            boxShadow: "4px 4px 8px 4px rgba(0, 0, 0)",
          }}
        >
          <img
            style={{ height: "150px", minWidth: "100px", borderRadius: "10px" }}
            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?h=120&fit=crop&auto=format`}
            alt={item.title}
          />

          <Box>
            <Typography level="title-md" sx={{ color: "white" }}>
              {item.title}
            </Typography>
            <Typography level="body-sm" sx={{ color: "#F3B95F" }}>
              {item.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
    

  );
}

function Section (){
  return(
  <div className="caption1">
     <div className="imagehome">
          <img src={Girl} alt="girl" style={{ height: "270px" }}></img>
        </div>
        <div className="texthome4" >
       <div style={{fontSize:"30px", textAlign:"left",marginBottom:"20px"}}>Get Started Today!</div>
     <div className="lobster-regular" style={{textAlign:"left",marginBottom:"20px",letterSpacing:"1px",color:"grey"}}>Stay up-to-date with the latest fashion inspiration, tips, and trends from our style experts and community</div>
      <div style={{fontSize:"15px",fontWeight:"100px",color:"grey"}}> Welcome to Outfit Oracle, your personal fashion advisor! Whether you're looking to refresh
         your wardrobe, discover new trends, or find the perfect outfit for any occasion, we've got you 
         covered. Our easy-to-use platform offers personalized styling recommendations tailored to your 
         unique taste and lifestyle</div>
     </div>
     <div>
      <button></button>
     </div>
</div>
  )
}
// const teamData = [
//   {
//     name: "Emma Parker",
//     position: "Fashion Designer",
//     bio: "With a passion for creativity and a keen eye for detail, Emma brings her expertise in fashion design to our team. With years of experience in the industry, she specializes in creating elegant and timeless designs that resonate with modern trends.",
//     image: "https://as1.ftcdn.net/v2/jpg/01/89/97/90/1000_F_189979040_6kj9S2w4DXpis7DS3O9Lt02jRsMFFWfC.jpg",
//     social: {
//       instagram: "https://www.instagram.com/emmaparker_fashion/",
//       linkedin: "https://www.linkedin.com/in/emmaparker",
//       website: "https://www.emmaparkerdesigns.com/"
//     }
//   },
//   {
//     name: "Michael Lee",
//     position: "Textile Specialist",
//     bio: "As our resident textile specialist, Michael combines his knowledge of fabrics and materials with a flair for innovation. He ensures that each garment not only looks stunning but also feels comfortable and luxurious to wear.",
//     image: "https://as2.ftcdn.net/v2/jpg/01/29/50/09/1000_F_129500903_aKBxu8Z7YCIdET1YjXFWTg3ye37kBmXb.jpg",
//     social: {
//       linkedin: "https://www.linkedin.com/in/michaellee",
//       github: "https://github.com/michaeltextiles"
//     }
//   },
//   {
//     name: "Sophie Nguyen",
//     position: "Accessory Designer",
//     bio: "Specializing in accessory design, Sophie brings her unique creativity to our team. From statement jewelry to chic handbags, she adds the perfect finishing touches to our collections, enhancing their overall aesthetic.",
//     image: "https://as2.ftcdn.net/v2/jpg/03/99/04/09/1000_F_399040927_eMO5VBzuevFOzr79IXhS4NJ5vVDSJG7o.jpg",
//     social: {
//       instagram: "https://www.instagram.com/sophienguyen_accessories/",
//       linkedin: "https://www.linkedin.com/in/sophienguyen"
//     }
//   }
// ];

// function Cards(){
//   return(
    
//     <Box
//       sx={{
//         display: "flex",
//         gap: 1,
//         py: 1,
//         overflow: "auto",
//         width: "90%",
//         margin:"20px",
//         height: 350,
//         alignItems: "center",
//         backgroundColor: "#0d0d0d",
//         padding: 2,
//         borderRadius: "10px",
//         scrollSnapType: "x mandatory",
//         "& > *": {
//           scrollSnapAlign: "center",
//         },
//         "::-webkit-scrollbar": { display: "none" },
//         background: "linear-gradient(to bottom right,  	#0d0d0d,#0d0d0d)",
//         "@media (max-width: 600px)": {
//           // Media query for screens smaller than 600px (adjust breakpoint as needed)
//           height: 400, // Adjusted height for mobile screens
//           width: "88%", // Full width for mobile screens
//           margin:"10px"
//         },
//       }}
//     >
//       {teamData.map((item) => (
//         <Card
//           orientation="vertical"
//           size="sm"
//           key={item.title}
//           variant="outlined"
//           sx={{
//             minWidth: "140px",
//             height: "310px",
//             marginLeft: "10px",
//             backgroundColor: "#0d0d0d", // Set background color to black
//             color: "white", // Set text color to white
//             border: "black", // Set border color to faded white
//             borderRadius: "8px", // Optional: Add border radius for rounded corners
//             boxShadow: "4px 4px 8px 4px rgba(0, 0, 0)",
//             "@media (max-width: 600px)": {
//               // Media query for screens smaller than 600px (adjust breakpoint as needed)
//               height: 395, // Adjusted height for mobile screens
//               width: "100%", // Full width for mobile screens
//             },
//           }}
//         >
//           <img
//             style={{ height: "150px", minWidth: "100px", borderRadius: "10px" }}
//             srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.image}?h=120&fit=crop&auto=format`}
//             alt={item.title}
//           />

//           <Box>
//             <Typography level="title-md" sx={{  color: "#D04848" }}>
//             {item.name}🍃
//             </Typography>
//             <Typography level="body-sm" sx={{ color: "#9BCF53" }}>
//               {item.position}
//             </Typography>
//             <Typography level="body-sm" sx={{ color: "white" }}>
//               {item.bio}
//             </Typography>
//           </Box>
//         </Card>
//       ))}
//     </Box>
//   )
// }
function Cards() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("/teamData");
        setTeamData(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: "90%",
        margin: "20px",
        height: 350,
        alignItems: "center",
        backgroundColor: "#0d0d0d",
        padding: 2,
        borderRadius: "10px",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
        background:
          "linear-gradient(to bottom right,  	#0d0d0d,#0d0d0d)",
        "@media (max-width: 600px)": {
          height: 400,
          width: "88%",
          margin: "10px",
        },
      }}
    >
      {teamData.map((item) => (
        <Card
          orientation="vertical"
          size="sm"
          key={item.name} // Use a unique key for each item
          variant="outlined"
          sx={{
            minWidth: "140px",
            height: "310px",
            marginLeft: "10px",
            backgroundColor: "#0d0d0d",
            color: "white",
            border: "black",
            borderRadius: "8px",
            boxShadow: "4px 4px 8px 4px rgba(0, 0, 0)",
            "@media (max-width: 600px)": {
              height: 395,
              width: "100%",
            },
          }}
        >
          <img
            style={{ height: "150px", minWidth: "100px", borderRadius: "10px" }}
            src={item.image} // Assuming 'image' is the field in your data object
            alt={item.name}
          />

          <Box>
            <Typography level="title-md" sx={{ color: "#D04848" }}>
              {item.name}🍃
            </Typography>
            <Typography level="body-sm" sx={{ color: "#9BCF53" }}>
              {item.position}
            </Typography>
            <Typography level="body-sm" sx={{ color: "white" }}>
              {item.bio}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

function Footer(){
  return(
    <div className="footer">
      <div style={{margin:"10px",padding:"20px"}}> <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
      <p  >Outfit Oracle</p></div>
      <div style={{margin:"10px",padding:"20px"}}>
        Company
        <div style={{fontSize:'13px',color:"grey"}}>
        <p>About</p>
        <p>Career</p>
        <p>Mobile</p></div>
      </div>
      <div style={{margin:"10px",padding:"20px"}}>
        Contact
        <div style={{fontSize:'13px',color:"grey"}}>
        <p>Help/FAQ</p>
        <p>Press</p>
        <p>Affilates</p></div>
      </div>
      <div style={{margin:"10px",padding:"20px"}}>
        More
        <div style={{fontSize:'13px',color:"grey"}}>
        <p>Collections</p>
        <p>styles</p>
        <p>brands</p></div>
      </div>
      <div style={{margin:"10px",padding:"20px"}}>
        Follow us
        <div style={{fontSize:'13px',color:"grey"}}>
        <img src={insta} alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
        <img src={x} alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
        <img src={lin} alt="Logo" style={{  height: '34px' }} />
        <p>Discover our app</p>
        <img src={play} alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
        <img src={app} alt="Logo" style={{  height: '30px' }} /></div>
      </div>
    </div>
  )
}