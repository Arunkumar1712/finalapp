import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export function Clothing() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("/eventsdata");
        setTeamData(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: "20px", margin: "20px" }}>
      <Grid container spacing={3}>
        {teamData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.name}>
            <Card sx={{ position: "relative", minHeight: 200, borderRadius: "10px" }}>
              <CardMedia
                component="img"
                height="100%"
                image={item.picture}
                alt={item.name}
                sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <CardContent sx={{ position: "relative", zIndex: 1, color: "white", marginTop: "70px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2">
                  {item.description}
                </Typography>
                <Button component={Link} to={`/recomendations/:${item.name}`} sx={{ bgcolor: "white", color: "black" }}>
                  See recommendations
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
