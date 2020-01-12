import React from "react";
import {Link, Redirect} from 'react-router-dom';
import Select from 'react-select';
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: { label: this.props.val, value: this.props.val },
        };
        this.options = [
            { label: 'English', value: 'english' },
            { label: 'Русский', value: 'russian' },
        ]
    }

    toggleMobMenu() {
        document.querySelector('.header__device-navigation-side-mobile').classList.toggle('active-nav-mobile');
        document.querySelector('#app').classList.toggle('menu-opened');
        document.querySelector('.header__device-navToggle').classList.toggle('navActive');
    }

    toggleSubMenu() {
        document.querySelector('.header__submenu-hover-mobile').classList.toggle('active');
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.querySelector('.header__device-navigation-side-mobile').classList.remove('active-nav-mobile');
            document.querySelector('#app').classList.remove('menu-opened');
            document.querySelector('.header__device-navToggle').classList.remove('navActive');
        }
    }

    // toggleCheck() {
    //     document.querySelector('.header-time-line-section__check div').classList.toggle('checked');
    // }
    toggleCheckMob() {
        document.querySelector('.header__device-time-line-section--check div').classList.toggle("checked-mob-line");
    }

    render() {
        const customStyles = {
            control: (base, state) => ({
                ...base,
                height: '20px',
                'min-height': '20px',
                'box-shadow' : 'none',
                'border-color' : 'transparent',
            }),
        };
        return (
            <div>
                <header className="header">
                    <div className="header__desktop">
                        <div className="header__top-section">
                            <div className="container">
                                <div className="header__wrapper">
                                    <div className="header__language-feeds-wrapper">
                                        <Select  className="header__language-feeds"
                                             styles={customStyles}
                                             options={this.options}
                                             defaultValue={{ label: 'English', value: 'english' }}
                                        />
                                        <img src="img/english_flag.png" className="country-image" alt="country logo"/>
                                    </div>
                                    <div className="header__add-your-feeds">
                                        <button>Add Your Feeds <img src="img/add.png" alt="Add Feeds"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header__bottom-section">
                            <div className="container">
                                <div className="header__bottom-section-wrapper">
                                    <div className="header__logo">
                                        <Link className="header__logo-link" to='/'>
                                            <img className="header__logo-image" src="img/rugbynews-logo.png" alt="logo"/>
                                        </Link>
                                    </div>
                                    <ul className="header__nav-menu">
                                        <li className="header__submenu-hover header__nav-item">
                                            <Link className="header__nav-link" to='/'>NEWS</Link>
                                            <ul className="header__submenu-list">
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>All News</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Newsmker</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Tournaments</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Sevens</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Columns</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Clubs</Link>
                                                </li>
                                                <li className="header__submenu-item">
                                                    <Link className="header__submenu-link" to='/'>Unions</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link className="header__nav-link" to='/schedule'>SCHEDULE</Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link className="header__nav-link" to='/results'>RESULTS</Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link className="header__nav-link" to='/tables'>TABLES</Link>
                                        </li>
                                        <li className="header__nav-item">
                                            <Link className="header__nav-link" to='/video-news'>VIDEO</Link>
                                        </li>
                                    </ul>
                                    <div className="header__search-login-section">
                                        <Link to='/' className="header__search-link">
                                            <img className="header__search-image" src="img/search-icon.png" alt="search"/>
                                        </Link>
                                        <button className="header__button-sig-in">
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
                    <div className="header__device">
                        <div className="container">
                            <div className="header__device-wrapper">
                                <div className="header__device-navToggle" onClick={this.toggleMobMenu}>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="header__device-logo">
                                    <Link className="header__device-logo-link" to='/'>
                                        <img className="header__device-logo-image" src="img/rugbynews-logo.png" alt="logo"/>
                                    </Link>
                                </div>
                                <div className="header__device-search-section">
                                    <div className="header__device-search-image">
                                        <img className="header__device-search-image" src="img/search-icon.png" alt="search"/>
                                    </div>
                                </div>
                                <div className="header__device-navigation-side-mobile">
                                    <ul className="header__device-nav-menu">
                                        <li className="header__device-nav-item header__submenu-hover-mobile" onClick={this.toggleSubMenu}>NEWS
                                            <ul className="header__device-submenu-list">
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
                                        <li className="header__device-nav-item">
                                            <Link className="header__device-nav-link" to='/schedule'>SCHEDULE</Link>
                                        </li>
                                        <li className="header__device-nav-item">
                                            <Link className="header__device-nav-link" to='/results'>RESULTS</Link>
                                        </li>
                                        <li className="header__device-nav-item">
                                            <Link className="header__device-nav-link" to='/tables'>TABLES</Link>
                                        </li>
                                        <li className="header__device-nav-item">
                                            <Link className="header__device-nav-link" to='/video-news'>VIDEO</Link>
                                        </li>
                                        <li className="header__device-nav-item">
                                            <Link className="header__device-nav-link" to='/'>PARTNERSHIP</Link>
                                        </li>
                                        <li className="header__device-nav-item">
                                            <label htmlFor="" className="label__language-feeds">
                                                <select name="" id="">
                                                    <option value="" selected disabled hidden>Language Feeds</option>
                                                    <option value="">English</option>
                                                    <option value="">Русский</option>
                                                </select>
                                                <img src="img/english_flag.png" className="country-image" alt="country logo"/>
                                            </label>
                                        </li>
                                        <li className="header__device-add-your-feeds-mob header__device-nav-item">
                                            <button>Add Your Feeds <img src="img/add.png" alt="Add Feeds"/></button>
                                        </li>
                                        <li className="header__device-time-line-section-wrapper">
                                            <p className="header__device-time-line-title">Time line</p>
                                            <div className="header__device-time-line-section--check mob-check" onClick={this.toggleCheckMob}>
                                                <div className=""/>
                                            </div>
                                        </li>
                                        <li className="header__search-login-section">
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