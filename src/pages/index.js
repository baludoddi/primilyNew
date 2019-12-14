import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";

import Layout from "../components/Layout";
//import Map from "../components/Map";
//import HeadshotPlaceholder from "../img/headshot-placeholder.svg";
//import CustomLink from "../components/CustomLink";
import CarouselComponent from "../components/carousel";
import "../styles/features.css";


//export const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
export const HomePageTemplate = ({ home }) => {
  //const presenters = upcomingMeetup && upcomingMeetup.presenters;
  //const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLatitude);
  //const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLongitude);

  return (
    <>
      {/*<p>CAROUSEL SECTION</p>*/}

      <div className="row"></div>
      <div className="row">
        <div className="col s12 m12 l12">

          <div id="home" className="section scrollspy">
            <CarouselComponent content={home.appGalley.sliderImages} />
          </div>

          <div id="features" className="section scrollspy">
            {/*<p>ID FEATURES SECTION MARKER</p>
            *<div className="row">SP1-C</div>*/}
            <div className="row"></div>

            <div className="container">

              <div className="row">
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon1.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon1.head}</h5>
                    <p>{home.feature.featureIcon1.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon2.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon2.head}</h5>
                    <p>{home.feature.featureIcon2.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon3.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon3.head}</h5>
                    <p>{home.feature.featureIcon3.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon4.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon4.head}</h5>
                    <p>{home.feature.featureIcon4.description}</p>
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
                        <i className="Large material-iconss">{home.feature.featureIcon5.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon5.head}</h5>
                    <p>{home.feature.featureIcon5.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon6.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon6.head}</h5>
                    <p>{home.feature.featureIcon6.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon7.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon7.head}</h5>
                    <p>{home.feature.featureIcon7.description}</p>
                  </div>
                </div>
                <div className="col s3">
                  <div className="center-align feature-items">
                    <div className="row">
                      <div className="col s4"></div>
                      <div className="col s3">
                        <i className="Large material-iconss">{home.feature.featureIcon8.icon}</i>
                      </div>
                    </div>
                    <h5>{home.feature.featureIcon8.head}</h5>
                    <p>{home.feature.featureIcon8.description}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">SP1</div>
              <div className="row">SP2</div>*/}
          </div>

          <div id="describe" className="section scrollspy">
            {/*<p>ID DESCRIBE SECTION MARKER</p>*/}
            <div className="grey lighten-4">

              {/*<div className="row"><div className="col s12"></div>SPACER 1D</div>
              <div className="row"><div className="col s12"></div>SPACER 2D</div>*/}
              <div className="row"><div className="col s12"></div></div>
              <div className="row"><div className="col s12"></div></div>

              <div className="container">

                <div className="row">
                  <div className="col s4">
                    <div className="feature-items">
                      <h5 className="center-align">{home.describe.cards.card1.head}</h5>
                      <p>{home.describe.cards.card1.description}</p>
                      <img className="responsive-img" src={home.describe.image.src} />
                      <h5 className="center-align">{home.describe.cards.card2.head}</h5>
                      <p>{home.describe.cards.card2.description}</p>
                    </div>
                  </div>
                  <div className="col s4">
                    <div className="row">
                      <div className="col s1"><i className="Large material-icons">{home.describe.cards.card3.icon}</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                          <h5 className="center-align">{home.describe.cards.card3.head}</h5>
                          <p>{home.describe.cards.card3.description}</p>
                        </div>
                      </div>
                    </div>
                    {/*<div className="row">SP1</div>
                    <div className="row">SP2</div>
                    <div className="row">SP3</div>*/}

                    <div className="row">
                      <div className="col s1"><i className="Large material-icons">{home.describe.cards.card4.icon}</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                          <h5 className="center-align">{home.describe.cards.card4.head}</h5>
                          <p>{home.describe.cards.card4.description}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col s4">
                    <div className="row">
                      <div className="col s1"><i className="Large material-icons">{home.describe.cards.card5.icon}</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                          <h5 className="center-align">{home.describe.cards.card5.head}</h5>
                          <p>{home.describe.cards.card5.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s1"><i className="Large material-icons">{home.describe.cards.card6.icon}</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                          <h5 className="center-align">{home.describe.cards.card6.head}</h5>
                          <p>{home.describe.cards.card6.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s1"><i className="Large material-icons">{home.describe.cards.card7.icon}</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                          <h5 className="center-align">{home.describe.cards.card7.head}</h5>
                          <p>{home.describe.cards.card7.description}</p>
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
                      <iframe width="853" height="480" src={home.describe.video.src} frameBorder="0" allowFullScreen></iframe>
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
          </div>
        </div>

        <div id="description" className="section scrollspy">
          {/*<p>ID DESCRIPTION SECTION MARKER</p>*/}

          <div className="container">
            <div className="row">
              <div className="col s4 center-align">
                <img src={home.description.mainImage} className="responsive-img" alt="" />
                <img src={home.description.playstoreImage} className="responsive-img" height="67"
                  width="232" />
              </div>
              <div className="col s2"></div>
              <div className="col s6">
                <div className="feature-items">
                  <h4 className="description-font">{home.description.card.cardHead}</h4>
                  <p>{home.description.card.description}</p>
                  <div className="row"></div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{home.description.card.subCards.subCard1.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{home.description.card.subCards.subCard1.head}</h5>
                        <p>{home.description.card.subCards.subCard1.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{home.description.card.subCards.subCard2.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{home.description.card.subCards.subCard2.head}</h5>
                        <p>{home.description.card.subCards.subCard2.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{home.description.card.subCards.subCard3.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{home.description.card.subCards.subCard3.head}</h5>
                        <p>{home.description.card.subCards.subCard3.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1"><i className="Large material-icons">{home.description.card.subCards.subCard4.icon}</i></div>
                    <div className="col s11">
                      <div className="feature-items">
                        <h5>{home.description.card.subCards.subCard4.head}</h5>
                        <p>{home.description.card.subCards.subCard4.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="appgallery" className="section scrollspy grey lighten-4">
          {/*<p>ID APPGALLERY SECTION MARKER</p>*/}

          <div className="container">
            <div className="row">
              <div className="col s12"><h3 className="center-align grey-text h-style">{home.appGalley.appHead}</h3></div>
            </div>
            <div className="row">
              <div className="col s12">
              {/* <div className="col s4 center-align">
                <div className="slider">
                  <ul className="slides">
                    <li>
                      <img src={home.appGalley.sliderImages.slideImg1} />
                    </li>
                    <li>
                      <img src={home.appGalley.sliderImages.slideImg2} />
                    </li>
                    <li>
                      <img src={home.appGalley.sliderImages.slideImg3} />
                    </li>
                    <li>
                      <img src={home.appGalley.sliderImages.slideImg4} />
                    </li>
                  </ul>
                </div>
              </div> */}
                <div className="carousel carousel-slider center">
                    <div className="carousel-item" href="#one!"><div className="row">
                      <div className="col s4">
                        <img src={home.appGalley.sliderImages.slideImg4} />
                      </div>
                      <div className="col s4">
                        <img src={home.appGalley.sliderImages.slideImg4} />
                      </div>
                      <div className="col s4">
                        <img src={home.appGalley.sliderImages.slideImg4} />
                      </div>
                    </div>
                </div>

                <div className="carousel-item" href="#two!">
                  <div className="row">
                    <div className="col s4">
                      <img src={home.appGalley.sliderImages.slideImg4}/>
                    </div>
                    <div className="col s4">
                      <img src={home.appGalley.sliderImages.slideImg4}/>
                    </div>
                    <div className="col s4">
                      <img src={home.appGalley.sliderImages.slideImg4}/>
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

        <div id="pricing" className="section scrollspy">
          {/*<p>ID PRICING SECTION MARKER</p>*/}
          <div>
            <br></br>
            <div className="row">
              <div className="col s12 center-align feature-items">
                <h4 className="pricing-h">{home.pricing.pricingHead}</h4>
                <p>{home.pricing.description1}
                  <br></br>
                  {home.pricing.description2}</p>
              </div>
              <div className="col s12"></div>

              <div className="col s2"></div>
              <div className="col s4 price-border">
                <div className="single_pricing wow fadeIn price" data-wow-duration="1.5s">
                  <div className="top_text">
                    <h5 className="pricing-head">{home.pricing.priceBox1.head}</h5>
                    <br></br>
                    <h6 className="pricing-sub-head">{home.pricing.priceBox1.head2}</h6>
                    <p>{home.pricing.priceBox1.description}</p>
                  </div>
                  <ul>
                    <li><img src={home.pricing.priceBox1.list.img} alt="" /><span className="price-list">{home.pricing.priceBox1.list.list1}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox1.list.img} alt="" /><span className="price-list">{home.pricing.priceBox1.list.list2}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox1.list.img} alt="" /><span className="price-list">{home.pricing.priceBox1.list.list3}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox1.list.img} alt="" /><span className="price-list">{home.pricing.priceBox1.list.list4}</span></li>
                  </ul>
                  <br></br>
                  <br></br>
                  <div className="table_info">
                    <div className="info_head_text">
                      <h2>${home.pricing.priceBox1.price}</h2>
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
                    <h5 className="pricing-head">{home.pricing.priceBox2.head}</h5>
                    <br></br>
                    <h6 className="pricing-sub-head"> {home.pricing.priceBox2.head2}</h6>
                    <p>{home.pricing.priceBox2.description}</p>
                  </div>
                  <ul>
                    <li><img src={home.pricing.priceBox2.list.img} alt="" /><span className="price-list">{home.pricing.priceBox2.list.list4}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox2.list.img} alt="" /><span className="price-list">{home.pricing.priceBox2.list.list4}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox2.list.img} alt="" /><span className="price-list">{home.pricing.priceBox2.list.list4}</span></li>
                    <br></br>
                    <li><img src={home.pricing.priceBox2.list.img} alt="" /><span className="price-list">{home.pricing.priceBox2.list.list4}</span></li>
                  </ul>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="table_info">
                    <div className="info_head_text">
                      <h2>${home.pricing.priceBox2.price}</h2>
                    </div>
                    <a href="" className="waves-effect waves-light btn">sign up</a> <a href="" className="price-padding">No monthly commitment.</a>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <br/>
            {/*<p>ID FOOTER SECTION MARKER</p>*/}
            <div className="container">
              <div className="row">
                <div className="col s12 feature-items center-align">
                  <h5>{home.demo.demoHead}</h5>
                  <p>{home.demo.description}</p>
                </div>
                {/*<div className="col s3"></div>
                <div className="col s3"><img src={home.demo.demoImages.src1} alt="" />SRC1</div>
                <div className="col s0"></div>
                <div className="col s3"><img src={home.demo.demoImages.src2} alt="" />SRC2</div>
                <div className="col s3"></div>*/}
              </div>
              <br></br>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    let upcomingMeetup = null;
    // Find the next meetup that is closest to today
    data.allMarkdownRemark.edges.every(item => {
      const { frontmatter: meetup } = item.node;
      if (isAfter(meetup.rawDate, new Date())) {
        upcomingMeetup = meetup;
        return true;
      } else {
        return false;
      }
    });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} upcomingMeetup={upcomingMeetup} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
            }
            location {
              mapsLatitude
              mapsLongitude
              mapsLink
              name
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            headerImage {
              image
              imageAlt
            }
            feature {
              featureIcon1 {
                icon
                head
                description
              }
              featureIcon2 {
                icon
                head
                description
              }
              featureIcon3 {
                icon
                head
                description
              }
              featureIcon4 {
                icon
                head
                description
              }
              featureIcon5 {
                icon
                head
                description
              }
              featureIcon6 {
                icon
                head
                description
              }
              featureIcon7 {
                icon
                head
                description
              }
              featureIcon8 {
                icon
                head
                description
              }
            }
            describe {
              cards {
                card1 {
                  head
                  description
                }
                card2 {
                  head
                  description
                }
                card3 {
                  icon
                  head
                  description
                }
                card4 {
                  icon
                  head
                  description
                }
                card5 {
                  icon
                  head
                  description
                }
                card6 {
                  icon
                  head
                  description
                }
                card7 {
                  icon
                  head
                  description
                }
              }
              image {
                src
              }
              video {
                src
              }
            }
            description {
              mainImage
              playstoreImage
              card {
                cardHead
                description
                subCards {
                  subCard1 {
                    icon
                    head
                    description
                  }
                  subCard2 {
                    icon
                    head
                    description
                  }
                  subCard3 {
                    icon
                    head
                    description
                  }
                  subCard4 {
                    icon
                    head
                    description
                  }
                }
              }
            }
            appGalley {
              appHead
              sliderImages {
                slideImg1
                slideImg2
                slideImg3
                slideImg4
              }
            }
            pricing {
              pricingHead
              description1
              description2
              priceBox1 {
                head
                head2
                description
                list {
                  img
                  list1
                  list2
                  list3
                  list4
                }
                price
              }
              priceBox2 {
                head
                head2
                description
                list {
                  img
                  list1
                  list2
                  list3
                  list4
                }
                price
              }
            }
            demo {
              demoHead
              description
              demoImages {
                src1
                src2
              }
            }
            upcomingMeetupHeading
            noUpcomingMeetupText
            mapsNote
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
