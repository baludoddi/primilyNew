import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import DetailsPagePreview from "./preview-templates/DetailsPagePreview";
import FAQPagePreview from "./preview-templates/FAQPagePreview";
import PolicyPagePreview from "./preview-templates/PolicyPagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import FeaturePagePreview from "./preview-templates/FeaturePagePreview";
import DescribePagePreview from "./preview-templates/DescribePagePreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";
import DemoPagePreview from "./preview-templates/PricingPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("details", DetailsPagePreview);
CMS.registerPreviewTemplate("faq", FAQPagePreview);
CMS.registerPreviewTemplate("policy", PolicyPagePreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("feature", FeaturePagePreview);
CMS.registerPreviewTemplate("describe", DescribePagePreview);
CMS.registerPreviewTemplate("pricing", PricingPagePreview);
CMS.registerPreviewTemplate("demo", DemoPagePreview);
