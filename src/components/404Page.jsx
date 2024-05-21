// Filename - 404Page.js

import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            {/* <img src="./imgs/funny-404-error-page-design.gif" alt="" /> */}
            <img src="./imgs/404-page-animation-example.gif" alt="" />
            <h1>Look like you're lost</h1>
            <h1>the page you are looking for not available!</h1>
            <div className="extra-button">
                <Link to={"/"} className="back-home-btn">
                    <i className="fas fa-arrow-left"></i> Go Back Home Page
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
