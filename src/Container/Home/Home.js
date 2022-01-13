import React from 'react';
import "./Home.css";
import AboutUs from "../../assets/aboutUs.png";
import Cloud from "../../assets/cloud.png";
import Dollar from "../../assets/dollar.png";
import Light from "../../assets/light.png";
import Laptop from "../../assets/laptop.png";
import Screw from "../../assets/screw.png";
import Officer from "../../assets/officer.png";
import BandSafe from "../../assets/brand-safe.png";
import BigTeam from "../../assets/big-team.png";
import ColdBore from "../../assets/cold.png";
import Testimonials from "./Testimonials/Testimonials";
import Quote from "./Quote/Quote";
import {NavLink} from "react-router-dom";

const Home = () => {

    const serviceData = [
        {
            id: 1,
            img: Cloud,
            head: "Cloud Adoption",
            text: "The migration to AWS starts with a thorough analysis of your current environments."
        },
        {
            id: 2,
            img: Dollar,
            head: "Cost Optimization",
            text: "Following best practices for cost optimization we review your architecture to ensure your monthly AWS bill is no more than it needs to be."
        },
        {
            id: 3,
            img: Officer,
            head: "Infrastructure Management",
            text: "If management and monitoring of your infrastructure is what you need, we can help."
        },
        {
            id: 4,
            img: Light,
            head: "Devops Consulting",
            text: "With improved processes and tooling you need the support to bring it all together."
        },
        {
            id: 5,
            img: Screw,
            head: "Automated Deployment and Testing Pipelines",
            text: "Following best practices for cost optimization we review your architecture to ensure your monthly AWS bill is no more than it needs to be."
        },
        {
            id: 5,
            img: Laptop,
            head: "Application Modernization",
            text: "With the vast array of services offered in the cloud there are many opportunities to modernize your applications."
        },

    ]

    return (
        <React.Fragment>
            <div className="main-div">
                <div className="container">
                    <div className="row main-row-div">
                        <div className="col-md-5 row-div">
                            <h2 className={'mb-4'}>Take Control of Your Cloud Infrastructure</h2>
                            <p className={'mt-4'}> PilotCore helps startups and small to medium -
                                sized business harness the cloud's full power
                                through stable, reliable, secure, fast, infrastructure
                                -as-code (IaC) that is transparent and under your
                                control. We're your pilot in the cloud.</p>
                            <NavLink to={"/about-us"}> <button className={'get_started_btn'}>Get Started</button> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-section">
                <div className='container first_section_div'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='first_section_img_div'>
                                <img src={AboutUs} alt='about-img' />
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
                                    in Canadian cloud dataCentres.</p> <br />
                                <p className="about-div-p">Privacy</p>
                                <p>We have experience with the Personal Information Protection and
                                    Electronic Documents Act (PIPEDA), a compliance regime designed to
                                    protect the private data of Canadians.</p>
                                <NavLink to={"/about-us"}><button className={'read_more_btn float-right'}>Read More</button> </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_section">
                <h1>Our <span> Services </span></h1>
                <div className="container">
                    <div className="row">
                        {
                            serviceData.map((data, index) => {
                                return (
                                    <div key={index} className="col-md-4">
                                        <div className="service_section_div">
                                            <div className="mb-4 text-center">
                                                <img src={data.img} alt={'cloud-img'} />
                                            </div>
                                            <div>
                                                <h5 className="text-center">{data.head}</h5>
                                                <p className="text-center">{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="text-center mt-3">
                        <NavLink to={"/service"}>    <button className="read_more_btn">Talk to a Cloud Expert</button> </NavLink>
                    </div>

                </div>
            </div>
            <div className="third_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={"third_section_div"}>
                                <p >Choose PilotCore for our expertise, responsiveness, and attention to detail</p>
                                <p>Trusted by clients who want to ensure a smooth transition to the cloud.</p>
                            </div>
                            <div className="third_section_img d-flex">
                                <img src={BandSafe} alt={'band-safe'} />
                                <img src={ColdBore} alt={'band-safe'} />
                                <img src={BigTeam} alt={'band-safe'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth_section">
                <Testimonials />
            </div>
            <Quote />

        </React.Fragment>
    );
};

export default Home;
