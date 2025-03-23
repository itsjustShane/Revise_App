"use client";

import React, { useState } from "react";
import "./progressBar.css";
//import Progress from "./Progress";

// const message = ['Step 1', 'Step 2', 'Step 3'];

function MultiStep() {
    return <Multi />
}

function Multi() {

    const [step, setStep] = useState(1);
    const totalSteps = 3;

    function handlePrev() {
        if (step > 1) setStep((step)=> step - 1);
    }

    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }

    return (
        <div className="container">
            <div className="progress_container">
                <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
                <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
                <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
            </div>
            <div className="btns">
                <button className="btn" onClick={handlePrev}>Prev</button>
                <button className="btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
/*
function Message({step}) {
    return <h2>{message[step - 1]}</h2>
}
*/
export default MultiStep;