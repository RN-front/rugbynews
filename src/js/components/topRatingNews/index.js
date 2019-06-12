import React from "react";
import {Link} from "react-router-dom";

class TopRatingNews extends React.Component {

    render() {
        return (
            <div>
                <div className="top-rating-news-block">
                    <div className="top-rating-news-block__title">
                        <h4>TOP Rating News</h4>
                        <Link to='/' className="top-rating-news-block__title-link"></Link>
                    </div>
                    <div className="top-rating-news-block__list">
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                    <span className="icon-star"></span>
                                    <img src="img/time_icon.png" alt="time-icon"/>
                                    <span className="time-ago">2h</span>
                                    <span className="source-web">Rugby Union</span>
                                    <img src="img/chat-bubble.png" alt="chat bubble"/>
                                    <span className="number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-check"></span>
                                <img src="img/time_icon.png" alt="time-icon"/>
                                <span className="time-ago">2h</span>
                                <span className="source-web">Sport News</span>
                                <img src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-play"></span>
                                <img src="img/time_icon.png" alt="time-icon"/>
                                <span className="time-ago">2h</span>
                                <span className="source-web">BBC Sport </span>
                                <img src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-video"></span>
                                <img src="img/time_icon.png" alt="time-icon"/>
                                <span className="time-ago">2h</span>
                                <span className="source-web">BBC Sport Sport </span>
                                <img src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list__item">
                            <Link to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-video"></span>
                                <img src="img/time_icon.png" alt="time-icon"/>
                                <span className="time-ago">2h</span>
                                <span className="source-web">BBC Sport </span>
                                <img src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="number-comments">27</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default TopRatingNews;