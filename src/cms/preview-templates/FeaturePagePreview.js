import React from "react";
import PropTypes from "prop-types";

import { FeaturePageTemplate } from "../../templates/feature-page";

const FeaturePagePreview = ({ entry }) => {
  const feature = entry.getIn(["data"]).toJS();
  return <FeaturePageTemplate feature={feature} />;
};

FeaturePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FeaturePagePreview;
