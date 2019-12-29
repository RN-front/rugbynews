import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {

    toggleAnswer(e) {
        e.currentTarget.parentNode.classList.toggle('active');
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="footer__footer-wrapper">
                            <div className="footer__column">
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>РУБРИКАТОР</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/faq'>FAQ</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Новости</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Истории</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Разбор</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Игры</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Шапито</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Подкасты</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Атлас</Link></li>
                                    </ul>
                                </div>
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>ПРИЛОЖЕНИЯ</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>iOS</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Android</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__column">
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>СОЦИАЛЬНЫЕ СЕТИ</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Facebook</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Twitter</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>ВКонтакте</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>ВКонтакте-Новости</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>ВКонтакте-Будущее</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Youtube</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Instagram</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Одноклассники</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Medium</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__column">
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>TELEGRAM</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Meduza Live</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Вечерняя Медуза</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Срочные новости</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Все новости</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Шапито</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Бот</Link></li>
                                    </ul>
                                </div>
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>РЕДАКЦИЯ</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Контакты редакции</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__column">
                                <div className="footer__title-column">
                                    <p onClick={this.toggleAnswer}>НАШИ ПРОЕКТЫ</p>
                                    <ul className="footer__item-list">
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Конференции «Шторм»</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Школа «Ферма»</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>MeduzaCare</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Об «Атласе»</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>УВЕДОМЛЕНИЯ</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>RSS</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>РЕКЛАМА</Link></li>
                                        <li className="footer__nav-item"><Link className="footer__nav-link" to='/'>Реклама на «Медузе»</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom-wrapper">
                            <div className="footer__logo-social">
                                <Link className="footer__logo-link" to='/'>
                                    <img className="footer__logo-link--image" src="img/rugbynews-logo.png" alt="logo"/>
                                </Link>
                                <div className="footer__social-wrapper">
                                    <Link className="footer__social-link" to='/'>
                                        <img className="footer__social-link--image" src="img/facebook-logo.png" alt="facebook"/>
                                    </Link>
                                    <Link className="footer__social-link" to='/'>
                                        <img className="footer__social-link--image" src="img/rss-symbol.png" alt="rss"/>
                                    </Link>
                                    <Link className="footer__social-link" to='/'>
                                        <img className="footer__social-link--image" src="img/google.png" alt="google"/>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};


export default Footer;