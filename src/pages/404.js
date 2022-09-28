/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { SiZeromq } from "react-icons/si";
import Seo from "../components/seo";
import Layout from "../components/layout";

const NotFound = () => (
  <Layout sx={errorStyles.notFoundPage}>
    <Seo title="Page not found" />
    <div sx={errorStyles.wrapper}>
      <header>
        <h1>
          Oops page n<SiZeromq sx={{ color: "primaryColor" }} />t found
        </h1>
        <p>
          Have you wondered into the unknow. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <Link to="/" sx={{ variant: "variants.button", display: "inline-block" }}>
        Back to Homepage
      </Link>
    </div>
  </Layout>
);

export default NotFound;

const errorStyles = {
  notFoundPage: {
    minHeight: "70vh",
    pt: 7,
  },
  wrapper: {
    variant: "variants.container",
    maxWidth: "100%",
    textAlign: "center",
    h1: {
      color: "black",
      mb: 2,
    },
    p: {
      color: "black",
      fontSize: 4,
      maxWidth: "50ch",
      m: "0 auto",
      mb: 6,
    },
  },
};
