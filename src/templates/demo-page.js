import React from "react";
import PropTypes from 'prop-types'
//import { Link, graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import SlideView from "../components/SlideView";

export class Demo extends React.Component {
    render() {

      const { demo } = this.props.data

      return (
          <div className="container">
              <SlideView content={demo.sliderImages} />
          </div>
    )
}
}

Demo.propTypes = {
  data: PropTypes.object
  }

export default () => (
    <StaticQuery
      query={graphql`
          query DemoQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "demo-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    demo {
                      sliderImages {
                        imageSrc
                        imagealt
                        imageText
                      }
                    }
                  }
                }
              }
            }
          }
        `}
      render={(data, count) => <Demo data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
    />
  )

