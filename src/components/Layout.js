import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { withPrefix } from "gatsby"
// import "../styles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({navbarData = null, children }) => (
  <div>
    {/* <Helmet>
      <html lang="en" />
      <meta name="keywords" content="montreal, javascript, programming, meetup" />
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script src={withPrefix('js/primily.js')} type="text/javascript" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </link>
    </Helmet> */}
    <Navbar data={navbarData} />
    <main>{children}</main>
    {/* <Footer data={footerData} /> */}
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;












// export const query = graphql`
//   fragment LayoutFragment on Query {
//     footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image
//               imageAlt
//               tagline
//             }
//             socialLinks {
//               image
//               imageAlt
//               label
//               linkURL
//             }
//           }
//         }
//       }
//     }
//     navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image
//               imageAlt
//             }
//             menuItems {
//               label
//               linkType
//               linkURL
//             }
//           }
//         }
//       }
//     }
//   }
// `;