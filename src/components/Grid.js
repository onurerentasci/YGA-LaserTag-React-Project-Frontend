import React from "react";
import "../../src/style/Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../src/style/Grid.css";

function GridComponent({ img, title, description }) {
  return (
    <Card
      className="grid"
      sx={{
        display: "flex",
        width: 550,
        height: 400,
        marginBottom: 4,
        borderRadius: 4,
        borderRadius: 7,
        border: 2,
        borderColor: "white",
      }}
    >
      <CardMedia
        className="grid-image"
        component="img"
        sx={{ width: 300 }}
        image={img}
        alt=""
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: 2 }}
            component="div"
            variant="h5"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default GridComponent;
