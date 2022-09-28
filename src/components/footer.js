/** @jsx jsx */
import { jsx } from "theme-ui";
import SocialIcons from "./social-media-icons";
import FooterData from "../util/footer.json";
import ReactMarkdown from "react-markdown";

const footerStyles = {
  footerContainer: {
    variant: "variants.container",
    bg: "primaryBg",
    py: 6,
    mt: 5,
    textAlign: "center",
  },
};

const Footer = () => {
  return (
    <footer>
      <div sx={footerStyles.footerContainer}>
        <SocialIcons />
        <ReactMarkdown
          children={FooterData.footerText}
          sx={{
            variant: "variants.markdown",
            pb: 0,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
