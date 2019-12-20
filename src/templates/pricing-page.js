import React from "react";
import "materialize-css/sass/materialize.scss";

export const PricingPageTemplate = props => {
  const { page } = props;

  return (
    <div>
    <div className="row"><div className="col s12"><br></br></div></div>
    <div className="row">
      <div className="col s12 center-align feature-items">
        <h4 className="pricing-h">{page.pricingHead}</h4>
        <p>{page.description1}
          <br></br>
          {page.description2}</p>
      </div>
      <div className="col s12"></div>

      <div className="col s2"></div>
      <div className="col s4 price-border">
        <div className="single_pricing wow fadeIn price" data-wow-duration="1.5s">
          <div className="top_text">
            <h5 className="pricing-head">{page.priceBox1.head}</h5>
            <br></br>
            <h6 className="pricing-sub-head">{page.priceBox1.head2}</h6>
            <p>{page.priceBox1.description}</p>
          </div>
          <ul>
            <li><img src={page.priceBox1.list.img} alt="" /><span className="price-list">{page.priceBox1.list.list1}</span></li>
            <br></br>
            <li><img src={page.priceBox1.list.img} alt="" /><span className="price-list">{page.priceBox1.list.list2}</span></li>
            <br></br>
            <li><img src={page.priceBox1.list.img} alt="" /><span className="price-list">{page.priceBox1.list.list3}</span></li>
            <br></br>
            <li><img src={page.priceBox1.list.img} alt="" /><span className="price-list">{page.priceBox1.list.list4}</span></li>
          </ul>
          <br></br>
          <br></br>
          <div className="table_info">
            <div className="info_head_text">
              <h2>${page.priceBox1.price}</h2>
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
            <h5 className="pricing-head">{page.priceBox2.head}</h5>
            <br></br>
            <h6 className="pricing-sub-head"> {page.priceBox2.head2}</h6>
            <p>{page.priceBox2.description}</p>
          </div>
          <ul>
            <li><img src={page.priceBox2.list.img} alt="" /><span className="price-list">{page.priceBox2.list.list4}</span></li>
            <br></br>
            <li><img src={page.priceBox2.list.img} alt="" /><span className="price-list">{page.priceBox2.list.list4}</span></li>
            <br></br>
            <li><img src={page.priceBox2.list.img} alt="" /><span className="price-list">{page.priceBox2.list.list4}</span></li>
            <br></br>
            <li><img src={page.priceBox2.list.img} alt="" /><span className="price-list">{page.priceBox2.list.list4}</span></li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <div className="table_info">
            <div className="info_head_text">
              <h2>${page.priceBox2.price}</h2>
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

