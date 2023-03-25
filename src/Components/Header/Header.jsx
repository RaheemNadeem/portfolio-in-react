import React from "react"
import classes from "./Header.module.css"

function Header() {
    
    return <>
        <header>
            <div className={`${classes['nav-bar']} ${classes['border-bottom-line']}`} id="nav-bar">
                <img src="Images/logo.svg" alt="Logo" id="logo" className={classes['cursor-pointer']} />
                <div id="menu-icon-container" className={classes['menu-icon-container']}>
                    <img src="/Images/ham_burger_menu.svg" alt="Start Logo" className={classes['nav-menu-icon']} id="menuImage" onclick="navClick()" />
                </div>
                <nav className={classes['desktop-nav-container']}>
                    <a className={classes['cursor-pointer']}>Home</a>
                    <a className={classes['cursor-pointer']}>About Me</a>
                    <a className={classes['cursor-pointer']}>Contact</a>
                </nav>
            </div>
            <nav id="mobile-menu-container" className={classes['display-none']}>
                <div class="mobile-menu">
                    <label for="">Home</label>
                    <label for="">About Me</label>
                    <label for="">Contact</label>
                </div>
            </nav>
        </header>

    </>
}

export default Header;