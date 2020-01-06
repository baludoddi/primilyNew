import React from "react";
import PropTypes from "prop-types";

import { Feature } from "../../templates/feature-page";

const FeaturePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  // var node = {node : feature}
  // var edges = [];
  // edges[0] = node;
  // var data =  {
  //   allMarkdownRemark : edges
  // }
  // console.log(feature)
  return <Feature data={data} />;
};

FeaturePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FeaturePagePreview;
