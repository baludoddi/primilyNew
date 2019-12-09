import React from "react";
import PropTypes from "prop-types";
import { FeaturesPageTemplate } from "../../templates/features-page";

const FeaturesPagePreview = ({ entry, widgetFor }) => (
  <FeaturesPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

FeaturesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FeaturesPagePreview;
