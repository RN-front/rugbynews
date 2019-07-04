import React from "react";
import NewsmakersBlock from "../../components/newsmakersBlock/";
import VideoBlock from "../../components/videoBlock";
import TopRatingNews from "../../components/topRatingNews";
import TimeLineBlock from "../../components/timeLineBlock";
import ResultFixturesBlock from "../../components/resultFixturesBlock";
import YoutubeVideoBlock from "../../components/youtubeVideoBlock";
import TimeLineActiveBlock from "../../components/timeLineActiveBlock";

class VideoNews extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <div className="hp-main-block">
                    <div className="container">
                        <TimeLineBlock/>
                        <div className="main-section-wrapper">
                            <div className="news-section">
                                <YoutubeVideoBlock/>
                                <VideoBlock/>
                                {/*Компонент активируется при включении таймлайн*/}
                                {/*<TimeLineActiveBlock/> */}
                            </div>
                            <div className="table-right-section">
                                <TopRatingNews/>
                                <ResultFixturesBlock/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default VideoNews;