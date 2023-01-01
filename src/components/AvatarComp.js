import React from "react";
import Avatar from "@mui/material/Avatar";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import "../style/Styles.css";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';


export default function AvatarComp() {
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://localhost:7017/api/users/getreservations")
      .then((res) => setdata(res.data));
  }, []);
  return (
    <div className="avatar-container">
      <div className="avatar">
        <Avatar sx={{ bgcolor: orange[500] }}>
          <VideogameAssetIcon />
        </Avatar>
        <h2>Hosgeldiniz</h2>
      </div>
      <div>
        <strong>laser tag dolu günler</strong>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Servis</th>
              <th>Gün</th>
              <th>Saat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((res) => (
              <tr>
                <td>{res.service}</td>
                <td>{res.day}</td>
                <td>{res.clock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
