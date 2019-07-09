import React from "react";
import ScheduleBlock from "../../components/scheduleBlock";
import TopRatingNews from "../../components/topRatingNews";
import ResultFixturesBlock from "../../components/resultFixturesBlock";

class Schedule extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <div className="hp-main-block">
                    <div className="container">
                        <div className="main-section-wrapper">
                            <div className="news-section">
                                <ScheduleBlock/>
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


export default Schedule;