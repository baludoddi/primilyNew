import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../styles/describe-page.scss';

export class Describe extends React.Component {
    render() {

      const { describe: describe, description: description, appGalley: appGalley } = this.props.data
      // console.log(this.props.data)
      return (
    <div className="describe">
      <div className="grey lighten-4">
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>

        <div className="container">

          <div className="row">
              {describe.cards.map((card, index) => (
                <div className="col s6 l4" key={index}>
                  <div className="describe-card">
                  <div children="row"> 
                <div className="col s2 m1 l2"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s10 m11 l10">
                  <div className="feature-items">
                    <h5 className="center-align">{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
                {card.image ? <div className="col s12"><img src={card.image} className="responsive-img"/></div> : <div></div>}
                </div>
                </div>
                </div>
              ))}
              
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>

          <div className="row">
            <div className="col s1"></div>
            <div className="col s10">

              <div className="video-container">
                <iframe width="853" height="480" src={describe.video.src} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col s1">
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>



      <div className="container">
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row">
          <div className="col s4 center-align">
            <img src={description.mainImage} className="responsive-img" alt="" />
            <div className="row"><div className="col s12"></div></div>
            <img src={description.playstoreImage} className="responsive-img" height="67"
              width="232" />
          </div>
          <div className="col s2"></div>
          <div className="col s6">
            <div className="feature-items">
              <h4 className="description-font">{description.cardHead}</h4>
              <p>{description.description}</p>
              <div className="row"></div>
              <div className="row"></div>
              {description.cards.descriptionlist.map((card, index) => (
              <div className="row" key={index}>
                <div className="col s1"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5>{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>


  <div className="container-fluid grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12"><h3 className="center-align grey-text h-style">{appGalley.appGalleryHead}</h3></div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="carousel carousel-slider center">
            {appGalley.sliderImages.map((slides, index) => (
              
              <div className="carousel-item" href="#one!" key={index}><div className="row">
                  <div className="col s4"></div>
                  <div className="col s4">
                    <img src={slides.slideImg} />
                  </div>
              </div>
              </div>
            ))}
            </div>
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>
        </div>
      </div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
    )
  }
  }
  
  Describe.propTypes = {
      data: PropTypes.object
    }
  
  export default () => (
      <StaticQuery
        query={graphql`
          query DescribeQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "describe-page" } } }
            ) {
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
          }
        `}
        render={(data, count) => <Describe data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
      />
    )
  
  

