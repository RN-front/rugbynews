import React from "react";
import {Link} from "react-router-dom";

class TopRatingNews extends React.Component {

    render() {
        return (
            <div>
                <div className="top-rating-news-block">
                    <div className="top-rating-news-block__title">
                        <p>TOP Rating News</p>
                        <Link to='/' className="top-rating-news-block__title-link"/>
                    </div>
                    <div className="top-rating-news-block__list">
                        <div className="top-rating-news-block__list-item">
                            <Link className="top-rating-news-block__list-item-link" to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                    <span className="icon-star"/>
                                    <img className="top-rating-news-block__info-image" src="img/time_icon.png" alt="time-icon"/>
                                    <span className="top-rating-news-block__time-ago">2h</span>
                                    <span className="top-rating-news-block__source-web">Rugby Union</span>
                                    <img className="top-rating-news-block__info-image" src="img/chat-bubble.png" alt="chat bubble"/>
                                    <span className="top-rating-news-block__number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list-item">
                            <Link className="top-rating-news-block__list-item-link" to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-check"/>
                                <img className="top-rating-news-block__info-image" src="img/time_icon.png" alt="time-icon"/>
                                <span className="top-rating-news-block__time-ago">2h</span>
                                <span className="top-rating-news-block__source-web">Rugby Union</span>
                                <img className="top-rating-news-block__info-image" src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="top-rating-news-block__number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list-item">
                            <Link className="top-rating-news-block__list-item-link" to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-play"/>
                                <img className="top-rating-news-block__info-image" src="img/time_icon.png" alt="time-icon"/>
                                <span className="top-rating-news-block__time-ago">2h</span>
                                <span className="top-rating-news-block__source-web">Rugby Union</span>
                                <img className="top-rating-news-block__info-image" src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="top-rating-news-block__number-comments">27</span>
                            </div>
                        </div>
                        <div className="top-rating-news-block__list-item">
                            <Link className="top-rating-news-block__list-item-link" to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-video"/>
                                <img className="top-rating-news-block__info-image" src="img/time_icon.png" alt="time-icon"/>
                                <span className="top-rating-news-block__time-ago">2h</span>
                                <span className="top-rating-news-block__source-web">Rugby Union</span>
                                <img className="top-rating-news-block__info-image" src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="top-rating-news-block__number-comments">27</span>
                            </div>
                        </div>

                        <div className="top-rating-news-block__list-item">
                            <Link className="top-rating-news-block__list-item-link" to='/'>Man UTD January Transfer life</Link>
                            <div className="top-rating-news-block__info">
                                <span className="icon-star"/>
                                <img className="top-rating-news-block__info-image" src="img/time_icon.png" alt="time-icon"/>
                                <span className="top-rating-news-block__time-ago">2h</span>
                                <span className="top-rating-news-block__source-web">Rugby Union</span>
                                <img className="top-rating-news-block__info-image" src="img/chat-bubble.png" alt="chat bubble"/>
                                <span className="top-rating-news-block__number-comments">27</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default TopRatingNews;