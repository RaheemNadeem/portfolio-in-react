import React from "react"
import classes from "./AboutMeSection.module.css"

function AboutMeSection() {
    return <>
        <section className={`${classes['overflow-hidden']} ${classes['about-me-container']}`}>
            <img src="Images/second-section-image.svg" alt="" className={classes['width-100pc']} />
            <div>
                <img src="Images/musical-sign.svg" alt="" className={classes['musical-sign']} />

                <div className={`${classes['about-me']}`} id="aboutMePara">
                    <h2 className={`${classes['hero-heading']} ${classes['about-me-heading']}`}>
                        About <span className={`${classes['color-blue']}`}>me</span>
                    </h2>
                    <p className={`${classes['about-me-para']}`}>
                        I am a creative web developer with a passion for building visually stunning and user-friendly websites. My goal is to create websites that not only look great but also provide a seamless user experience. Whether it's a simple brochure website or a complex web application, I'm here to bring your vision to reality. Browse my portfolio and let's work together to create <span>something amazing!</span>
                    </p>
                    <img src="Images/lightbulb.svg" alt="" className={`${classes['light-bulb']}`} />
                </div>
                <img src="Images/about-me-arrow.svg" alt="" className={`${classes['about-me-arrow']}`} />
            </div>
        </section>

    </>
}

export default AboutMeSection;