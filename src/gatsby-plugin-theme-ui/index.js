import defaultColors from "../util/default-colors.json";
import fontFamily from "../util/integrations.json";

const theme = {
  breakpoints: ["40em", "56em", "64em", "90em", "120em"],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: `${fontFamily.siteFont.body}, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif`,
    heading: `${fontFamily.siteFont.heading}, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif`,
    monospace: `${fontFamily.siteFont.monospace}, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  },
  colors: {
    ...defaultColors,
  },
  variants: {
    container: {
      maxWidth: "1440px",
      m: "0 auto",
      px: ["20px", "60px", "80px", "160px", "160px"],
      py: [4, 4, 7],
    },
    button: {
      py: 2,
      px: 3,
      fontSize: 2,
      cursor: "pointer",
      borderRadius: "12px",
      border: "1.2px solid",
      borderColor: "black",
      color: "black",
      background: "none",
      letterSpacing: "1px",
      "&: hover": {
        color: "primaryColor",
      },
    },
    markdown: {
      py: 5,
      "h1, h2, h3, h4, h5, h6": {
        color: "black",
      },
      pre: {
        borderRadius: "12px",
        p: 3,
        bg: "#333",
        color: "#fff",
      },
      img: {
        display: "block",
        borderRadius: "18px",
      },
      ".gatsby-resp-image-figure": {
        my: 4,
        mx: 0,
        ".gatsby-resp-image-wrapper": {
          maxWidth: "none !important",
        },
      },
      blockquote: {
        borderLeft: "3px solid",
        borderColor: "borderColor",
        px: 4,
        p: {
          fontWeight: "300",
        },
      },
      "blockquote, pre": {
        my: 5,
      },
      figure: {
        mx: 0,
        my: 3,
        figcaption: {
          mt: 1,
          fontSize: 0,
          textAlign: "ceter",
          color: "mutedColor",
        },
      },
      "p, li": {
        fontSize: 3,
        color: "black",
        py: 2,
      },
      a: {
        color: "primaryColor",
        fontWeight: "600",
        letterSpacing: "0.5px",
        "&:hover": {
          color: "black",
        },
      },
    },
    pageListPagination: {
      mt: 4,
      mb: 7,
      textAlign: "center",
      ul: {
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        "li ": {
          listStyle: "none",
          margin: "0 5px",
          a: {
            display: "inline-block",
            fontWeight: "bold",
            fontSize: 4,
            color: "primaryColor",
            "&:hover": {
              color: "black",
            },
            "&.is-active": {
              color: "black",
            },
          },
        },
      },
    },
    pagination: {
      mt: 7,
      ul: {
        m: 0,
        p: 0,
        display: ["flex"],
        justifyContent: "space-between",
        gap: "60px",
        flexWrap: "wrap",
        alignItems: "center",
        "li ": {
          width: ["100%", "100%", "100%", "45%"],
          listStyle: "none",
          padding: 4,
          borderRadius: "12px",
          bg: "primaryBg",
          p: {
            color: "black",
            fontSize: 3,
          },
          span: {
            display: "block",
            fontSize: 3,
            mt: 4,
            color: "primaryColor",
          },
          "&:nth-of-type(1)": {
            textAlign: "left",
          },
          "&:nth-of-type(2)": {
            textAlign: "right",
          },
        },
      },
    },
  },
};
export default theme;
