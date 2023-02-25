import React from "react";

export default function Nav(props) {
    return (
        <nav className={props.lightMode ? "light" : ""}>
            <div className="title">
                <img src="/public/assets/react-icon-small.png" className="logo-nav" />
                <h3 className="title-nav">ReactFacts</h3>
            </div>
            <div className="toggler">
                <p className="toggler-light">Dark</p>
                <div className="toggler-slider" onClick={props.toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Light</p>
            </div>
        </nav>
    )
}