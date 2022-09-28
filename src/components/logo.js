/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import site from "../util/site.json";

const siteTitle = site.meta.title;
const image = site.meta.logoImage;
const showLogo = site.meta.showLogo;
const showTitle = site.meta.showTitle;
const Logo = (sx) => (
  <div sx={styles.siteLogo}>
    {showLogo === true
      ? image && (
          <Link to="/">
            <img src={image.slice(15)} alt={siteTitle} />
          </Link>
        )
      : ""}
    {showTitle === true ? <Link to="/">{siteTitle}</Link> : ""}
  </div>
);

export default Logo;

const styles = {
  siteLogo: {
    display: "flex",
    justifyContent: ["center", "center", "left"],
    alignItems: "center",
    fontSize: "28px",
    letterSpacing: "1px",
    textAlign: ["center", "center", "left"],
    a: {
      color: "black",
      textDecoration: "none",
      cursor: "pointer",
    },
    img: {
      maxHeight: "42px",
      mr: 2,
      display: "block",
    },
  },
};
