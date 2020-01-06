import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";
import FeaturePageTemplate from '../templates/feature-page';
import DescribePageTemplate from '../site-templates/describe-page';
import PricingPageTemplate from '../site-templates/pricing-page';
import DemoPageTemplate from '../site-templates/demo-page';
// import FAQPageTemplate from '../templates/frequntlyAskedQuestions-page';
import HomePageComponentTemplate from '../site-templates/home-page';
import Layout from "../components/Layout";
import CarouselComponent from "../components/carousel";
import { withPrefix } from "gatsby"
import "../styles/features.css";
import "materialize-css/sass/materialize.scss";

export const HomePageTemplate = ({ home, describe, pricing, demo }) => {
  return (
    <>
      <div className="row"></div>
      <div className="row">
        <div className="col s12 m12 l12">
          <div id="home" className="section scrollspy">
            <HomePageComponentTemplate page={home.home} />
          </div>
          <div id="features" className="section scrollspy">
            {/* <FeaturePageTemplate feature={feature.feature} /> */}
          </div>
          <div id="describe" className="section scrollspy">
            <DescribePageTemplate describe={describe} />
          </div>
          <div id="pricing" className="section scrollspy">
            <PricingPageTemplate pricing={pricing.pricing} />
          </div>
          <div id="demo" className="section scrollspy">
            <DemoPageTemplate demo={demo.demo} />
          </div>
          {/* <div id="faq" className="section scrollspy">
            <FAQPageTemplate faq={faq} />
          </div> */}
        </div>
      </div>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    // const { frontmatter: feature } = data.featureData.edges[0].node;
    const { frontmatter: describe } = data.describeData.edges[0].node;
    const { frontmatter: pricing } = data.pricingData.edges[0].node;
    const { frontmatter: demo } = data.demoData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    console.log(data.homePageData.edges[0].node)
    // let upcomingMeetup = null;
    // Find the next meetup that is closest to today
    // data.allMarkdownRemark.edges.every(item => {
    //   const { frontmatter: meetup } = item.node;
    //   if (isAfter(meetup.rawDate, new Date())) {
    //     upcomingMeetup = meetup;
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    return (
      <Layout navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} describe={describe} pricing={pricing} demo={demo} />
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
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            home {
              sliderImages {
                imagesrc
                imagealt
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
    describeData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "describe-page" } } }) {
      edges {
        node {
          frontmatter {
            describe {
              cards {
                icon
                head
                description
                image
              }
              video {
                src
              }
            }
            description {
              mainImage
              playstoreImage
              cardHead
              description
              cards {
                descriptionlist {
                  icon
                  head
                  description
                }
              }
            }
            appGalley {
              appGalleryHead
              sliderImages {
                slideImg
              }
            }
          }
        }
      }
    }
    pricingData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "pricing-page" } } }) {
      edges {
        node {
          frontmatter {
            pricing {
              pricingHead
              description1
              description2
              ticImage
              priceBox1 {
                head
                head2
                description
                featureList {
                  list
                }
                price
              }
              priceBox2 {
                head
                head2
                description
                featureList {
                  list
                }
                price
              }
            }
          }
        }
      }
    }
    demoData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "demo-page" } } }) {
      edges {
        node {
          frontmatter {
            demo {
              demoHead
              description
              demoImages {
                src1
                src2
              }
            }
          }
        }
      }
    }
  }
`;
