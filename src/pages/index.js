import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
//import isAfter from "date-fns/is_after";
import Feature from '../templates/feature-page';
import Describe from '../templates/describe-page';
import Video from '../templates/video-page';
import Description from '../templates/description-page';
import Appgallery from '../templates/appgallery-page';
import Pricing from '../templates/pricing-page';
import Demo from '../templates/demo-page';
//import BlogRoll from '../templates/blog-page';
import Home from '../templates/home-page';
import Layout from "../components/Layout";

export const HomePageTemplate = ({ home }) => {
  return (
    <div>
      <div className="row"></div>
      <div className="row">
        <div className="col s12 m12 l12">
          <div id="home" className="section scrollspy">
            <Home />
          </div>
          <div id="features" className="section scrollspy">
            <Feature />
          </div>
          <div id="describe" className="section scrollspy">
            <Describe />
          </div>
          <div id="video" className="section scrollspy">
            <Video />
          </div>
          <div id="description" className="section scrollspy">
            <Description />
          </div>
          <div id="appgallery" className="section scrollspy">
            <Appgallery />
          </div>
          <div id="pricing" className="section scrollspy">
            <Pricing />
          </div>
          <div id="demo" className="section scrollspy">
            <Demo />
          </div>
        </div>
      </div>
    </div>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    // const { frontmatter: feature } = data.featureData.edges[0].node;
    // const { frontmatter: describe } = data.describeData.edges[0].node;
    // const { frontmatter: pricing } = data.pricingData.edges[0].node;
    // const { frontmatter: demo } = data.demoData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    // console.log(data.homePageData.edges[0].node)

    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate />
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
