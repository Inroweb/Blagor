/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogCard from "../components/blog-card";

export const pageQuery = graphql`
  query tagsQuery($id: String!, $tagTitle: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tagTitle } } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`;

const Tags = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds your tags data
  const { frontmatter } = markdownRemark;

  const tagCard = allMarkdownRemark.edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <BlogCard key={edge.node.id} data={edge.node} />);

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div sx={tagsStyles.tagContainer}>
        <section sx={tagsStyles.tagHead}>
          <h2>{frontmatter.title}</h2>
          {tagCard.length > 1 || tagCard.length === 0 ? (
            <p>{tagCard.length} Blogs</p>
          ) : (
            <p>{tagCard.length} Blog</p>
          )}
        </section>
        <div sx={tagsStyles.tagCard}>{tagCard}</div>
      </div>
    </Layout>
  );
};

export default Tags;

const tagsStyles = {
  tagContainer: {
    variant: "variants.container",
    minHeight: "70vh",
  },
  tagHead: {
    h2: {
      mb: 2,
      color: "black",
    },
    p: {
      fontSize: 3,
      color: "mutedColor",
      display: "block",
    },
  },
  tagCard: {
    mt: 4,
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    gap: "50px",
  },
};
