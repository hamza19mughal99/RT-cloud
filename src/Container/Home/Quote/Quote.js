import React, {useState} from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import "./Quote.css";

const Quote = () => {
    const [formData, setFormData] = useState({})

    const handleInput = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_ya1hiis', 'template_sjvsy1c', formData, 'user_xNjOBu8OvCmHqmqF0oIhI')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

        alert('email sent successfully')
    };

    return (
        <div className="quote_main_div">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 quote_col_div">
                        <div className="quote_div">
                            <h2 className='text-center'>Get a Quote</h2>
                            <form onSubmit={sendEmail}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-8 offset-lg-5'>

                                            <input placeholder='Name'
                                                   name={'fullName'}
                                                   onChange={handleInput}
                                                className='input_div mr-4' />

                                            <input placeholder='Phone Number'
                                                   name={'phone_number'}
                                                   onChange={handleInput}
                                                className='input_div' />
                                        </div>
                                        <div className='col-md-8 offset-lg-5'>
                                            <input placeholder='Email'
                                                   name={'email'}
                                                   onChange={handleInput}
                                                   className='input_email_div' />
                                        </div>

                                        <div className='col-md-8 offset-lg-5'>
                                            <textarea className="input_text_div" rows="4"
                                                placeholder="Let us know what you need"
                                                name={'message'}
                                                onChange={handleInput}
                                                required=""
                                                id="comment">
                                            </textarea>
                                        </div>
                                        <div className='col-md-4 offset-lg-8 d-flex justify-content-center'>
                                            <button type={'submit'} className={'contact_btn mb-4'}>Submit</button>
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
