import React from 'react';
import CommonSection from "../CommonSection/CommonSection";
import Cloud from "../../assets/service1.png";
import Cost from "../../assets/service2.png";
import Infra from "../../assets/service3.png";
import Devops from "../../assets/service4.png";
import Automated from "../../assets/service5.png";
import App from "../../assets/service6.png";

import "./Service.css";

const Service = () => {

    const serviceData = [
        {
            id: 1,
            img1: Cloud,
            head1: "Cloud Adoption",
            text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img2: Cost,
            head2: "Cost Optimization",
            text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 2,
            img1: Infra,
            head1: "Infrastructure Management",
            text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img2: Devops,
            head2: "Devops Consulting",
            text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 3,
            img1: Automated,
            head1: "Automated Deployment and Testing Pipelines",
            text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img2: App,
            head2: "Application Modernization",
            text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]



    return (
        <React.Fragment>
            <CommonSection
                head="Our Services"
                text="<p class='text-center'>Our services include but are not limited to</p>"
                class_div="main_service_div"
            />
            <div className='container service_div'>
                <div className='row'>
                    {
                        serviceData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className='col-md-6'>
                                    <div className='service_img_div'>
                                        <img src={data.img1} alt={data.head1} />
                                    </div>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                    <div className='service_text_div'>
                                        <h1>
                                            {data.head1}
                                        </h1>
                                        <p>
                                            {data.text1}
                                        </p>
                                    </div>

                                </div>
                                {/* ------------------------------ */}
                                <div className='col-md-6 d-flex justify-content-center align-items-center mt-4'>
                                    <div className='service_text_div'>
                                        <h1>
                                            {data.head2}
                                        </h1>
                                        <p>
                                            {data.text2}
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6 mt-5 mb-5'>
                                    <div className='service_img_div'>
                                        <img src={data.img2} alt={data.head2} />
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }

                    <div className='col-md-6'>
                        <div className='service_img_div'>
                            <img src={Cloud} alt={'cloud'} />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <div className='service_text_div'>
                            <h1>
                                Add an additional service called Cloud Training
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;
