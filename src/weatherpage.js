import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

export function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [outfitSuggestion, setOutfitSuggestion] = useState("");
  const [routesuggestion, setRoutesuggestion] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/weather?city=${city}`);
      setWeatherData(response.data);

      // Calculate outfit suggestion based on weather data
      const temperature = response.data.main.temp;
      let suggestion = "";
      let route = "";

      if (temperature >= 27) {
        suggestion =
          "It's hot and sunny! Consider wearing a Sundress, shorts and tank top, light and breathable fabrics.";
        route = "/summer";
      } else if (temperature >= 21 && temperature < 27) {
        suggestion =
          "It's Warm Outside!Consider wearing a Dress, skirt and t-shirt, lightweight pants and blouse.";
        route = "/spring";
      } else if (temperature >= 16 && temperature < 21) {
        suggestion =
          "It's Mild Outside!Consider wearing a Jeans and sweater, long-sleeved shirt and light jacket";
        route = "/autumn";
      } else if (temperature >= 10 && temperature < 16) {
        suggestion =
          "It's Cool Outside!Consider wearing a Jeans and sweatshirt, scarf and gloves (optional)";
        route = "/winter";
      } else {
        suggestion =
          "It's Cold Outside!Consider wearing a Winter coat, hat, scarf, gloves, boots, layers are key";
        route = "/winter";
      }

      setOutfitSuggestion(suggestion);
      setRoutesuggestion(route);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (latitude && longitude) {
          setLoading(true);
          const response = await axios.get(
            `/weather?lat=${latitude}&lon=${longitude}`
          );
          setWeatherData(response.data);

          // Calculate outfit suggestion based on weather data
          const temperature = response.data.main.temp;
          let suggestion = "";
          let route = "";

          if (temperature >= 27) {
            suggestion =
              "It's hot and sunny! Consider wearing a Sundress, shorts and tank top, light and breathable fabrics.";
            route = "/summer";
          } else if (temperature >= 21 && temperature < 27) {
            suggestion =
              "It's Warm Outside!Consider wearing a Dress, skirt and t-shirt, lightweight pants and blouse.";
            route = "/spring";
          } else if (temperature >= 16 && temperature < 21) {
            suggestion =
              "It's Mild Outside!Consider wearing a Jeans and sweater, long-sleeved shirt and light jacket";
            route = "/autumn";
          } else if (temperature >= 10 && temperature < 16) {
            suggestion =
              "It's Cool Outside!Consider wearing a Jeans and sweatshirt, scarf and gloves (optional)";
            route = "/winter";
          } else {
            suggestion =
              "It's Cold Outside!Consider wearing a Winter coat, hat, scarf, gloves, boots, layers are key";
            route = "/winter";
          }

          setOutfitSuggestion(suggestion);
          setRoutesuggestion(route);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <div className="weatherhome">
      <div className="container">
        <input
          id="cityInput"
          className="inputfield"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          id="searchButton"
          className="searchButton"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          id="locationButton"
          className="locationButton"
          onClick={handleGetLocation}
        >
          Get Location
        </button>
      </div>

      <div></div>
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div style={{ color: "white" }}>
          <Card
            sx={{
              maxWidth: 340,
              maxHeight: 800,
              border: "black", // Set border color to faded white
              borderRadius: "8px", // Optional: Add border radius for rounded corners
              boxShadow: "4px 4px 8px 4px rgba(0, 0, 0)",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  City: {weatherData.name}
                </Typography>

                <Typography gutterBottom variant="body1" component="div">
                  Current Weather: {weatherData.weather[0].description}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Temperature: {weatherData.main.temp}°C
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Max-Temperature: {weatherData.main.temp_max}°C
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Humidity: {weatherData.main.humidity}%
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Wind Speed: {weatherData.wind.speed} m/s
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Feels Like: {weatherData.main.feels_like} °C
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Outfit Suggestion: {outfitSuggestion}
                </Typography>
                <Button component={Link} to={`${routesuggestion}`}>
                  Show Recommendation
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : (
        <p>Enter location to get started</p>
      )}
    </div>
  );
}
