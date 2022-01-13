import React from 'react';
import CommonSection from "../CommonSection/CommonSection";
import Quote from "../Home/Quote/Quote";

const Contact = () => {
    return (
        <React.Fragment>
            <CommonSection
                head="Contact Us"
                text="<p class='text-center'>For new project inquiries, quotes, or to discuss your cloud strategy, please provide some <br />
information about your project in the message field. We also welcome employment inquiries and <br />
questions about our services. Please fill out the form and we'll be in touch shortly.</p>"
                class_div="main_contact_div"
            />
            <div>
                <Quote />
            </div>

                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Marina%20Bay%20Sand%20Singapore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe>


        </React.Fragment>
    );
};

export default Contact;
