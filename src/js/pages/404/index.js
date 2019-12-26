import React from "react";

class pageNotFound extends React.Component {

    componentDidMount(){
        document.title = "Rugbynews | Page not find"
    }

    render() {
        return (
            <div>
                <div className="page-not-found">
                    <h1 className="page-not-found__title">Page not found</h1>
                    <h2 className="page-not-found__subTitle">404</h2>
                </div>
            </div>
        )
    }
};


export default pageNotFound;