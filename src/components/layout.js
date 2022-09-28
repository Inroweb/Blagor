/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, className }) => {
  return (
    <div sx={layoutStyles.base}>
      <Header />
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

const layoutStyles = {
  base: {
    bg: "background",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
    code: {
      fontFamily: "monospace",
    },
    b: {
      fontWeight: "heading",
    },
    a: {
      textDecoration: "none",
    },
    "h1, h2, h3": {
      fontFamily: "heading",
      fontWeight: "500",
      lineHeight: "1.3",
    },
    h1: {
      fontSize: [5, 6, 7],
    },
    h2: {
      fontSize: [5, 5, 6],
    },
    "h4, h5, h6": {
      fontFamily: "body",
      fontWeight: "500",
      lineHeight: "1.3",
    },
    ".section-heading": {
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
};
