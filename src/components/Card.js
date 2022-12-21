import React from "react";
import "../style/Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardComponent({ img, title, description }) {
  return (
    <Card
      className="card"
      variant="rounded"
      sx={{ maxWidth: 345, borderRadius: 7, border:2, borderColor:"white" }}
    >
      <CardActionArea className="card-body">
        <CardMedia className="card-image" component="img" image={img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
