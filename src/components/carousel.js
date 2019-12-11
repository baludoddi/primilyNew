import React from "react";
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel'

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

  <div class="carousel carousel-slider center">
  <div class="carousel-item blue white-text" href="#one!">
    <h2>First Panel</h2>
    <p class="white-text">This is your first panel</p>
  </div>
  <div class="carousel-item amber white-text" href="#two!">
    <h2>Second Panel</h2>
    <p class="white-text">This is your second panel</p>
  </div>
  <div class="carousel-item green white-text" href="#three!">
    <h2>Third Panel</h2>
    <p class="white-text">This is your third panel</p>
  </div>
  <div class="carousel-item red white-text" href="#four!">
    <h2>Fourth Panel</h2>
    <p class="white-text">This is your fourth panel</p>
  </div>
</div>
);

// HTMLContent.propTypes = {
//   content: PropTypes.node,
//   className: PropTypes.string,
// };

export default CarouselComponent;
