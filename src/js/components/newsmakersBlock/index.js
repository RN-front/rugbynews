import React from "react";
import {Link} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

class NewsmakersBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            is_mobile: false
        };

        this.isMobileCheck = this.isMobileCheck.bind(this);
    }

    isMobileCheck() {
        return (/iPhone|iPad|iPod|Android|webOS/.test(navigator.userAgent) && !window.MSStream);
    }

    componentDidMount() {
        this.setState({is_mobile: this.isMobileCheck()})
    }

    render() {
        return (
            <div>
                <div className="newsmakers-section">
                    <h2>Newsmakers</h2>
                    <div className="short-newsmakers-block">
                        <div className="short-newsmakers-block__img-block">

                        </div>
                        <div className="list-news">
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time_icon.png" alt=""/>2h<span>Rugby Union</span></p>
                                <img src="img/JMP_Bristol_Rugby_v_Bedford_Blues_RT0307.jpg" alt="news photo"/>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time_icon.png" alt=""/>2h<span>Rugby Union</span></p>
                                <img src="img/QPR.jpg" alt="news photo"/>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time_icon.png" alt=""/>2h<span>Rugby Union</span></p>
                                <img src="img/987a9673f3aa09843438f805362f6454.jfif" alt="news photo"/>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time_icon.png" alt=""/>2h<span>Rugby Union</span></p>
                                <img src="img/37.jpg" alt="news photo"/>
                            </div>
                            <div className="select-news">
                                <Link to='/'>Man UTD January Transfer life</Link>
                                <p><img src="img/time_icon.png" alt=""/>2h<span>Rugby Union</span></p>
                                <img src="img/images.jfif" alt="news photo"/>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-newsmakers-block">
                            <Scrollbars className="list-news" hideTracksWhenNotNeeded={true} autoHeight={this.state.is_mobile}>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/JMP_Bristol_Rugby_v_Bedford_Blues_RT0307.jpg" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/Minis-landscape2.jpg" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/Minis-landscape.png" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/JMP_Bristol_Rugby_v_Bedford_Blues_RT0307.jpg" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/Minis-landscape2.jpg" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__img">
                                    <img src="img/Minis-landscape.png" alt=""/>
                                </div>
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-select-news">
                                <div className="scroll-select-news__preview">
                                    <div className="scroll-select-news__preview__title">
                                        <Link to='/'>Mauricio Pochettino praised Tottenham's</Link>
                                        <p>opposed the football fan zone on the territory of the university. opposed the football fan zone on the territory of the university.</p>
                                    </div>
                                    <div className="scroll-select-news__preview__info">
                                        <p><img src="img/play_icon.png" alt=""/><img src="img/time_icon.png" alt=""/>15 sec/min ago<span>Rugby Union</span></p>
                                    </div>
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                    <div className="show-more-news">
                        <button>More Recent News <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
        )
    }
};


export default NewsmakersBlock;