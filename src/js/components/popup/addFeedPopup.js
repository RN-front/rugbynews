import React from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router';


class AddFeedPopup extends React.Component {

    render() {
        return (
            <div className="popup">
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login m--add-feed">
                            <div className="welcome-popup">
                                <p>Add Your Feeds</p>
                            </div>
                            <form className="main-form" action="">
                                <label className="label-input">
                                    <input type="text"
                                           placeholder="Add Your Feeds"
                                           id="add-feeds"
                                    />
                                    <span className="error email-error">Неверный формат</span>
                                </label>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>Add</span>
                                        <span className="loader"/>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
};


export default AddFeedPopup;
