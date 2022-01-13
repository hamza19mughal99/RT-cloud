import React from 'react';
import {AiFillStar} from "react-icons/ai";
import lady from "../../../assets/lady.png";
import Men1 from "../../../assets/men1.png";
import Men2 from "../../../assets/men2.png";
import "./Testimonials.css";


const Testimonials = () => {

    const testimonialsData = [
        {
            id: 1,
            className: "testimonials_div",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            personImg:  lady,
            personName: "Jeni B.",
            position: "Homeland Financial Services",
            classDiv: "testimonials_div"
        },
        {
            id: 2,
            className: "testimonials_div",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            personImg:  Men1,
            personName: "Roberto",
            position: "Homeland Financial Services",
            classDiv: "testimonials2_div"
        },
        {
            id: 2,
            className: "testimonials_div",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            personImg:  Men2,
            personName: "Roberto",
            position: "Homeland Financial Services",
            classDiv: "testimonials3_div"
        },
    ]


    return (
        <React.Fragment>
            <h1 className='testimonial_h1'>Testimonials</h1>
            <div className="container">
                <div className="row">
                    {
                        testimonialsData.map((data, index) => {
                            return(
                                <div key={index} className="col-md-4 mb-4">
                                    <div className={data.classDiv}>
                                        <div>
                                            <p className="text-center">
                                                "{data.text}"
                                            </p>
                                            <div className="w-100 text-center">
                                                {
                                                    Array(...Array(5)).map( () => (
                                                        <AiFillStar className="star_icon"/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='testimonials_person_div'>
                                        <div className="testimonials_img">
                                            <img src={data.personImg} alt="lady-img"  />
                                        </div>
                                        <div>
                                            <h5>{data.personName}</h5>
                                            <p className="text-center"> {data.position} </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default Testimonials;
