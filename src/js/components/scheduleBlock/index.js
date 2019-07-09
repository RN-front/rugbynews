import React from "react";
import {Link} from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";

class ScheduleBlock extends React.Component {


    render() {
        return (
            <div>
                <div className="schedule-section">
                    <h2>schedule</h2>
                    <div className="schedule-section-wrapper">
                        <div className="schedule-section-wrapper__time-frame">
                            <button>Today</button>
                            <button>Week</button>
                            <button className="active">Month</button>
                            <button>Championship</button>
                        </div>
                        <div className="schedule-section-wrapper__date">
                            <p>April</p>
                        </div>
                        <div className="schedule-section-wrapper__match-center">
                            <div className="schedule-section-wrapper__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                </div>
                                <div className="play-time">
                                    <div className="home-team">
                                        <img src="img/lyon.png" alt="home team logo"/>
                                        <p>Глостер</p>
                                    </div>
                                    <div className="time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="guest-team">
                                        <p>Ньюкасл</p>
                                        <img src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default ScheduleBlock;