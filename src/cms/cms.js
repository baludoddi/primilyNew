import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
// import FeaturesPagePreview from "./preview-templates/FeaturesPagePreview";
import TempPagePreview from "./preview-templates/TempPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import MeetupPreview from "./preview-templates/MeetupPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPagePreview";

CMS.registerPreviewTemplate("meetups", MeetupPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("features", FeaturesPagePreview);
CMS.registerPreviewTemplate("temp", TempPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("pastMeetups", PastMeetupsPagePreview);
