import React, {Component} from 'react';
import logo from '../images/logo1.jpg';
import logo1 from '../images/logo3.jpg';

class About extends Component{
    render(){
        return (
            <>
                <div className='nav'>
                    <div className='logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='hero-div'></div>
                <div className='hero'>
                    <h2>About <span>Us</span></h2>
                </div>

                <div className='blank'></div>

                <div className='footer'>
                    <div className='footer__left'>
                        <img src={logo1} alt='logo' width='70'/>
                    </div>
                    <div className='footer__centre'>
                        <h1>Contact Us:</h1>
                        <h2>Destiven Merchant LLC</h2>
                        <ul>
                            <li>Avenue 2 Kenyatta Rd (Off-Thika Rd)</li>
                            <li>Nairobi</li>
                            <li>+1 (515) 854-8458 | (254) 715-657-003</li>
                            <li>stephen@destivenmerchants.com</li>
                        </ul>
                    </div>
                    <div className='footer__right'>
                        <h1>Service Locations:</h1>
                        <ul>
                            <li>USA</li>
                            <li>United Kingdom</li>
                            <li>Canada</li>
                            <li>Australia</li>
                            <li>Netherlands</li>
                            <li>Germany</li>
                        </ul>
                    </div>
                </div>
                
                <div className='watermark'>
                    Copyright © 2022 destiven merchant llc
                </div>
            </>
        )
    }
}

export default About; 