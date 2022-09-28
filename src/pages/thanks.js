/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Seo from "../components/seo";
import Layout from "../components/layout";

const Thanks = () => (
  <Layout sx={thanksStyles.thanksPage}>
    <Seo title="Thank you" />
    <div sx={thanksStyles.wrapper}>
      <h1>
        Got y<RiCheckboxCircleLine sx={{ color: "primaryColor" }} />
        ur message
      </h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <Link to="/" sx={{ variant: "variants.button", display: "inline-block" }}>
        Back to Homepage
      </Link>
    </div>
  </Layout>
);

export default Thanks;

const thanksStyles = {
  thanksPage: {
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
