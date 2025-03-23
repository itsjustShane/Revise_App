"use client";

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./progressBar.css";

const socket = io("http://localhost:3002"); // Connect to WebSocket server

function MultiStep() {
    return <Multi />;
}

function Multi() {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    // Function to go to the next step
    const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));

    // Function to go to the previous step
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    // Listen for WebSocket messages from the server
    useEffect(() => {
        socket.on("progressAction", (action) => {
            if (action === "next") nextStep();
            else if (action === "prev") prevStep();
        });

        return () => socket.off("progressAction"); // Cleanup on unmount -- adjust for dynamic content
    }, []);

    return (
        <div className="container">
            <div className="progress_container">
                <div className={`circle ${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`circle ${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`circle ${step >= 3 ? "active" : ""}`}>3</div>
                <div className={`circle ${step >= 4 ? "active" : ""}`}>4</div>
                <div className={`circle ${step >= 5 ? "active" : ""}`}>5</div>
                <div className={`circle ${step >= 6 ? "active" : ""}`}>6</div>
                <div className={`circle ${step >= 7 ? "active" : ""}`}>7</div>
                <div className={`circle ${step >= 8 ? "active" : ""}`}>8</div>
            </div>
        </div>
    );
}

export default MultiStep;


/*
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

    function handlePrev() { // Might change these so they can be progressed remotely
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

export default MultiStep; */