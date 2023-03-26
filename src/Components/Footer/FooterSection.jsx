import React from "react"
import classes from "./FooterSection.module.css"
function FooterSection() {
    return <>
        <footer className={`${classes['footer-section']}`}>
            <div className={`${classes['footer-nav']}`}>
                <div className={`${classes['footer-nav-link']}`}>
                    <a href="" id="homeNavLink">
                        <img src="Images/home-icon.svg" alt="" />
                        <p>Home</p>
                    </a>
                </div>
                <div className={`${classes['footer-nav-link']}`}>
                    <a href="" id="aboutMeNavLink">
                        <img src="Images/user.svg" alt="" className={`${classes['user-icon']}`} />
                        <p>About me</p>
                    </a>
                </div>
                <div className={`${classes['footer-nav-link']}`}>
                    <a href="" id="contact-icon">
                        <img src="Images/phone.svg" alt="" />
                        <p>Contact</p>
                    </a>
                </div>
            </div>

            <div className={`${classes['social-links']}`}>
                <img src="Images/facebook.svg" alt="" className={`${classes['social-link']}`} />
                <img src="Images/instagram.svg" alt="" className={`${classes['social-link']}`} />
                <img src="Images/twitter.svg" alt="" className={`${classes['social-link']}`} />
                <img src="Images/youtube.svg" alt="" className={`${classes['social-link']}`} />
            </div>
            <p>Terms of Service - Privacy Policy</p>
        </footer>
    </>
}

export default FooterSection;
