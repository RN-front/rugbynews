import React from "react";
import {Link, Redirect} from 'react-router-dom';

class LeftProfileMenu extends React.Component {

    render() {
        return (
            <div>
                <div className="left-profile-menu">
                    <Link to='/'><img src="img/home-page.png" alt="home page"/>My page</Link>
                    <Link to='/'><img src="img/acc-user.png" alt="acc user"/>Profile</Link>
                    <Link to='/'><img src="img/credit-card.png" alt="credit card"/>Payment</Link>
                    <Link to='/'><img src="img/settings-work-tool.png" alt="settings work tool"/>Tutorial</Link>
                </div>
            </div>
        )
    }
};


export default LeftProfileMenu;