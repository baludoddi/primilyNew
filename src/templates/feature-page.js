// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import ReactMarkdown from "react-markdown";
// import Helmet from "react-helmet";

// import Layout from "../components/Layout";
// import HTMLContent from "../components/Content";
// import "../styles/about-page.scss";

// export const FeaturePageTemplate = props => {
//   const { page } = props;

//   return (
//     <div>
//     <article className="about">
//       <div className="about-container  container">
//         <section className="about-header">
//           <div className="about-titleWrapper">
//             <h1 className="about-title">{page.frontmatter.title}</h1>
//           </div>
//           <div className="about-imageWrapper">
//             <img src={page.frontmatter.mainImage.image} alt={page.frontmatter.mainImage.imageAlt} />
//           </div>
//         </section>
//         <section className="section">
//           {/* The page.html is actually markdown when viewing the page from the netlify CMS,
//               so we must use the ReactMarkdown component to parse the markdown in that case  */}
//           {page.bodyIsMarkdown ? (
//             <ReactMarkdown className="about-description" source={page.html} />
//           ) : (
//             <HTMLContent className="about-description" content={page.html} />
//           )}
//           <ul className="about-gallery  galleryList">
//             {page.frontmatter.gallery.map((galleryImage, index) => (
//               <li key={index} className="galleryList-item">
//                 <img src={galleryImage.image} alt={galleryImage.imageAlt} />
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//       <section className="section  developerGroups  about-developerGroups">
//         <div className="container">
//           <ReactMarkdown source={page.frontmatter.developerGroups} />
//         </div>
//       </section>
//       <section className="section  organizers  about-organizers">
//         <div className="container  organizers-container">
//           <h2 className="organizers-title">{page.frontmatter.organizers.title}</h2>
//           <ul className="organizers-list">
//             {page.frontmatter.organizers.gallery.map((galleryImage, index) => (
//               <li key={index} className="organizers-listItem">
//                 <img
//                   className="organizers-listItemImage"
//                   src={galleryImage.image}
//                   alt={galleryImage.imageAlt}
//                 />
//                 <span className="organizers-listItemName">{galleryImage.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </article>
//     <div className="container">
//           <div className="row">
//               <div className="col s3">
//                 <div className="center-align feature-items">
//                     <i className="Large material-iconss">call</i>
//                     <div className="row"></div>
//                     <h5>Multiple Numbers</h5>
//                     <p>One or more phone numbers. Selectable area codes and numbers.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">notifications</i>
//                     <div className="row"></div>
//                     <h5>Real Time Notifications</h5>
//                     <p>Acknowledgement and notification using SMS and/or Email.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">event_note</i>
//                     <div className="row"></div>
//                     <h5>Call logging</h5>
//                     <p>Help adjust you routing and messaging with Real-time call logging reports.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">settings</i>
//                     <div className="row"></div>
//                     <h5>Easy Configuration </h5>
//                     <p>Quick and Easy to modify Operating Hours, Holidays, Location, Services, Products and Call Routing.</p>
//                 </div>
//               </div>
//           </div>
//           <div className="row"></div>
//           <div className="row">
//               <div className="col s3">
//                 <div className="center-align feature-items">
//                     <i className="Large material-iconss">text_fields</i>
//                     <div className="row"></div>
//                     <h5>Text to Speech</h5>
//                     <p>Simple to create phone selection responses using Text-to-Speech technology.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">attach_money</i>
//                     <div className="row"></div>
//                     <h5>Pay-As-You-Go</h5>
//                     <p>No fixed monthly commitment. Low cost credits with SMS notification on remaining credits.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">pie_chart</i>
//                     <div className="row"></div>
//                     <h5>Real Tine Reporting</h5>
//                     <p>View you call logs anytime from anywhere.</p>
//                 </div>
//               </div>
//               <div className="col s3">
//               <div className="center-align feature-items">
//                     <i className="Large material-iconss">phone_android</i>
//                     <div className="row"></div>
//                     <h5>Mobile App for Routing</h5>
//                     <p>Create and modify interactive selection routing amd responce using your modile device.</p>
//                 </div>
//               </div>
//           </div>
//           </div>
//     </div>
//   );
// };

// const FeaturePage = ({ data }) => {
//   const { markdownRemark: page, footerData, navbarData } = data;
//   const {
//     frontmatter: {
//       seo: { title: seoTitle, description: seoDescription, browserTitle },
//     },
//   } = page;

//   return (
//     <Layout footerData={footerData} navbarData={navbarData}>
//       <Helmet>
//         <meta name="title" content={seoTitle} />
//         <meta name="description" content={seoDescription} />
//         <title>{browserTitle}</title>
//       </Helmet>
//       <FeaturePageTemplate page={{ ...page, bodyIsMarkdown: false }} />
//     </Layout>
//   );
// };

// FeaturePage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default FeaturesPage;

// export const featuresPageQuery = graphql`
//   query FeaturesPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//         mainImage {
//           image
//           imageAlt
//         }
//         gallery {
//           image
//           imageAlt
//         }
//         developerGroups
//         organizers {
//           title
//           gallery {
//             image
//             imageAlt
//             name
//           }
//         }
//         seo {
//           browserTitle
//           title
//           description
//         }
//       }
//     }
//     ...LayoutFragment
//   }
// `;
