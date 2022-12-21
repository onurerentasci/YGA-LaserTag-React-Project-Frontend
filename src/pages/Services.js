import React from "react";
import GridComponent from "../components/Grid";
import PcGridComponent from "../components/pcGrid";
import "../style/Styles.css";

export default function Services() {
  return (
    <div>
      <div className="services-title">
        <h1>Hizmetlerimiz</h1>
        <div>
          <h3 id="lasertag-title">Laser Tag</h3>
          <h5>Suit Up! It's Laser Tag Time!</h5>
          <div className="line"></div>
          <div className="service-lasertag">
            <img src="/Imgs/SliderImgs/img1.jpg" alt=""></img>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                facilisis ultricies venenatis. Nullam consectetur tortor ac
                fringilla feugiat. Donec arcu nibh, efficitur nec mi ac,
                vulputate congue arcu. Integer ac volutpat dolor. Mauris eu eros
                posuere velit luctus tristique at sit amet lorem. Morbi lacinia
                velit nisl, et laoreet purus pellentesque vitae. Nam tincidunt
                pellentesque enim vel congue.
              </p>
              <p>
                Fusce ac turpis eu magna ultrices tempor. Integer at tellus
                odio. Maecenas in elit arcu. Etiam ut mollis sapien. Ut sodales,
                erat ut viverra feugiat, elit massa rutrum augue, facilisis
                faucibus augue nisl ac velit. In eget diam a ex placerat
                scelerisque. Nulla eu risus at nisi feugiat venenatis. In et
                erat ultricies, molestie turpis vitae, tincidunt ipsum. Quisque
                vitae neque purus. Phasellus elementum luctus tellus, id varius
                nisl ultricies quis. Nulla sit amet magna ac diam rutrum
                aliquet.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>PlayStation'da Bulunan Oyunlar</h3>
          <h5>PS4-PS5 | 4K UHD TV | Yüksek Hızlı İnternet</h5>
          <div className="line"></div>
          <div className="grid-container">
            <div id="row1">
              <GridComponent
                img="/Imgs/GameImgs/game1.jpg"
                title="FIFA 23"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game2.jpg"
                title="NBA 2K22"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In sed nisi id sem condimentum commodo.
            Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game6.jpg"
                title="Forza Horizon 5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In sed nisi id sem condimentum commodo.
            Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game7.jpg"
                title="WWE 2K22"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In sed nisi id sem condimentum commodo.
            Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
            </div>
            <div id="row2">
              <GridComponent
                img="/Imgs/GameImgs/game5.jpg"
                title="eFootball 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game3.jpg"
                title="Grand Theft Auto 5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game4.jpg"
                title="Mortal Kombat 11"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisi id sem condimentum commodo. Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
              <GridComponent
                img="/Imgs/GameImgs/game8.jpg"
                title="A Way Out"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In sed nisi id sem condimentum commodo.
            Sed augue nulla, consequat id nibh quis, pharetra euismod urna."
              />
            </div>
          </div>
        </div>

        <div>
          <h3>Bilgisayarlarda Bulunan Oyunlar</h3>
          <h5>
            i5 9600k | RTX 3060 | 16 GB RAM | 1000 Mbit/s Yüksek Hızlı Fiber
            İnternet
          </h5>
          <div className="line"></div>
          <div className="pc-grid-container">
            <div id="row1">
              <PcGridComponent img="/Imgs/GameImgs/pcGame1.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame2.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame3.jpg" />
            </div>
            <div id="row2">
              <PcGridComponent img="/Imgs/GameImgs/pcGame4.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame5.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame6.jpg" />
            </div>
            <div id="row3">
              <PcGridComponent img="/Imgs/GameImgs/pcGame7.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame8.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame9.jpg" />
            </div>
            <div id="row4">
              <PcGridComponent img="/Imgs/GameImgs/pcGame10.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame11.jpg" />
              <PcGridComponent img="/Imgs/GameImgs/pcGame12.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
