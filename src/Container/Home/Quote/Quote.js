import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"


import "./Quote.css";

const Quote = () => {
    return (
        <div className="quote_main_div">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 quote_col_div">
                        <div className="quote_div">
                            <h2 className='text-center'>Get a Quote</h2>
                            <form>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-8 offset-lg-5'>
                                            <input placeholder='Name'
                                                className='input_div mr-4' />
                                            <input placeholder='Phone Number'
                                                className='input_div' />
                                        </div>
                                        <div className='col-md-8 offset-lg-5'>
                                            <input placeholder='Email'
                                                className='input_email_div' />
                                        </div>

                                        <div className='col-md-8 offset-lg-5'>
                                            <textarea class="input_text_div" rows="4"
                                                placeholder="Let us know what you need"
                                                required=""
                                                id="comment">
                                            </textarea>
                                        </div>
                                        <div className='col-md-4 offset-lg-8 d-flex justify-content-center'>
                                            <button className={'contact_btn mb-4'}>Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 contact_col_div">
                        <div className="contact_div">
                            <h2>Contact Us</h2>

                            <div className='mt-4'>
                                <div className='d-flex'>
                                    <div className='md_icon'>
                                    <MdLocationOn />
                                    </div>
                                    <p>1791 sunshine youkshine circle kitty hawk</p>
                                </div>

                                <div className='d-flex'>
                                    <div className='md_icon'>
                                    <MdEmail />
                                    </div>
                                    <p>rtcloudsolutions@gmail.com</p>
                                </div>

                                <div className='d-flex'>
                                    <div className='md_icon'>
                                    <BsTelephoneFill />
                                    </div>
                                    <p>000 8888 6666</p>
                                </div>
                            </div>

                            <div className='social_icons'>
                                <div style={{fontSize: "25px", marginRight: "10px"}}>
                                    <FaFacebookF />
                                </div>
                                <div style={{fontSize: "25px", marginRight: "10px"}}>
                                    <BsInstagram />
                                </div>
                                <div style={{fontSize: "25px", marginRight: "10px"}}>
                                    <BsTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
