/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "@sindresorhus/slugify";

const postPrefix = `/blog/`;
const BlogCard = ({ data }) => (
  <card>
    <Link to={postPrefix + slugify(`${data.frontmatter.title}`)}>
      {data.frontmatter.featuredImage && (
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Blog image"}
          sx={blogStyles.featuredImage}
        />
      )}
      <div>
        <h3 sx={blogStyles.title}>{data.frontmatter.title}</h3>
        <span sx={blogStyles.date}>{data.frontmatter.date}</span>
      </div>
    </Link>
  </card>
);
export default BlogCard;

const blogStyles = {
  featuredImage: {
    maxWidth: "100% !important",
    width: "100% !important",
    height: ["300px"],
    borderRadius: "12px",
    transition: ".2s",
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
  title: {
    mt: 4,
    mb: "8px",
    fontSize: [3, 4],
    fontWeight: "600 !important",
    color: "black",
    lineHeight: "1.5 !important",
    "&:hover": {
      color: "primaryColor",
    },
  },
  date: {
    fontSize: [1, 2],
    color: "mutedColor",
  },
};
