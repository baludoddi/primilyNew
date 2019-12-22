import React from "react";
import "materialize-css/sass/materialize.scss";

export const DescribePageTemplate = props => {
  const { page } = props;

  return (
    <div>
      <div className="grey lighten-4">
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>

        <div className="container">

          <div className="row">
            {/* <div className="col s4">
              <div className="feature-items">
                <h5 className="center-align">{page.describe.cards.card1.head}</h5>
                <p>{page.describe.cards.card1.description}</p>
                <div className="row"><div className="col s12"><br></br></div></div>
                <img className="responsive-img" src={page.describe.image.src} />
                <div className="row"><div className="col s12"><br></br></div></div>
                <h5 className="center-align">{page.describe.cards.card2.head}</h5>
                <p>{page.describe.cards.card2.description}</p>
              </div>
            </div> */}
            {/* <div className="col s4"> */}
              {/* <div className="row">
                <div className="col s1"><i className="Large material-icons">{page.describe.cards.card3.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{page.describe.cards.card3.head}</h5>
                    <p>{page.describe.cards.card3.description}</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="row"><div className="col s12"><br></br></div></div> */}

              
              {/* {page.describe.cards.map((card, index) => (
                <div className="col s4" key={index}>
                  <div children="row"> 
                <div className="col s1"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
                {card.image ? <div className="col s12"><img src={card.image} className="responsive-img"/></div> : <div></div>}
                </div>
                </div>
              ))} */}
              

            {/* </div> */}
            {/* <div className="col s4">
              <div className="row">
                <div className="col s1"><i className="Large material-icons">{page.describe.cards.card5.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{page.describe.cards.card5.head}</h5>
                    <p>{page.describe.cards.card5.description}</p>
                  </div>
                </div>
              </div>
              <div className="row"><div className="col s12"><br></br></div></div>
              <div className="row">
                <div className="col s1"><i className="Large material-icons">{page.describe.cards.card6.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{page.describe.cards.card6.head}</h5>
                    <p>{page.describe.cards.card6.description}</p>
                  </div>
                </div>
              </div>
              <div className="row"><div className="col s12"><br></br></div></div>
              <div className="row">
                <div className="col s1"><i className="Large material-icons">{page.describe.cards.card7.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{page.describe.cards.card7.head}</h5>
                    <p>{page.describe.cards.card7.description}</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>
          {/* <div className="row"><div className="col s12"></div>SPACER 1V</div>
  <div className="row"><div className="col s12"></div>SPACER 2V</div>
  <div className="row"><div className="col s12"></div>SPACER 3V</div>
  <div className="row"><div className="col s12"></div>SPACER 4V</div>*/}

          <div className="row">
            <div className="col s1"></div>
            <div className="col s10">

              <div className="video-container">
                <iframe width="853" height="480" src={page.describe.video.src} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col s1">
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>



      <div className="container">
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row">
          <div className="col s4 center-align">
            <img src={page.description.mainImage} className="responsive-img" alt="" />
            <div className="row"><div className="col s12"></div></div>
            <img src={page.description.playstoreImage} className="responsive-img" height="67"
              width="232" />
          </div>
          <div className="col s2"></div>
          <div className="col s6">
            <div className="feature-items">
              <h4 className="description-font">{page.description.cardHead}</h4>
              <p>{page.description.description}</p>
              <div className="row"></div>
              <div className="row"></div>
              {page.description.cards.map((card, index) => (
              <div className="row" key={index}>
                <div className="col s1"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5>{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>


  <div className="container-fluid grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12"><h3 className="center-align grey-text h-style">{page.appGalley.appGalleryHead}</h3></div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="carousel carousel-slider center">
            {page.appGalley.sliderImages.map((slides, index) => (
              
              <div className="carousel-item" href="#one!" key={index}><div className="row">
                  <div className="col s4"></div>
                  <div className="col s4">
                    <img src={slides.slideImg} />
                  </div>
              </div>
              </div>
            ))}
            </div>
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>
        </div>
      </div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
};

export default DescribePageTemplate;

