import React from "react";
import classes from "./HeroSection.module.css"

function HeroSection() {
    return <>
        <section className={`${classes['over-flow-hidden']} ${classes['hero-section']}`} id="heroSection">
            <img src="Images/Hero-image.svg" alt="" className={`${classes['width-100pc']} ${classes['hero-image']}`} />
            <div className={classes['hero-content']}>
                {/* <!-- <svg id="arrow" width="38" height="111" viewBox="0 0 38 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.8409 2.06596C23.7714 2.40446 25.9954 1.94652 16.2305 11.3482C14.0002 13.4954 10.6281 16.107 9.86391 19.9219C8.73617 25.5515 15.6394 42.5832 20.1589 36.3149C23.0797 32.2639 22.5171 25.3057 18.0739 23.4655C10.7873 20.4476 4.92885 29.3703 2.66363 37.0805C0.169736 45.569 2.26417 54.855 8.14175 60.523C10.8268 63.1123 15.158 61.9397 12.7822 56.441C7.89575 45.131 2.24416 58.8509 3.00934 66.3649C4.38756 79.8988 16.0122 97.6785 26.8881 94.8588C30.2885 93.9772 29.1771 92.0109 27.7501 90.5559C26.302 89.0795 22.6611 83.6884 23.6386 85.7354C25.3475 89.314 27.5155 90.754 29.9375 92.8554C33.0613 95.5659 26.3608 101.489 24.4198 103.603C23.4008 104.712 21.9202 107.198 21.6446 109.008C21.1003 112.582 25.0292 103.244 25.7323 99.7341" stroke="#00ADB5" stroke-opacity="0.2" stroke-width="2.35591" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> --> */}

                <div>
                    <h2>CREATIVE UI <span className={classes['color-blue']}>DEVELOPER</span></h2>
                    <div className={classes['hero-buttons-cont']}>
                        <button className={`${classes['hero-buttons']} ${classes['hire-me']}`} id="hireMe">Hire me</button>
                        <div className={`${classes['hero-buttons']} ${classes[ 'download-cv']}`}><label htmlFor="" className={`${classes['cursor-pointer']}`}>Download CV</label> </div>
                    </div>
                </div>
            </div>
        </section>

        <div className={classes['arrow-down']} id="arrowDown">
            <img src="Images/hero-down-arrow.svg" alt=""/>
        </div>
    </>
}

export default HeroSection;