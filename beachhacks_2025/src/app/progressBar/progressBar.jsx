import React from "react";
import "./progressBar.css";

function ProgressBar() {
    return <Progress />
}

function Progress() {
    return (
        <div className="container">
            <div className="progress_container">
                <div className="progress"></div>
                <div className="circle">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
            </div>
            <div className="btns">
                <button className="btn active">Prev</button>
                <button className="btn active">Next</button>
            </div>
        </div>
    );
}

export default ProgressBar;