import React from 'react';
import CommonSection from "../CommonSection/CommonSection";
import AboutUs from "../../assets/aboutUs.png";
import ConsultingImg from "../../assets/about2-img.png"

const About = () => {
    return (
        <React.Fragment>
            <CommonSection
                head="About Us"
                text="<p class='text-center'>Cloud Consulting in North America.<br/> We understand the unique needs of Canadian and US companies.</p>"
                class_div="main_about_div"
            />

            <div className="first-section">
                <div className='container first_section_div'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='first_section_img_div'>
                                <img src={AboutUs} alt='about-img' />

                                <p className="about-div-p mt-2">Security</p>
                                <p>Data breaches can be avoided by following best
                                    practices in security and applying discipline
                                    in development practices. We'll lay a solid
                                    foundation for your team to build on.
                                </p>

                                <p className="about-div-p">Process Automation</p>
                                <p> Leveraging the cloud to automate processes like
                                    software testing and deployment is a core factor
                                    to the decision to deploy in AWS cloud. We're
                                    expert devops consultants experienced in transformation
                                    in this area.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='first_section_text_div'>
                                <p>About Us</p>
                                <h1>Cloud <span> Consulting </span> in North America </h1>
                                <p>We understand the unique needs of Canadian and US companies.</p>

                                <p className="about-div-p">Data Residency</p>
                                <p>If your company or organization has a requirement to maintain data
                                    residency in Canada, we will work with you to build your infrastructure
                                    in Canadian cloud dataCentres.</p>

                                <p className="about-div-p">Privacy</p>
                                <p>We have experience with the Personal Information Protection and
                                    Electronic Documents Act (PIPEDA), a compliance regime designed to
                                    protect the private data of Canadians.</p>

                                <p className="about-div-p">Cost Efficiency</p>
                                <p>A major reason many companies move to the cloud is to realize
                                    cost efficiencies that are impossible to match with on-premises
                                    dataCentres. We are expert in the AWS cost optimization pillar.
                                </p>

                                <p className="about-div-p">Streamlining Application Architecture</p>
                                <p>Your applications and platforms can benefit tremendously from moving
                                    away from monolithic architectures to loosely coupled microservices
                                    and containerization with kubernetes and Elastic Container
                                    service in AWS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="first-section">
                <div className='container first_section_div'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='consulting_div'>
                                <h1>Cloud <span> Consulting </span></h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                    It has survived not only five centuries,
                                    but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <br />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                    It has survived not only five centuries,
                                    but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <button className={'read_more_btn float-left mb-4'}>Contact Us</button>
                            </div>
                        </div>

                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='first_section_img_div'>
                                <img src={ConsultingImg} alt='about-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
};

export default About;
