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
                        <div className="footer-wrapper">
                            <div className="footer-wrapper__column">
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>РУБРИКАТОР</p>
                                    <ul className="footer-list">
                                        <li><Link to='/faq'>FAQ</Link></li>
                                        <li><Link to='/'>Новости</Link></li>
                                        <li><Link to='/'>Истории</Link></li>
                                        <li><Link to='/'>Разбор</Link></li>
                                        <li><Link to='/'>Игры</Link></li>
                                        <li><Link to='/'>Шапито</Link></li>
                                        <li><Link to='/'>Подкасты</Link></li>
                                        <li><Link to='/'>Атлас</Link></li>
                                    </ul>
                                </div>
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>ПРИЛОЖЕНИЯ</p>
                                    <ul className="footer-list">
                                        <li><Link to='/'>iOS</Link></li>
                                        <li><Link to='/'>Android</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-wrapper__column">
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>СОЦИАЛЬНЫЕ СЕТИ</p>
                                    <ul className="footer-list">
                                        <li><Link to='/'>Facebook</Link></li>
                                        <li><Link to='/'>Twitter</Link></li>
                                        <li><Link to='/'>ВКонтакте</Link></li>
                                        <li><Link to='/'>ВКонтакте-Новости</Link></li>
                                        <li><Link to='/'>ВКонтакте-Будущее</Link></li>
                                        <li><Link to='/'>Youtube</Link></li>
                                        <li><Link to='/'>Instagram</Link></li>
                                        <li><Link to='/'>Одноклассники</Link></li>
                                        <li><Link to='/'>Medium</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-wrapper__column">
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>TELEGRAM</p>
                                    <ul className="footer-list">
                                        <li><Link to='/'>Meduza Live</Link></li>
                                        <li><Link to='/'>Вечерняя Медуза</Link></li>
                                        <li><Link to='/'>Срочные новости</Link></li>
                                        <li><Link to='/'>Все новости</Link></li>
                                        <li><Link to='/'>Шапито</Link></li>
                                        <li><Link to='/'>Бот</Link></li>
                                    </ul>
                                </div>
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>РЕДАКЦИЯ</p>
                                    <ul className="footer-list">
                                        <li><Link to='/'>Контакты редакции</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-wrapper__column">
                                <div className="title-column">
                                    <p onClick={this.toggleAnswer}>НАШИ ПРОЕКТЫ</p>
                                    <ul className="footer-list">
                                        <li><Link to='/'>Конференции «Шторм»</Link></li>
                                        <li><Link to='/'>Школа «Ферма»</Link></li>
                                        <li><Link to='/'>MeduzaCare</Link></li>
                                        <li><Link to='/'>Об «Атласе»</Link></li>
                                        <li><Link to='/'>УВЕДОМЛЕНИЯ</Link></li>
                                        <li><Link to='/'>RSS</Link></li>
                                        <li><Link to='/'>РЕКЛАМА</Link></li>
                                        <li><Link to='/'>Реклама на «Медузе»</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-wrapper">
                            <div className="footer-bottom-wrapper__logo-social">
                                <Link to='/'>
                                    <img src="img/rugbynews-logo.png" alt="logo"/>
                                </Link>
                                <div className="footer-social">
                                    <Link to='/'>
                                        <img src="img/facebook-logo.png" alt="facebook"/>
                                    </Link>
                                    <Link to='/'>
                                        <img src="img/rss-symbol.png" alt="rss"/>
                                    </Link>
                                    <Link to='/'>
                                        <img src="img/google.png" alt="google"/>
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