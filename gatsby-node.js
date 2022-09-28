const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require("@sindresorhus/slugify");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogList = path.resolve(`./src/templates/blog-list.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Index page
  const homepage = result.data.allMarkdownRemark.edges.filter(
    (product) => product.node.frontmatter.template == "index-page"
  );

  homepage.forEach((home) => {
    const id = home.node.id;
    createPage({
      path: home.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(home.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // Contact page
  const contactpage = result.data.allMarkdownRemark.edges.filter(
    (product) => product.node.frontmatter.template == "contact-page"
  );

  contactpage.forEach((contact) => {
    const id = contact.node.id;
    createPage({
      path: contact.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(contact.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // Blogs
  // Create markdown pages
  let blogPostsCount = 0;
  const posts = result.data.allMarkdownRemark.edges.filter(
    (product) => product.node.frontmatter.template == "blog-post"
  );

  posts.forEach((post, index) => {
    const id = post.node.id;
    const postTitle = post.node.frontmatter.title;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const prefix = `/blog/`;
    const slug = slugify(postTitle);

    createPage({
      path: prefix + slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    });
    // Count blog posts.
    if (post.node.frontmatter.template === "blog-post") {
      blogPostsCount++;
    }
  });
  // Create blog-list pages
  const postsPerPage = 9;
  const numPage = Math.ceil(blogPostsCount / postsPerPage);

  Array.from({ length: numPage }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPage,
        currentPage: i + 1,
      },
    });
  });

  // Tags
  // Create markdown pages
  let tagPageCount = 0;
  const tags = result.data.allMarkdownRemark.edges.filter(
    (product) => product.node.frontmatter.template == "tags-page"
  );

  tags.forEach((tag, index) => {
    const id = tag.node.id;
    const tagTitle = tag.node.frontmatter.title;
    const previous = index === tags.length - 1 ? null : tags[index + 1].node;
    const next = index === 0 ? null : tags[index - 1].node;
    const prefix = `/tag/`;
    const slug = slugify(tagTitle);

    createPage({
      path: prefix + slug,
      component: path.resolve(
        `src/templates/${String(tag.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        tagTitle,
        previous,
        next,
      },
    });
    // Count tag posts.
    if (tag.node.frontmatter.template === "tags-page") {
      tagPageCount++;
    }
  });

  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  };
};
