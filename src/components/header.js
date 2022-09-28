/** @jsx jsx */
import { jsx } from "theme-ui";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <div sx={headerStyles.container}>
        <Logo />
        <div sx={headerStyles.navIcons}>
          <div sx={headerStyles.navMenu}>
            <Navigation />
          </div>
        </div>
        <div sx={headerStyles.navMenuBigScreen}>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;

const headerStyles = {
  container: {
    m: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: ["10px", "60px", "80px", "160px", "160px"],
    py: "8px",
    bg: "primaryBg",
  },
  navMenuBigScreen: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
  },
  navMenu: {
    display: ["block", "block", "block", "none"],
    ".site-menu": {
      display: "none",
    },
  },
  navIcons: {
    display: ["flex", "flex", "flex", "none"],
    float: ["right", "right", "inherit"],
  },
};
