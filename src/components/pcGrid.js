import React from "react";
import "D:/MyCode/proje/src/style/Card.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "D:/MyCode/proje/src/style/Grid.css";

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
