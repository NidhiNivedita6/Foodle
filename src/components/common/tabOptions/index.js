import React from "react";
import "./tabOptions.css"

const tabs = [
    {
        id: 1,
        name: "Delivery",
        active_img: "./images/active2.png",
        backdrop: "FCEEC0",
        inactive_img: "./images/active1.png",
    },
    {
        id: 1,
        name: "Dining Out",
        active_img: "./images/dineOut2.png",
        backdrop: "E5F3F3",
        inactive_img: "./images/dineOut1.png",
    },
    {
        id: 1,
        name: "Nightlife",
        active_img: "./images/nl2.png",
        backdrop: "EDf4FF",
        inactive_img: "./images/nl1.png",
    }
];

const TabOptions = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tab-options">
            <div className="max-width options-wrapper">
                {tabs.map((tab) => {
                    return <div onClick={() => setActiveTab(tab.name)}
                        className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}>
                        <div className="tab-image-container absolute-center"
                            style={{
                                backgrounfColor: `${activeTab === tab.name ? tab.backdrop : ""}`,
                            }}>
                            <img className="tab-image" alt={tab.name} src={activeTab === tab.name ? tab.active_img : tab.inactive_img}></img>
                        </div>
                        <div className="tab-name"></div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default TabOptions