import React from "react";
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel';
import Helmet from "react-helmet";
import "materialize-css/sass/materialize.scss";
import { withPrefix } from "gatsby";

export const CarouselComponent = ({ content, className }) => (
   
  //   <div className="slider">
  //        {content ? 
  //            <ul className="slides">
  //            <li>
  //              <img src={content.slideImg1} />
  //            </li>
  //            <li>
  //              <img src={content.slideImg2} />
  //            </li>
  //            <li>
  //              <img src={content.slideImg3} />
  //            </li>
  //            <li>
  //              <img src={content.slideImg4} />
  //            </li>
  //          </ul>
  //          :
  //          <ul></ul>}

  // </div>
  <div>
    <Helmet>
      <html lang="en" />
      <meta name="keywords" content="montreal, javascript, programming, meetup" />
      {/* <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}
      <script type="text/javascript" src={withPrefix('js/jquery.js')} />
      <script type="text/javascript" src={withPrefix('js/materialize.js')} />
      <script src={withPrefix('js/primily.js')} type="text/javascript" />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </link> */}
    </Helmet>
  <div className="carousel carousel-slider center">
  <div className="carousel-item blue white-text" href="#one!">
    <h2>First Panel</h2>
    <p className="white-text">This is your first panel</p>
  </div>
  <div className="carousel-item amber white-text" href="#two!">
    <h2>Second Panel</h2>
    <p className="white-text">This is your second panel</p>
  </div>
  <div className="carousel-item green white-text" href="#three!">
    <h2>Third Panel</h2>
    <p className="white-text">This is your third panel</p>
  </div>
  <div className="carousel-item red white-text" href="#four!">
    <h2>Fourth Panel</h2>
    <p className="white-text">This is your fourth panel</p>
  </div>
</div>
  </div>
);

// HTMLContent.propTypes = {
//   content: PropTypes.node,
//   className: PropTypes.string,
// };

export default CarouselComponent;
