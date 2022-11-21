import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './imagens/Image(1).png';
import img2 from './imagens/Image(2).png';
import img3 from './imagens/Image(3).png';
import relogio from './imagens/relogio.png';
import foto1 from './fotos/01.png';
import foto2 from './fotos/02.png';
import foto3 from './fotos/03.png';
import foto4 from './fotos/04.png';
import heartWithoutLike from './fotos/heartWithoutLike.png';


export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="DivSlide">
        <h2 className="TitleSlide"> Latest live auctions </h2>
        <Slider {...settings}>

          <div className="card">
            <img src={img3} alt="Capa" className="imageCapa"/>
            <div style={{ display: "flex" }}>
              <h3 className="DescricaoCard">Tristique diam a, enim, eros tellus. Viverra etiam</h3>
              <h4 className="num_ETH">2.55 ETH</h4>
            </div>
            <div style={{ display: "flex" }}>
              <img className="relogio" src={relogio} alt="ícone relógio" />
              <h5 className="time"> 1h 30m 20s</h5>
            </div>
            <hr className="divider"></hr>
            <div className="bottomCard">
              <div className="picturesText">
                <div className="pictures">
                  <img className="foto" src={foto1} alt="Foto de perfil" />
                  <img className="foto" src={foto2} alt="Foto de perfil" />
                  <img className="foto" src={foto3} alt="Foto de perfil" />
                  <img className="foto" src={foto4} alt="Foto de perfil" />
                </div>
                <h6 className="textCardBottom">35 people are bidding</h6>
              </div>
              <div className="like">
                <img className="heart" src={heartWithoutLike} alt="ícone coração" />
                <p>120</p>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="divCapa">
            </div>
             <img src={img1} alt="Capa" className="imageCapa"/> 
            <div style={{ display: "flex" }}>
              <h3 className="DescricaoCard">Vulputate felis purus viverra morbi facilisi eget</h3>
              <h4 className="num_ETH">3.19 ETH</h4>
            </div>
            <div style={{ display: "flex" }}>
              <img className="relogio" src={relogio} alt="ícone relógio"/>
              <h5 className="time"> 2:41 min left</h5>
            </div>
            <hr className="divider"></hr>
            <div className="bottomCard">
            <div className="picturesText">
              <div className="pictures">
                <img className="foto" src={foto1} alt="Foto de perfil" />
                <img className="foto" src={foto2} alt="Foto de perfil" />
                <img className="foto" src={foto3} alt="Foto de perfil" />
                <img className="foto" src={foto4} alt="Foto de perfil"/>
            </div>
              <h6 className="textCardBottom">35 people are bidding</h6>
              </div>
              <div className="like">
                <img className="heart" src={heartWithoutLike} alt="ícone coração" />
                <p>120</p>
              </div>
            </div>


          </div>
          <div className="card">
            <img src={img2} alt="Capa" className="imageCapa" />
            <div style={{ display: "flex" }}>
              <h3 className="DescricaoCard">Dui accumsan leo vestibulum ornare eu </h3>
              <h4 className="num_ETH">1.11 ETH</h4>
            </div>
            <div style={{ display: "flex" }}>
              <img className="relogio" src={relogio} alt="ícone relógio" />
              <h5 className="time"> 22:59 min left  </h5>
            </div>
            <hr className="divider"></hr>
            <div className="bottomCard">
              <div className="picturesText">
                <div className="pictures">
                  <img className="foto" src={foto1} alt="Foto de perfil" />
                  <img className="foto" src={foto2} alt="Foto de perfil" />
                  <img className="foto" src={foto3} alt="Foto de perfil" />
                  <img className="foto" src={foto4} alt="Foto de perfil" />
              </div>
              <h6 className="textCardBottom">35 people are bidding</h6>
              </div>
              <div className="like">
                <img className="heart" src={heartWithoutLike} alt="ícone coração" />
                <p>120</p>
              </div>
            </div>
          </div>


          <div className="card">
            <img src={img3} alt="Capa" className="imageCapa"/>
            <div style={{ display: "flex" }}>
              <h3 className="DescricaoCard">Senectus adipiscing nascetur accumsan etiam</h3>
              <h4 className="num_ETH">1.63 ETH</h4>
            </div>

            <div style={{ display: "flex" }}>
              <img className="relogio" src={relogio} alt=" " />
              <h5 className="time"> 37:01 min left</h5>
            </div>
            <hr className="divider"></hr>
            <div className="bottomCard">
              <div className="picturesText">
                <div className="pictures">
                  <img className="foto" src={foto1} alt=" " />
                  <img className="foto" src={foto2} alt=" " />
                  <img className="foto" src={foto3} alt="  " />
                  <img className="foto" src={foto4} alt=" " />
                </div>
                <h6 className="textCardBottom">35 people are bidding</h6>
              </div> 
              <div className="like">
                <img className="heart" src={heartWithoutLike} alt=" " />
                <p>120</p>
              </div>
            </div>
          </div>


          <div className="card">
            <img src={img1} alt=" " className="imageCapa"/>
            <div style={{ display: "flex" }}>
              <h3 className="DescricaoCard">Mattis at diam lorem nisl nam sed sociis</h3>
              <h4 className="num_ETH">2.55 ETH</h4>
            </div>

            <div style={{ display: "flex" }}>
              <img className="relogio" src={relogio} alt=" " />
              <h5 className="time"> 12:15 min left</h5>
            </div>

            <hr className="divider"></hr>

            <div className="bottomCard">
              <div className="picturesText">
                <div className="pictures">
                  <img className="foto" src={foto1} alt=" " />
                  <img className="foto" src={foto2} alt=" " />
                  <img className="foto" src={foto3} alt="  " />
                  <img className="foto" src={foto4} alt=" " />
                </div>
                <h6 className="textCardBottom">35 people are bidding</h6>
              </div>
              <div className="like">
                <img className="heart" src={heartWithoutLike} alt=" " />
                <p>120</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}