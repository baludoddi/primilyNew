import React from "react";
import "materialize-css/sass/materialize.scss";

export const DemoPageTemplate = props => {
  const { page } = props;

  return (
    <div>

    <div className="container">
      <div className="row">
        <div className="col s12 feature-items center-align">
          <h5>{page.demoHead}</h5>
          <p>{page.description}</p>
        </div>
        <div className="col s3"></div>
        <div className="col s3"><img src={page.demoImages.src1} alt="" /></div>
        <div className="col s0"></div>
        <div className="col s3"><img src={page.demoImages.src2} alt="" /></div>
        <div className="col s3"></div>
      </div>
      <br></br>

    </div>
  </div>
  );
};

export default DemoPageTemplate;

