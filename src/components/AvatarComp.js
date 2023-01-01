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
  const [data, setdata] = useState([]);
  const current = new Date();
  const date = current.getDay();
  const hour = current.getHours();
  if (date == 0 && hour ==12) {
    axios
      .get("https://localhost:7017/api/users/resclear")
  }
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
      <div>
      <h6>Daha önce rezervasyon yapılmış gün ve saatler</h6>
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
                <td>{res.service == 1 ? "PC" : res.service == 2 ? "Playstation"  : "LaserTag"} </td>
                <td>{res.day == 1 ? "Pazartesi" : res.day == 2 ? "Salı"  : res.day == 3 ? "Çarşamba" : res.day == 4 ? "Perşembe" : res.day == 5 ? "Cuma" : "Cumartesi"}</td>
                <td>{res.clock == 10 ? "10.00 - 11.00" : res.clock == 11 ? "11.00 - 12.00" : res.clock == 12 ? "12.00 - 13.00" : res.clock == 13 ? "13.00 - 14.00" : res.clock == 14 ? "14.00 - 15.00" : res.clock == 15 ? "15.00 - 16.00" : "16.00 - 17.00"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      </div>
    </div>
  );
}
