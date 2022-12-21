import React from "react";
import GMap from "../components/GMap";
import "../style/Styles.css";

export default function About() {
  
  return (
    <div className="about-container">
      <h1>Hakkımızda</h1>
      <div className="about-div">
        <div className="about-map">
          <GMap />
        </div>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            elementum ante ut odio faucibus luctus. Aliquam erat volutpat. In
            lorem dolor, placerat in nisi quis, suscipit mattis mauris.
            Suspendisse in auctor odio. Donec ut nunc eget lectus finibus
            commodo. Sed commodo, sapien vel elementum tempor, quam velit
            lacinia ligula, eu faucibus metus turpis id lorem. Sed auctor
            lobortis facilisis. Fusce aliquet fringilla dapibus. Sed auctor
          </p>
          <p>
            metus vel enim maximus, et sollicitudin diam interdum. Duis
            fringilla lacus a ultricies venenatis. Pellentesque vel lorem urna.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Vivamus suscipit elit id nisi laoreet
            aliquam. Curabitur nec bibendum erat, eu tempor ipsum. Etiam eget
            metus at augue hendrerit luctus sit amet eget enim. Praesent
            scelerisque interdum erat, sed volutpat elit ullamcorper eu. Mauris
            at hendrerit turpis. Mauris semper dapibus lorem, ut euismod arcu
            egestas vestibulum. Fusce congue, ante ac venenatis fringilla, lacus
            nisl faucibus lectus, a sagittis massa dolor a odio. Suspendisse
            pharetra cursus dui, in varius nunc lacinia eget. Sed in porta est.
            Quisque eleifend congue nibh, eu sollicitudin elit efficitur vel.
          </p>
        </div>
      </div>
    </div>
  );
}
