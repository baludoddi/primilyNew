import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import CarouselComponent from '../components/carousel'

class Home extends React.Component {
  render() {
    const { data } = this.props
    const { home: home } = data.allMarkdownRemark.edges[0].node.frontmatter
    // console.log(posts)
    return (
    <div className="container">
     <CarouselComponent content={home.sliderImages} />
     <div className="row"><div className="col s12"><br></br></div></div>
     <div className="row"><div className="col s12"><br></br></div></div>
    </div>
    )
  }
  }
  
  Home.propTypes = {
      data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
          edges: PropTypes.array,
        }),
      }),
    }
  
  export default () => (
      <StaticQuery
        query={graphql`
          query HomeQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "home-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    home {
                      sliderImages {
                        imagesrc
                        imagealt
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Home data={data} count={count} />}
      />
    )
  
  