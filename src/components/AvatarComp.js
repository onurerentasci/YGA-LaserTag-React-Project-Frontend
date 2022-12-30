import React from "react";
import Avatar from "@mui/material/Avatar";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import "../style/Styles.css";
import { orange } from "@mui/material/colors";

export default function AvatarComp() {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <Avatar sx={{ bgcolor: orange[500] }}>
          <VideogameAssetIcon />
        </Avatar>
        <h2>Hosgeldiniz</h2>
      </div>
    </div>
  );
}
