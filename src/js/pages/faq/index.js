import React from "react";

import faqData from "./data"
import LeftProfileMenu from "../../components/leftProfileMenu";

class Faq extends React.Component {

    componentDidMount(){

    }

    constructor(props) {
        super(props);

        this.state = {
            data: faqData
        };

    }

    toggleAnswer(e) {
        e.currentTarget.parentNode.classList.toggle('show-more');
    }

    render() {
        return (
            <div>
                <div className="faq-block">
                    <div className="container">
                        <p className="faq-block__title">My rugbynews</p>
                        <div className="faq-block__wrapper">
                            <div className="left-profile-menu-block">
                                <LeftProfileMenu/>
                            </div>
                            <div className="faq-block__main-block">
                                <h3 className="faq-block__main-block__title">
                                    FAQ
                                </h3>
                                <div className="faq-dropdown-block" onClick={this.toggleAnswer}>

                                    {this.state.data.map((item, index)=> {
                                        return <div className="faq-dropdown-item" key={index}>
                                            <div className="faq-dropdown-question" onClick={this.toggleAnswer}>
                                                <p>{item.q}</p>
                                            </div>
                                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                                <p>
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
};

export default Faq;