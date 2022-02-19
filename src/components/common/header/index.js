import React from "react";
import "./header.css";

const Header = () => {
    return (
    <div className="max-width header">
        <img src="./images/foodle-logo.png"
        alt="foodle-logo"
        className="header-logo"
        />
        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <img className="absolute-center location icon" src="./images/location.png" alt="location"></img>
                        {/* <i className="fi fi-rr-marker"></i> */}
                        <div>Mumbai</div>
                    </div>
                    <img className="absolute-center" src="./images/arrow-down.png" alt="arrow-down"></img>
                    {/* <i className="fi fi-rr-caret-down absolute-center"></i> */}
                </div>
                <div className="location-search-separator"></div>
                <div className="header-searchBar">
                    <img className="fi fi-rr-search absolute center search-icon" src="./images/search.png" alt="search"></img>
                    <input placeholder="Search for restaurant, cusine or a dish" 
                    className="search-input" />
                </div>
            </div>
            <div className="profile-wrapper">
                <img src="./images/cup.png" alt="Profile"
                className="header-profile-image" />
                <span className="header-username">Nidhi</span>
                <img className="absolute center profile-options-icon" src="./images/arrow-down.png"></img>
            </div>
        </div>
    </div>
    );
};

export default Header