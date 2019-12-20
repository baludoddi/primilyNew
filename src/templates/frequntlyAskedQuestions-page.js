import React from "react";
import "materialize-css/sass/materialize.scss";

export const FAQPageTemplate = props => {
    const { page } = props;

    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <span className="card-title center-align feature-items"><h5>Frequently Asked Questions</h5></span>
                    <ul className="collapsible">
                        {page.questionsAndAns.map((qanda, index) => (
                            <li key={index}>
                                <div className="collapsible-header grey-dark"><i className="material-icons">question_answer</i>{qanda.question}</div>
                                <div className="collapsible-body grey-light"><span>{qanda.answer}</span></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQPageTemplate;

