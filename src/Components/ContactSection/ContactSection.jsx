import React from "react"
import classes from "./ContactSection.module.css"

function ContactSection() {
    return <>
        <section className={`${classes['contact-section']}`} id="contact">
            <div className={`${classes['left']}`}>
                <h2 className={`${classes['hero-heading']} ${classes['about-me-heading']} ${classes['recent-works-heading']}`}>Got a project in
                    <span className={`${classes['color-blue']}`}>mind?</span>
                </h2>
                <img src="Images/contact.svg" alt="" />
            </div>
            <div className={`${classes['right']}`}>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" id="" placeholder="Name" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input type="text" name="email" id="" placeholder="Email" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="message">Your message</label>
                    <textarea name="message" id="" cols="30" rows="3" placeholder="Message" autoComplete="off"></textarea>
                </div>
            </div>
        </section>

    </>
}

export default ContactSection;