import React from "react";
import {Link, Redirect} from 'react-router-dom';

class YoutubeVideoBlock extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="youtube-video-block">
                        <h2>Mauricio Pochettino praised Tottenham's</h2>
                        <div className="youtube-video-block__info">
                            <img src="img/time_icon.png" alt="time-icon"/><span>15 min ago</span><span>Premier League</span>
                        </div>
                        <iframe className="ytplayer" id="ytplayer" type="text/html" width="100%" height="420"
                                src="https://www.youtube.com/embed/zzZGTIqm0Yw"
                                frameBorder="0"/>
                    </div>
                </div>
            </div>
        )
    }
};


export default YoutubeVideoBlock;