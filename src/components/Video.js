import React, { Component } from 'react';
import video from "../video/video.mp4";

class Video extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <h4>Let music guide emotions</h4>
                    <div className="video-container">
                        <video autoPlay loop muted id="video-bg">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;