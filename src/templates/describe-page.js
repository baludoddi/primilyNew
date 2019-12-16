import React from "react";
import "materialize-css/sass/materialize.scss";

export const DescribePageTemplate = props => {
  const { page } = props;

  return (
    <div>
                  <div className="grey lighten-4">

{/*<div className="row"><div className="col s12"></div>SPACER 1D</div>
<div className="row"><div className="col s12"></div>SPACER 2D</div>*/}
<div className="row"><div className="col s12"></div></div>
<div className="row"><div className="col s12"></div></div>

<div className="container">

  <div className="row">
    <div className="col s4">
      <div className="feature-items">
        <h5 className="center-align">{page.describe.cards.card1.head}</h5>
        <p>{page.describe.cards.card1.description}</p>
        <img className="responsive-img" src={page.describe.image.src} />
        <h5 className="center-align">{page.describe.cards.card2.head}</h5>
        <p>{page.describe.cards.card2.description}</p>
      </div>
    </div>
    <div className="col s4">
      <div className="row">
        <div className="col s1"><i className="Large material-icons">{page.describe.cards.card3.icon}</i></div>
        <div className="col s11">
          <div className="feature-items">
            <h5 className="center-align">{page.describe.cards.card3.head}</h5>
            <p>{page.describe.cards.card3.description}</p>
          </div>
        </div>
      </div>
      {/*<div className="row">SP1</div>
      <div className="row">SP2</div>
      <div className="row">SP3</div>*/}

      <div className="row">
        <div className="col s1"><i className="Large material-icons">{page.describe.cards.card4.icon}</i></div>
        <div className="col s11">
          <div className="feature-items">
            <h5 className="center-align">{page.describe.cards.card4.head}</h5>
            <p>{page.describe.cards.card4.description}</p>
          </div>
        </div>
      </div>

    </div>
    <div className="col s4">
      <div className="row">
        <div className="col s1"><i className="Large material-icons">{page.describe.cards.card5.icon}</i></div>
        <div className="col s11">
          <div className="feature-items">
            <h5 className="center-align">{page.describe.cards.card5.head}</h5>
            <p>{page.describe.cards.card5.description}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s1"><i className="Large material-icons">{page.describe.cards.card6.icon}</i></div>
        <div className="col s11">
          <div className="feature-items">
            <h5 className="center-align">{page.describe.cards.card6.head}</h5>
            <p>{page.describe.cards.card6.description}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s1"><i className="Large material-icons">{page.describe.cards.card7.icon}</i></div>
        <div className="col s11">
          <div className="feature-items">
            <h5 className="center-align">{page.describe.cards.card7.head}</h5>
            <p>{page.describe.cards.card7.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
{/*<div className="row"><div className="col s12"></div>SPACER 1VV</div>
<div className="row"><div className="col s12"></div>SPACER 2VV</div>*/}
<div className="row"><div className="col s12"></div></div>
<div className="row"><div className="col s12"></div></div>
</div>



<div className="container">
            <div className="row">
              <div className="col s4 center-align">
                <img src={page.description.mainImage} className="responsive-img" alt="" />
                <img src={page.description.playstoreImage} className="responsive-img" height="67"
                  width="232" />
              </div>
              <div className="col s2"></div>
              <div className="col s6">
                <div className="feature-items">
                  <h4 className="description-font">{page.description.card.cardHead}</h4>
                  <p>{page.description.card.description}</p>
                  <div className="row"></div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{page.description.card.subCards.subCard1.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{page.description.card.subCards.subCard1.head}</h5>
                        <p>{page.description.card.subCards.subCard1.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{page.description.card.subCards.subCard2.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{page.description.card.subCards.subCard2.head}</h5>
                        <p>{page.description.card.subCards.subCard2.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{page.description.card.subCards.subCard3.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{page.description.card.subCards.subCard3.head}</h5>
                        <p>{page.description.card.subCards.subCard3.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{page.description.card.subCards.subCard4.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{page.description.card.subCards.subCard4.head}</h5>
                        <p>{page.description.card.subCards.subCard4.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="container grey lighten-4">
            <div className="row">
              <div className="col s12"><h3 className="center-align grey-text h-style">{page.appGalley.appHead}</h3></div>
            </div>
            <div className="row">
              <div className="col s12">
              {/* <div className="col s4 center-align">
                <div className="slider">
                  <ul className="slides">
                    <li>
                      <img src={page.appGalley.sliderImages.slideImg1} />
                    </li>
                    <li>
                      <img src={page.appGalley.sliderImages.slideImg2} />
                    </li>
                    <li>
                      <img src={page.appGalley.sliderImages.slideImg3} />
                    </li>
                    <li>
                      <img src={page.appGalley.sliderImages.slideImg4} />
                    </li>
                  </ul>
                </div>
              </div> */}
                <div className="carousel carousel-slider center">
                    <div className="carousel-item" href="#one!"><div className="row">
                      <div className="col s4">
                        <img src={page.appGalley.sliderImages.slideImg4} />
                      </div>
                      <div className="col s4">
                        <img src={page.appGalley.sliderImages.slideImg4} />
                      </div>
                      <div className="col s4">
                        <img src={page.appGalley.sliderImages.slideImg4} />
                      </div>
                    </div>
                </div>

                <div className="carousel-item" href="#two!">
                  <div className="row">
                    <div className="col s4">
                      <img src={page.appGalley.sliderImages.slideImg4}/>
                    </div>
                    <div className="col s4">
                      <img src={page.appGalley.sliderImages.slideImg4}/>
                    </div>
                    <div className="col s4">
                      <img src={page.appGalley.sliderImages.slideImg4}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="row"><div className="col s12"></div></div>
              {/*<div className="row"><div className="col s12"></div></div>*/}
          </div>
        </div>
    </div>
  );
};

export default DescribePageTemplate;

