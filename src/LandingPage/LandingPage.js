import React from 'react'
import './LandingPage.css';
import logo from "../images/logo.svg"
import IconPeopleFirst from '../images/icon-people-first.svg'
import IconSnappyProcess from '../images/icon-snappy-process.svg'
import IconAffordablePrices from "../images/icon-affordable-prices.svg"
import { Link } from 'react-router-dom';



function LandingPage() {
    return (
        <div>
            <div id="intro">
                <div className="bg-pattern-intro-left"></div>
                <div className="bg-pattern-intro-right"></div>

                <div className="container two-col">
                    <div className="col col-left">
                        <div className="border-top-light"></div>
                        <h1>Find a locale that <br />suits your needs.</h1>
                        <p>
                            Designed for everyone
                        </p>
                        <Link  to="/signup" className="btn-action btn-dark">
                        Sign Up
                        </Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            
            <section id="about">
                <div className="container">
                <div className="about-title">
                    <div className="border-top-dark"></div>
                    <h2>We’re different</h2>
                </div>
                <div className="about-items">
                    <div className="about-description">
                    <img src={IconSnappyProcess} alt="icon of ray to represent 'Snappy Process'" />
                    <h3>Snappy Process</h3>
                    <p>We will do our best to anticipate your needs and exceed your
                        expectations.</p>
                    </div>
                    <div className="about-description">
                    <img src={IconAffordablePrices}alt="icon of dollar sign to represent 'Affordable Prices'" />
                    <h3>Affordable Prices</h3>
                    <p>CollegeFox lets you advertise and search through properties that
                        are much more to your liking and fit your needs.</p>
                    </div>
                    <div className="about-description">
                        <img src={IconPeopleFirst} alt="icon of a person to represent 'People First'" />
                        <h3>Outperform</h3>
                        <p>We will do our best to anticipate your needs and exceed your expectations.</p>
                    </div>
                </div>
                </div>
            </section>

            <section id="how-we-work">
                <div className="container">
                <div id="banner-how-we-work" className="two-col">
                    <div className="col">        
                    <h2>Find out more<br />about how we work</h2>
                    {/* </div> */}
                        <div>
                        {/* <button className="btn-action btn-dark">How we work</button> */}
                        </div>
                </div>
                </div>
                </div>
            </section>

            <footer>
                <div className="container">
                <div id="footer-top-bar">
                    <a href="#"><img src={logo} alt="Insure logo" /> 
                    </a>
                    {/* <div id="footer-social-media">
                    <div className="social-icon facebook"></div>
                    <div className="social-icon twitter"></div>
                    <div className="social-icon pinterest"></div>
                    <div className="social-icon instagram"></div>
                    </div>  */}
                </div>
                </div>
            </footer>
    </div>
    )
}

export default LandingPage
