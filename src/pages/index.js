import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";
import FeaturePageTemplate from '../templates/feature-page';
import DescribePageTemplate from '../templates/describe-page';
import PricingPageTemplate from '../templates/pricing-page';
import DemoPageTemplate from '../templates/demo-page';
import FAQPageTemplate from '../templates/frequntlyAskedQuestions-page';
import HomePageComponentTemplate from '../templates/home-page';
import Layout from "../components/Layout";
import CarouselComponent from "../components/carousel";
import { withPrefix } from "gatsby"
import "../styles/features.css";
import "materialize-css/sass/materialize.scss";

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <div className="row"></div>
      <div className="row">
        <div className="col s12 m12 l12">
          <div id="home" className="section scrollspy">
            <HomePageComponentTemplate page={home.appGalley} />
          </div>
          <div id="features" className="section scrollspy">
            <FeaturePageTemplate page={home} />
          </div>
          <div id="describe" className="section scrollspy">
            <DescribePageTemplate page={home} />
          </div>
          <div id="pricing" className="section scrollspy">
            <PricingPageTemplate page={home.pricing} />
          </div>
          <div id="demo" className="section scrollspy">
            <DemoPageTemplate page={home.demo} />
          </div>
          <div id="faq" className="section scrollspy">
          <FAQPageTemplate page={home.faq} />
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
      data: { navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
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
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src={withPrefix('js/primily.js')} type="text/javascript" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
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
            feature {
              featureBody {
                icon
                head
                description
              }
            }
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
                icon
                head
                description
              }
            }
            appGalley {
              appGalleryHead
              sliderImages {
                slideImg
              }
            }
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
            demo {
              demoHead
              description
              demoImages {
                src1
                src2
              }
            }
            faq {
              faqHead
              questionsAndAns {
                question
                answer
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
