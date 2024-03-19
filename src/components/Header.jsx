import { useState, useEffect } from 'react';
import { PiArrowUpBold } from "react-icons/pi";

import headerLogo from "../assets/Logo3.png";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(false);
     const [isLoading, setIsLoading] = useState(true);
     const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > 0) ? setIsActive(true) : setIsActive(false);
            (window.scrollY > 500) ? setIsShowBtn(true) : setIsShowBtn(false);
        };

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        document.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
        
     }, []);

    const displayNone = {
        display: isLoading ? 'block' : 'none',
    };

    const handleScrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <>  
            <div className={show ? "overlay active" : "overlay"}></div>
            <a href="#" className={isShowBtn ? "scrollToTop active" : "scrollToTop"} onClick={handleScrollToTop}>
                <PiArrowUpBold />
            </a>
            <div className="preloader" style={displayNone}>
                <div className="loader"></div>
            </div>
            <header className={isActive ? "header-section active" : "header-section"}>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                            <img src={headerLogo} alt="logo" />
                            </a>
                        </div>
                        <div className={show ? "header-bar active" : "header-bar"} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
