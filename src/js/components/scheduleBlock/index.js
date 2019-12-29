import React from "react";
import {Link} from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";

class ScheduleBlock extends React.Component {
    componentDidMount(){

    }

    toggleDate(e) {
        let dateButton = document.querySelectorAll(".schedule-section-wrapper__time-frame button");
        let matchCenterBlock = document.querySelectorAll(".schedule-section-wrapper__match-center");
        for (let i = 0; i < dateButton.length; i++) {
            dateButton[i].classList.remove("active");
        }
        e.currentTarget.classList.add('active');

        // for (let i = 0; i < matchCenterBlock.length; i++) {
        //     matchCenterBlock[i].classList.remove("active");
        //     if (e.currentTarget.classList.contains('schedule-section__button-day') && matchCenterBlock[i].contains('schedule-section-wrapper__match-center-day') ) {
        //         matchCenterBlock[i].classList.add('active');
        //     }
        // }
    }


    render() {
        return (
            <div>
                <div className="schedule-section">
                    <p className="schedule-section__page-title">schedule</p>
                    <div className="schedule-section-wrapper">
                        <div className="schedule-section-wrapper__time-frame">
                            <button className="schedule-section__button-day" onClick={this.toggleDate}>Day</button>
                            <button className="schedule-section__button-week" onClick={this.toggleDate}>Week</button>
                            <button className="schedule-section__button-month active" onClick={this.toggleDate}>Month</button>
                            <button>Championship</button>
                        </div>
                        <div className="schedule-section-wrapper__date">
                            <p>April</p>
                        </div>
                        <div className="schedule-section-wrapper__match-center schedule-section-wrapper__match-center-day">
                            <div className="schedule-section-wrapper__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                        <div className="schedule-section-wrapper__match-center schedule-section-wrapper__match-center-week">
                            <div className="schedule-section-wrapper__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                        <div className="schedule-section-wrapper__match-center schedule-section-wrapper__match-center-month active">
                            <div className="schedule-section-wrapper__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section-wrapper__match-center-match">
                                <div className="tournament-logo">
                                    <img src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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
                                    <p className="schedule-section-wrapper__date-match">20 Mon.</p>
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