/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import BlogCard from "./blog-card";
import postData from "../util/posts.json";

export default function BlogListHome(props) {
  const data = props.data;
  const posts = data.edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <BlogCard key={edge.node.id} data={edge.node} />);
  return <PostMaker data={posts} />;
}

const PostMaker = ({ data }) => (
  <section sx={{ variant: "variants.container" }}>
    <div>
      <div sx={blogStyles.blogListHomeHead}>
        <div>
          <h2 sx={blogStyles.title}>{postData.title}</h2>
          <p sx={blogStyles.description}>{postData.description}</p>
        </div>
        <div style={{ display: "flex" }}>
          {data.length > 9 && (
            <Link to="/blog" sx={{ variant: "variants.button" }}>
              See all Blogs &nbsp;
              <span>&#8599;</span>
            </Link>
          )}
        </div>
      </div>
      <div sx={blogStyles.blogPosts}>{data.slice(0, 9)}</div>
    </div>
  </section>
);

const blogStyles = {
  blogListHomeHead: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    alignItems: "flex-end",
    mb: 6,
  },
  title: {
    mb: 2,
    color: "black",
    fontSize: "42px !important",
    fontWeight: "600 !important",
  },
  description: {
    fontSize: 3,
    color: "mutedColor",
    maxWidth: "30ch",
  },
  blogPosts: {
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    rowGap: "42px",
    columnGap: "36px",
  },
};
