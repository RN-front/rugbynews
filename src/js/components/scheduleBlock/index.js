import React from "react";
import {Link} from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";

class ScheduleBlock extends React.Component {
    componentDidMount(){

    }

    toggleDate(e) {
        let dateButton = document.querySelectorAll(".schedule-section__time-frame button");
        let matchCenterBlock = document.querySelectorAll(".schedule-section__match-center");
        for (let i = 0; i < dateButton.length; i++) {
            dateButton[i].classList.remove("active");
        }
        e.currentTarget.classList.add('active');

        for (let i = 0; i < matchCenterBlock.length; i++) {
            matchCenterBlock[i].classList.remove("active");
        }

        if (e.currentTarget.classList.contains('schedule-section__button-day')) {
            document.querySelector('.schedule-section__match-center-day').classList.add('active');
        } else if (e.currentTarget.classList.contains('schedule-section__button-week')) {
            document.querySelector('.schedule-section__match-center-week').classList.add('active');
        } else if (e.currentTarget.classList.contains('schedule-section__button-month')) {
            document.querySelector('.schedule-section__match-center-month').classList.add('active');
        }
    }


    render() {
        return (
            <div>
                <div className="schedule-section">
                    <p className="schedule-section__page-title">schedule</p>
                    <div className="schedule-section__wrapper">
                        <div className="schedule-section__time-frame">
                            <button className="schedule-section__button-day" onClick={this.toggleDate}>Day</button>
                            <button className="schedule-section__button-week" onClick={this.toggleDate}>Week</button>
                            <button className="schedule-section__button-month active" onClick={this.toggleDate}>Month</button>
                            <button>Championship</button>
                        </div>
                        <div className="schedule-section__date">
                            <p>April</p>
                        </div>
                        <div className="schedule-section__match-center schedule-section__match-center-day">
                            <div className="schedule-section__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Манчестер</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-section__match-center schedule-section__match-center-week">
                            <div className="schedule-section__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Арсенал</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-section__match-center schedule-section__match-center-month active">
                            <div className="schedule-section__match-center-title">
                                <div>Tournament</div>
                                <div>Match</div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
                                        <p>18:45 GMT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-section__match-center-match">
                                <div className="schedule-section__tournament-logo">
                                    <img className="schedule-section__tournament-logo-image" src="img/championship_logo.png" alt="Team logo"/>
                                    <p className="schedule-section__date-match">20 Mon.</p>
                                </div>
                                <div className="schedule-section__play-time">
                                    <div className="schedule-section__home-team">
                                        <img className="schedule-section__home-team-image" src="img/lyon.png" alt="home team logo"/>
                                        <p className="schedule-section__home-team-name">Ливерпуль</p>
                                    </div>
                                    <div className="schedule-section__time">
                                        <p>21</p>
                                        <p>45</p>
                                    </div>
                                    <div className="schedule-section__guest-team">
                                        <p className="schedule-section__guest-team-name">Ньюкасл</p>
                                        <img className="schedule-section__guest-team-image" src="img/awayjersey.png" alt="guest team logo"/>
                                    </div>
                                    <div className="schedule-section__gmt-time">
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