import React from 'react'
import './LandingPage.css';
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import IconPeopleFirst from '../images/icon-people-first.svg'
import IconSnappyProcess from '../images/icon-snappy-process.svg'
import IconAffordablePrices from "../images/icon-affordable-prices.svg"
import { Link } from 'react-router-dom';



function LandingPage() {
    return (
        <div>
            {/* <header>
                <div class="container">
                    <a href="#"><img src={logo} alt="Insure logo" />
                    </a>
                        <nav>
                            <ul id="menu">
                            <li><a href="#">Log in</a></li>
                            <li><a href="#" class="menu-highlight btn-action">Sign Up</a></li>
                            </ul>
                        </nav> 
                        <nav id="menu-mobile">
                            <img src={hamburger} id="menu-icon" />
                            <ul id="menu-mobile-items" style={{"display": "none"}}>
                            <li><a href="#">Log In</a></li>
                            <li>
                                <a href="#" class="menu-highlight btn-action">
                                Sign Up
                                </a>
                                </li>
                            </ul>
                        </nav> 
                </div>
            </header> */}

            <div id="intro">
                <div class="bg-pattern-intro-left"></div>
                <div class="bg-pattern-intro-right"></div>

                <div class="container two-col">
                    <div class="col col-left">
                        <div class="border-top-light"></div>
                        <h1>Find a locale that <br />suits your needs.</h1>
                        <p>
                            Designed for everyone
                        </p>
                        <Link  to="/signup" class="btn-action btn-dark">
                        Sign Up
                        </Link>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
            
            <section id="about">
                <div class="container">
                <div class="about-title">
                    <div class="border-top-dark"></div>
                    <h2>We’re different</h2>
                </div>
                <div class="about-items">
                    <div class="about-description">
                    <img src={IconSnappyProcess} alt="icon of ray to represent 'Snappy Process'" />
                    <h3>Snappy Process</h3>
                    <p>We will do our best to anticipate your needs and exceed your
                        expectations.</p>
                    </div>
                    <div class="about-description">
                    <img src={IconAffordablePrices}alt="icon of dollar sign to represent 'Affordable Prices'" />
                    <h3>Affordable Prices</h3>
                    <p>CollegeFox lets you advertise and search through properties that
                        are much more to your liking and fit your needs.</p>
                    </div>
                    <div class="about-description">
                        <img src={IconPeopleFirst} alt="icon of a person to represent 'People First'" />
                        <h3>Outperform</h3>
                        <p>We will do our best to anticipate your needs and exceed your expectations.</p>
                    </div>
                </div>
                </div>
            </section>

            <section id="how-we-work">
                <div class="container">
                <div id="banner-how-we-work" class="two-col">
                    <div class="col">        
                    <h2>Find out more<br />about how we work</h2>
                    {/* </div> */}
                        <div>
                        {/* <button class="btn-action btn-dark">How we work</button> */}
                        </div>
                </div>
                </div>
                </div>
            </section>

            <footer>
                <div class="container">
                <div id="footer-top-bar">
                    <a href="#"><img src={logo} alt="Insure logo" /> 
                    </a>
                    {/* <div id="footer-social-media">
                    <div class="social-icon facebook"></div>
                    <div class="social-icon twitter"></div>
                    <div class="social-icon pinterest"></div>
                    <div class="social-icon instagram"></div>
                    </div>  */}
                </div>
                </div>
            </footer>
    </div>
    )
}

export default LandingPage
