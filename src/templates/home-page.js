import React from "react";
import "materialize-css/sass/materialize.scss";
import CarouselComponent from "../components/carousel";

export const HomePageComponentTemplate = props => {
  const { page } = props;

  return (
    <div>
     <CarouselComponent content={page.appGalley.sliderImages} />
     <div className="row"><div className="col s12"><br></br></div></div>
     <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
};

export default HomePageComponentTemplate;

