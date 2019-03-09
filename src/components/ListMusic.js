import React, { Component } from 'react';
import Slider from "react-slick";
import config from "../config";
import Photo1 from "../image/1.jpg";
import Photo2 from "../image/2.jpg";
import Photo3 from "../image/3.jpg";
import Photo4 from "../image/4.jpg";
import Photo5 from "../image/5.jpg";
import Photo6 from "../image/6.jpg";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from "../axios";

class ListMusic extends Component {
    state = {
        images: [],
      }
    componentDidMount() {
        axios
        .get("/api/tracks/topten")
        .then(data => {
            console.log(data.data)
            this.setState({images: data.data.map(item => item.artist.avatar)})
        })
        .catch(err => {console.log(err)})
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            className: "slides",
          };

        const allAvatar = this.state.images.map((avatar, index) => 
            <div>
                <img src={config.rootPath + avatar} style={{width: "350px", margin: "10px", height: "250px" }} alt={index}/>
            </div>
        )
        return (
            <div className="listMusic">
                <Slider {...settings}>
                <div>
                    <img src={Photo1} style={{width: "350px", margin: "10px", height: "250px" }} alt="1"/>
                </div>
                <div>
                    <img src={Photo2} style={{width: "350px", margin: "10px", height: "250px" }} alt="2"/>  
                </div>
                <div>
                    <img src={Photo3} style={{width: "350px", margin: "10px", height: "250px" }} alt="3"/>
                </div>
                <div>
                    <img src={Photo4} style={{width: "350px", margin: "10px", height: "250px" }} alt="4"/>
                </div>
                <div>
                    <img src={Photo5} style={{width: "350px", margin: "10px", height: "250px" }} alt="5"/>
                </div>
                <div>
                    <img src={Photo6} style={{width: "350px", margin: "10px", height: "250px" }} alt="6"/>  
                </div>
                </Slider>
          </div>
        );
    }
}

export default ListMusic;