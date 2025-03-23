import "./page.css"; // Make sure this import path is correct

export default function Procedures() {
    return (
      <div className="dashboard-container">
        {/* Header Container */}
        <div className="header-container">
            <h1>Progress</h1>
        </div>
        
        {/* Body Content */}
        <div className="body-container">
            <h2>Procedure Steps</h2>
            <h3>1. Lorem ipsum</h3>
            <p>The doctor does this...</p>
            <h3>2. Supercalifrajalisticexpialadocious</h3>
            <p>The surgeon does that...</p>
            <h3>3. sfjdkslfjlsk</h3>
            <p>nananana</p>
        </div>
      </div>
    );
}
