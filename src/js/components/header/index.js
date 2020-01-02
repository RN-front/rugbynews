import React from "react";
import {Link, Redirect} from 'react-router-dom';

class Header extends React.Component {

    toggleMobMenu() {
        document.querySelector('.navigation-side-mobile').classList.toggle('active-nav-mobile');
        document.querySelector('#app').classList.toggle('menu-opened');
        document.querySelector('.header__navToggle').classList.toggle('navActive');
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.querySelector('.navigation-side-mobile').classList.remove('active-nav-mobile');
            document.querySelector('#app').classList.remove('menu-opened');
            document.querySelector('.header__navToggle').classList.remove('navActive');
        }
    }

    // toggleCheck() {
    //     document.querySelector('.header-time-line-section__check div').classList.toggle('checked');
    // }
    toggleCheckMob() {
        document.querySelector('.header-time-line-section__check.mob-check div').classList.toggle("checked-mob-line");
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header-desktop">
                        <div className="header-top-section">
                            <div className="container">
                                <div className="header-top-section-wrapper">
                                    <div className="header-top-section__language-feeds">
                                        <label htmlFor="" className="label__language-feeds">
                                            <select name="" id="">
                                                <option value="" selected disabled hidden>Language Feeds</option>
                                                <option value="">English</option>
                                                <option value="">Русский</option>
                                            </select>
                                            <img src="img/english_flag.png" className="country-image" alt="country logo"/>
                                        </label>
                                    </div>
                                    <div className="header-top-section__add-your-feeds">
                                        <button>Add Your Feeds <img src="img/add.png" alt="Add Feeds"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom-section">
                            <div className="container">
                                <div className="header-bottom-section-wrapper">
                                    <div className="header-logo">
                                        <Link to='/'>
                                            <img src="img/rugbynews-logo.png" alt="logo"/>
                                        </Link>
                                    </div>
                                    <ul className="header-nav-menu">
                                        <li className="submenu-hover">
                                            <Link to='/'>NEWS</Link>
                                            <ul className="submenu-list">
                                                <li>
                                                    <Link to='/'>All News</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Newsmker</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Tournaments</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Sevens</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Columns</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Clubs</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Unions</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to='/schedule'>SHEDULE</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>RESULTS</Link>
                                        </li>
                                        <li>
                                            <Link to='/tables'>TABLES</Link>
                                        </li>
                                        <li>
                                            <Link to='/video-news'>VIDEO</Link>
                                        </li>
                                    </ul>
                                    <div className="header-search-login-section">
                                        <Link to='/' className="header-search-link"><img src="img/search-icon.png"
                                                                                         alt="search"/></Link>
                                        <button>
                                            Reg /&nbsp;<span>LogIn</span><img src="img/acc-user.png" alt="user"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="header-time-line-section">*/}
                            {/*<div className="container">*/}
                                {/*<div className="header-time-line-section-wrapper">*/}
                                    {/*<p>Time line</p>*/}
                                    {/*<div className="header-time-line-section__check"  onClick={this.toggleCheck}>*/}
                                        {/*<div className=""></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="header-device">
                        <div className="container">
                            <div className="header-device-wrapper">
                                <div className="header__navToggle" onClick={this.toggleMobMenu}>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="header-logo">
                                    <Link to='/'>
                                        <img src="img/rugbynews-logo.png" alt="logo"/>
                                    </Link>
                                </div>
                                <div className="header-search-section">
                                    <Link to='/' className="header-search-link">
                                        <img src="img/search-icon.png" alt="search"/>
                                    </Link>
                                </div>
                                <div className="navigation-side-mobile">
                                    <ul className="header-nav-menu">
                                        <li className="submenu-hover">NEWS
                                            <ul className="submenu-list">
                                                <li>
                                                    <Link to='/'>All News</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Newsmker</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Tournaments</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Sevens</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Columns</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Clubs</Link>
                                                </li>
                                                <li>
                                                    <Link to='/'>Unions</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to='/schedule'>SHEDULE</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>RESULTS</Link>
                                        </li>
                                        <li>
                                            <Link to='/tables'>TABLES</Link>
                                        </li>
                                        <li>
                                            <Link to='/video-news'>VIDEO</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>PARTNERSHIP</Link>
                                        </li>
                                        <li>
                                            <label htmlFor="" className="label__language-feeds">
                                                <select name="" id="">
                                                    <option value="" selected disabled hidden>Language Feeds</option>
                                                    <option value="">English</option>
                                                    <option value="">Русский</option>
                                                </select>
                                                <img src="img/english_flag.png" className="country-image" alt="country logo"/>
                                            </label>
                                        </li>
                                        <li className="add-your-feeds-mob">
                                            <button>Add Your Feeds <img src="img/add.png" alt="Add Feeds"/></button>
                                        </li>
                                        <li className="header-time-line-section-wrapper">
                                            <p>Time line</p>
                                            <div className="header-time-line-section__check mob-check" onClick={this.toggleCheckMob}>
                                                <div className=""></div>
                                            </div>
                                        </li>
                                        <li className="header-search-login-section">
                                            <button>
                                                <span>LogIn</span><img src="img/acc-user.png" alt="user"/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};


export default Header;