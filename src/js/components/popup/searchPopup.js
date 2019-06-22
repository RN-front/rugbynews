import React from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router';


class SearchPopup extends React.Component {

    render() {
        return (
            <div className="popup">
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login m--search">
                            <div className="welcome-popup">
                                <p>Поиск</p>
                            </div>
                            <form className="main-form" action="">
                                <label className="label-input">
                                    <input type="search"
                                           placeholder="Find..."
                                           id="search"
                                    />
                                    <span className="error email-error">Введите запрос</span>
                                </label>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>Search</span>
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


export default SearchPopup;
