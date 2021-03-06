import React from "react";
import "materialize-css/sass/materialize.scss";

export const PricingPageTemplate = ({pricing}) => {
  // console.log(pricing)
  return (
    <div>
    <div className="row"><div className="col s12"><br></br></div></div>
    <div className="row">
      <div className="col s12 center-align feature-items">
        <h4 className="pricing-h">{pricing.pricingHead}</h4>
        <p>{pricing.description1}
          <br></br>
          {pricing.description2}</p>
      </div>
      <div className="col s12"></div>

      <div className="col s2"></div>
      <div className="col s4 price-border">
        <div className="single_pricing wow fadeIn price" data-wow-duration="1.5s">
          <div className="top_text">
            <h5 className="pricing-head">{pricing.priceBox1.head}</h5>
            <br></br>
            <h6 className="pricing-sub-head">{pricing.priceBox1.head2}</h6>
            <p>{pricing.priceBox1.description}</p>
          </div>
          <ul>
          {pricing.priceBox1.featureList.map((list, index) => (
            <li key={index}><div className="row"><div className="col s12"><img src={pricing.ticImage} alt="" /><span className="price-list">{list.list}</span></div></div></li>
          ))}
          </ul>
          <br></br>
          <br></br>
          <div className="table_info">
            <div className="info_head_text">
              <h2>${pricing.priceBox1.price}</h2>
            </div>
            <a href="" className="waves-effect waves-light btn">sign up</a> <a href="" className="price-padding">Free Live Trial</a>
          </div>
        </div>
        <br></br>
      </div>
      <div className="col s0"></div>
      <div className="col s4 price-border-red">
        <div className="single_pricing economy_table wow fadeIn price" data-wow-duration="1.6s">
          <div className="top_text">
            <h5 className="pricing-head">{pricing.priceBox2.head}</h5>
            <br></br>
            <h6 className="pricing-sub-head"> {pricing.priceBox2.head2}</h6>
            <p>{pricing.priceBox2.description}</p>
          </div>
          <ul>
          {pricing.priceBox2.featureList.map((list, index) => (
            <li key={index}><div className="row"><div className="col s12"><img src={pricing.ticImage} alt="" /><span className="price-list">{list.list}</span></div></div></li>
          ))}
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <div className="table_info">
            <div className="info_head_text">
              <h2>${pricing.priceBox2.price}</h2>
            </div>
            <a href="" className="waves-effect waves-light btn">sign up</a> <a href="" className="price-padding">No monthly commitment.</a>
          </div>
        </div>
        <br></br>
      </div>
    </div>
    <div className="row"><div className="col s12"><br></br></div></div>
  </div>
  );
};

export default PricingPageTemplate;

