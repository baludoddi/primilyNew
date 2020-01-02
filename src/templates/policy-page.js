import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const PolicyPageTemplate = props => {
  const { page } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3 className="grey-dark">{page.frontmatter.title}</h3>
        </div>
        
        <div className="col s12">
        
        </div>
        <div className="col s12">
          <p className="grey-light">{page.frontmatter.policyDescription}</p>
        </div>
      </div>
    </div>
  );
};

const PolicyPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <PolicyPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

PolicyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PolicyPage;

export const policyPageQuery = graphql`
  query PolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        policyDescription
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;
