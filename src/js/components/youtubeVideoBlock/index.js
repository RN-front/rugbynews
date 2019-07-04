import React from "react";
import {Link, Redirect} from 'react-router-dom';

class YoutubeVideoBlock extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="youtube-video-block">
                        <div className="time-line-section__check">
                            <iframe id="ytplayer" type="text/html" width="100%" height="360"
                                    src="https://www.youtube.com/embed/zzZGTIqm0Yw"
                                    frameBorder="0"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default YoutubeVideoBlock;