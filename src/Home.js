import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [displayedName, setDisplayedName] = useState("");
    const fullName = "Raja Tayyab";
    
    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullName.length) {
                setDisplayedName(prev => prev + fullName[index]);
                index++;
            } else {
                clearInterval(interval); // Clear interval when done
            }
        }, 300); // Adjust delay (in milliseconds) as needed

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    
    return (
        <div className="main">
            <div className="content">
                <p className="greeting">HI, I'M {displayedName}</p>
                <h1 className="title">MERN Stack Developer</h1>
                <div className="button-container">
                    <Link to="/project">
                        <button className="button primary">Project</button>
                    </Link>
                    <Link to="/contact">
                        <button className="button secondary">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
