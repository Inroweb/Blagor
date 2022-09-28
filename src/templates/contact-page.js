/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 140)
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Contact = ({ data }) => {
  const { markdownRemark, site } = data; // data.markdownRemark holds your page data
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div sx={contactStyles.contactBody}>
        <div>
          <h2 sx={contactStyles.title}>{frontmatter.title}</h2>
          <p sx={contactStyles.description}>{frontmatter.description}</p>
        </div>
        <div sx={contactStyles.wrapper}>
          <form
            sx={contactStyles.contactForm}
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button sx={{ variant: "variants.button", mt: 4 }}>
              Send message <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

const contactStyles = {
  contactBody: {
    variant: "variants.container",
    px: ["20px", "60px", "160px", "260px", "360px"],
  },
  contactForm: {
    input: {
      width: "100%",
      maxWidth: "100%",
      mb: 5,
      p: "14px",
      bg: "transparent",
      color: "black",
      fontFamily: "inherit",
      border: "1.2px solid",
      borderColor: "borderColor",
      borderRadius: "12px",
      appearance: "none",
      fontSize: "16px",
      outline: "none",
    },
    textarea: {
      minHeight: "160px",
      fontFamily: "inherit",
      width: "100%",
      maxWidth: "100%",
      p: "14px",
      bg: "transparent",
      color: "black",
      borderRadius: "12px",
      border: "1.2px solid",
      borderColor: "borderColor",
      appearance: "none",
      fontSize: "16px",
      outline: "none",
      display: "block",
    },
  },
  title: {
    mt: 0,
    mb: 3,
    color: "black",
  },
  description: {
    maxWidth: "50ch",
    fontSize: 3,
    color: "mutedColor",
    display: "block",
    my: 3,
  },
};
