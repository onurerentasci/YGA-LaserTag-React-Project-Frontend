import React from "react";
import "D:/MyCode/proje/src/style/Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import "D:/MyCode/proje/src/style/Grid.css";
import { maxWidth } from "@mui/system";

function PcGridComponent({ img }) {
  return (
    <Card
      className="grid"
      sx={{
        display: "flex",
        width: 250,
        height: 320,
        marginBottom: 4,
        borderRadius: 4,
      }}
    >
      <CardMedia
        className="grid-image"
        component="img"
        sx={{ width: 250, height: 320, border: 2, borderRadius: 4, borderColor:"white" }}
        image={img}
        alt=""
      />
    </Card>
  );
}

export default PcGridComponent;
