import React from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router';


class LoginPopup extends React.Component {

    render() {
        return (
            <div className="popup">
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login">
                            <div className="welcome-popup">
                                <p>Hello? Welcome Back!</p>
                            </div>
                            <form className="main-form" action="">
                                <label className="label-input">
                                    <input type="email"
                                           placeholder="Username"
                                           id="login-email"
                                    />
                                    <span className="error email-error">Введите логин</span>
                                </label>

                                <label className="label-input">
                                    <input type="password"
                                           id="login-password"
                                           placeholder="Password"
                                           autoComplete="password"
                                    />
                                    <span className="error">Введите пароль</span>
                                </label>
                                <label className="label-checkbox">
                                    <input className="check__input" type="checkbox"/>
                                    <span className="check__box"/>
                                    Rememeber Me
                                </label>
                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>LOG IN</span>
                                        <span className="loader"/>
                                    </button>
                                    <Link to="/forgot">Lost Your Password?</Link>
                                    <Link to="/registration">SignIn</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
};


export default LoginPopup;
