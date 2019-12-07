import React from "react";
import PropTypes from "prop-types";
import { TempPageTemplate } from "../../templates/temp-page";

const TempPagePreview = ({ entry, widgetFor }) => (
  <TempPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

TempPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TempPagePreview;
