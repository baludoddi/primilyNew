import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const ContactPageTemplate = props => {
  const { page } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3 className="grey-dark">{page.frontmatter.title}</h3>
        </div>
        <div className="col s6">
          <p className="grey-light">{page.frontmatter.contactDescription}</p>
        </div>
        <div className="col s1">
        
        </div>
        <div className="col s5">
          <img className="responsive-img" src={page.frontmatter.contactGallery.image} alt={page.frontmatter.contactGallery.imageAlt} />
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ data }) => {
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
      <ContactPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query contactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        contactDescription
        contactGallery {
          image
          imageAlt
        }
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
