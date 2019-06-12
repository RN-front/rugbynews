import React from "react";
import NewsmakersBlock from "../../components/newsmakersBlock/";
import VideoBlock from "../../components/videoBlock";
import TopRatingNews from "../../components/topRatingNews";
import TimeLineBlock from "../../components/timeLineBlock";

class Homepage extends React.Component {

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
                                <NewsmakersBlock/>
                                <VideoBlock/>
                            </div>
                            <div className="table-right-section">
                                <TopRatingNews/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default Homepage;