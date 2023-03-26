import React from "react"
import classes from "./RecentWorksSection.module.css"

function RecentWorksSection() {
    return <>
        <section>
            <div className={`${classes["recent-works-content"]}`}>
                <h2 className={`${classes["hero-heading"]} ${classes["about-me-heading"]} ${classes["recent-works-heading"]}`}>
                    My recent
                    <span className={`${classes["color-blue"]}`}>
                        works
                    </span>
                </h2>

                <div>
                    <button className={`${classes["hire-me"]} ${classes["recent-works-buttons"]}`}>All</button>
                    <button className={`${classes["download-cv"]} ${classes["recent-works-buttons"]}`}>UI</button>
                    <button className={`${classes["download-cv"]} ${classes["recent-works-buttons"]}`}>UX</button>
                    <button className={`${classes["download-cv"]} ${classes["recent-works-buttons"]}`}>Web Design</button>
                </div>

                <div className={`${classes["recent-work-container"]}`}>
                    <img src="Images/start_up_work.png" alt="" />
                </div>
            </div>
        </section>
    </>
}

export default RecentWorksSection;