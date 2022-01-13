import React from 'react';
import "./CommonSection.css";

const CommonSection = (props) => {
    return (
        <React.Fragment>
            <div className={props.class_div}>
                <div className="common_div">
                    <div>
                        <h1>{props.head}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: props.text}}/>
                </div>
            </div>

        </React.Fragment>
    );
};

export default CommonSection;
