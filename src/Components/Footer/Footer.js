import React from 'react';
import footerLogo from "../../assets/footer-logo.png";
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import "./Footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="main_footer_div">
                <div className="container">
                    <div className="row footer_row">
                        <div className="col-md-3 footer_first_col">
                            <div className="footer_logo_img">
                                <img src={footerLogo} alt="footer-logo" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer
                                ad Lorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet,
                                consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer  adLorem ipsum dolor sit amet, consectetuer ad Lorem ipsum dolor sit amet, consectetuer adLorem ipsum dolor sit amet, consectetuer ad</p>
                        </div>
                        <div className="col-md-2 footer_page_link">
                            <div className='info_div'>
                                <p>PAGE LINKS</p>
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Service</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer_page_link">
                            <div className='info_div'>
                                <p>CONTACT</p>
                            </div>
                            <div>
                                <ul>
                                    <li>000 8888 6666</li>
                                    <li>rtcloudsolutions@gmail.com</li>
                                    <li>1791 sunshine youkshine circle kitty hawk</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 newsletter_div">
                            <div className='info_div'>
                                <p>NEWSLETTER</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consec loremipsum</p>
                            </div>
                            <div>
                                <input className="footer_input" placeholder="Your Message Here" />
                                    <button className={'submit_btn'}>Submit</button>
                            </div>

                            <div className='footer_social_icons'>
                                <div className='icon_div'>
                                    <FaFacebookF />
                                </div>
                                <div className='icon_div'>
                                    <BsInstagram />
                                </div>
                                <div className='icon_div'>
                                    <BsTwitter />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className='copy_rights_div'>
                    <div className='container'>
                    <hr style={{backgroundColor: "#fff"}}/>
                    </div>
                    <p className='text-center'>Copyright 2021 RT Cloud Solutions. All Rights Reserved</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
