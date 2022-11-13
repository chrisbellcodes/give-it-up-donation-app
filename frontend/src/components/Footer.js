import React from 'react';


const Footer = () => {



    return(
        <footer className="main-footer">
            <div className='Footer__text'>
                Need help? Have feedback? Email us at <a className="footer-link" target={"_blank"} href="mailto:info@developingarts.org">info@developingarts.org</a>
            </div>
            <img className='Footer__da-logo' src={'./da-logo-white.png'} alt='DA logo' />
            <a className="footer-link" target={"_blank"} href="https://www.developingartists.org/">www.developingartists.org</a>
            <div className='Footer__text'>
                © Copyright 2022   |   ALL RIGHTS RESERVED
            </div>
        </footer>
    )
}


export default Footer;


