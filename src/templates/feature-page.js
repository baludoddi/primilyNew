import React from "react";
import "materialize-css/sass/materialize.scss";

export const FeaturePageTemplate = props => {
  const { page } = props;

  return (
    <div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="container">
        <div className="row">
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon1.icon}</i>
                </div>
              </div>
              <h5 className="">{page.featureIcon1.head}</h5>
              <p>{page.featureIcon1.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon2.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon2.head}</h5>
              <p>{page.featureIcon2.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon3.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon3.head}</h5>
              <p>{page.featureIcon3.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon4.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon4.head}</h5>
              <p>{page.featureIcon4.description}</p>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon5.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon5.head}</h5>
              <p>{page.featureIcon5.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon6.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon6.head}</h5>
              <p>{page.featureIcon6.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon7.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon7.head}</h5>
              <p>{page.featureIcon7.description}</p>
            </div>
          </div>
          <div className="col s3">
            <div className="center-align feature-items">
              <div className="row">
                <div className="col s4"></div>
                <div className="col s3">
                  <i className="Large material-iconss">{page.featureIcon8.icon}</i>
                </div>
              </div>
              <h5>{page.featureIcon8.head}</h5>
              <p>{page.featureIcon8.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
};

export default FeaturePageTemplate;

