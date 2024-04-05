import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function Recommendation() {
  const [data, setData] = useState([]);
  const { itemname } = useParams();
  console.log(itemname)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/recomendations/:${itemname}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemname]);

  return (
    <>
      <div className="contM">
        {data.length > 0 ? (
          data.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 340, maxHeight: 800,border: "black", // Set border color to faded white
            borderRadius: "8px", // Optional: Add border radius for rounded corners
            boxShadow: "4px 4px 8px 4px rgba(0, 0, 0)", }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={item.imageUrl

                  }
                  alt={item.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
            <Card  sx={{ maxWidth: 340, maxHeight: 800 }}>
          <Typography variant="body1" color="text.secondary">
            No data available
          </Typography></Card>
        )}
         <Card  sx={{ minWidth: 550, maxHeight: 300 }}>
          <Typography
          variant="body1"
          color="text.secondary"
          style={{
            fontFamily: "Noto Sans KR, sans-serif",
            fontSize: "30px",
            display: "flex",
            marginTop:"30px",
            justifyContent:"center",
            alignItems:"center"
          }} >
            Hope you got your 
            style
          </Typography>
          <p> We hope to guide you towards discovering new styles and expressions, empowering you to embrace your unique fashion journey. With our support, we encourage you to keep exploring and experimenting, unlocking new avenues of self-expression and confidence.</p>
          </Card>
      </div>
    </>
  );
}
