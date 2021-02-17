import React, { useState } from "react";
import { Link } from "gatsby"



const Navigation = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className= { props.navcolor === "white" ? "header white-nav" : "header white-nav"}>
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        {/* <Logo className="logo" /> */}
                    </a>
                </div>

                <div className={ click ? "nav-options active" : "nav-options"}>
                    <div className="option" onClick={closeMobileMenu}>
                        <a href="/home">HOME</a>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <Link
                            to="/about"
                
                        >
                            ABOUT
                        </Link>
                        {/* <a href="/about">ABOUT</a> */}
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <a href="/services">SERVICES</a>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <a href="/portfolio">PORTFOLIO</a>
                    </div>
                    <div className="option" onClick={closeMobileMenu}>
                        <a href="/blog">BLOG</a>
                    </div>

                    <div className=" option mobile-option" onClick={closeMobileMenu}>
                        <a href="/contact" className="sign-up">
                            CONTACT
            </a>
                    </div>
                </div>
            </div>
            <div className="signin-up">

                <div onClick={closeMobileMenu}>
                    <a href="/contact" className="signup-btn">
                        CONTACT
                </a>
                </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLineca="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                ) : (

                        <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                    )}
            </div>
        </div>
    );
};

export default Navigation;