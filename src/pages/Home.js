import React from "react";
import Slider from "../components/slider/Slider";
import CardComponent from "../components/Card";
import "../style/Card.css";
import ref from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="home-title">
        <h1 ref={ref}>Laser Tag Samsun</h1>
        <h4>Oyun ve Eglence Merkezi</h4>
      </div>
      <Slider />
      <div className="card-container">
        <CardComponent
          img="/Imgs/CardImgs/card1.jpg"
          title="Playstation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna. Donec vel semper diam, sed finibus nibh. Fusce sodales nibh quis imperdiet consectetur. Quisque tortor purus, hendrerit non interdum a, posuere eget erat. "
        />
        <CardComponent
          img="/Imgs/CardImgs/card2.jpg"
          title="Laser Tag"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna. Donec vel semper diam, sed finibus nibh. Fusce sodales nibh quis imperdiet consectetur. Quisque tortor purus, hendrerit non interdum a, posuere eget erat. "
        />
        <CardComponent
          img="/Imgs/CardImgs/card3.jpg"
          title="İnternet Cafe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna. Donec vel semper diam, sed finibus nibh. Fusce sodales nibh quis imperdiet consectetur. Quisque tortor purus, hendrerit non interdum a, posuere eget erat. "
        />
      </div>
    </>
  );
}
