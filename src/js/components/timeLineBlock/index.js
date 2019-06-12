import React from "react";
import {Link, Redirect} from 'react-router-dom';

class TimeLineBlock extends React.Component {

    toggleCheck() {
        document.querySelector('.header-time-line-section__check div').classList.toggle('checked');
    }

    render() {
        return (
            <div>
                    <div className="container">
                        <div className="header-time-line-section-wrapper">
                            <p>Time line</p>
                            <div className="header-time-line-section__check" onClick={this.toggleCheck}>
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
};


export default TimeLineBlock;