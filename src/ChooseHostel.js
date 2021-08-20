import React from "react";
import './App.css';


const ChooseHostel = () => {
    return (
        <div>
            <h2>Choose Your Hostel</h2>
            <div id="parent">
                <div className="hostelSelection" id="girlSection">
                    <img src="https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-heart-bg-256.png" 
                    alt="..."/>
                    <h3>Girls Hostel</h3>
                </div>
                <div className="hostelSelection" id="boySection">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-256.png" 
                    alt="..."/> 
                    <h3>Boys Hostel</h3>
                </div>
            </div>
        </div>
    )
}

export default ChooseHostel;

