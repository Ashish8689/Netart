import React from 'react';
import './style.css';

function About() {
    return (
        <div className="about">
            <div className="about-logo">
                <img className="logo" src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="trophy"/>
            </div>

            <div className="about-description">
                <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>

                <div className="inner-content">

                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>

                    <img src={`${process.env.PUBLIC_URL}/image/2.png`} alt="trophy"/>

                    <h2>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h2>

                </div>
            </div>
        </div>
    )
}

export default About;
