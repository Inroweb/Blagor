/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MenuJSON from "../util/headerMenu.json";

const MenuItems = MenuJSON.menu;

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={"menu-" + index.toString()} to={menuItem.url}>
        {menuItem.title}
      </ListLink>
    ));
    return (
      <nav sx={navStyles.navcontainer}>
        <button
          onClick={this.handleToggleClick}
          className={
            this.state.showMenu ? "menu-trigger is-active" : "menu-trigger"
          }
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul className="site-menu">{listMenuItems}</ul>
      </nav>
    );
  }
}

export default Navigation;

const navStyles = {
  navcontainer: {
    position: "relative",
    ".site-menu": {
      m: 0,
      p: 0,
      bg: "transparent",
      "> li": {
        display: "inline-block",
        pl: 5,
      },
      "> li a": {
        fontSize: 3,
        letterSpacing: "1.2px",
        lineHeight: ["60px", "80px"],
        color: "black",
        fontWeight: "900",
        "&:hover": {
          color: "primaryColor",
        },
        "&[aria-current='page']": {
          color: "primaryColor",
        },
      },
    },
    ".menu-trigger": {
      display: ["flex", "flex", "flex", "none"],
      fontSize: [4, 5],
      width: "inherit",
      height: ["60px", "80px"],
      background: "none",
      border: "none",
      color: "black",
      py: 3,
      px: "20px",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      position: "relative",
      mr: "0",
      "&:focus": {
        color: "primaryColor",
      },
      "&.is-active": {
        color: "black",
        bg: "background",
        "+ .site-menu": {
          display: ["block"],
          position: ["absolute", "absolute", "absolute", "relative"],
          bg: "background",
          minWidth: ["280px"],
          maxWidth: "100%",
          maxHeight: [
            "calc(100vh - 200px)",
            "calc(100vh - 200px)",
            "inherit",
            "inherit",
          ],
          zIndex: 999,
          overflow: "hidden",
          overflowY: ["scroll", "scroll", "hidden", "inherit"],
          borderRadius: "6px 0 6px 6px",
          boxShadow:
            "0px 0px 50px 0px rgba(0,0,0,.2), 0px 0px 1px 0px rgba(0,0,0,.1)",
          animation: "animation 0.3s",
          transition: "linear transform .3s",
          transformOrigin: "top right",
          transform: "scale(1)",
          opacity: 1,
          top: ["60px", "80px"],
          right: 0,
          "> li": {
            display: ["block", "block", "block", "inline-block"],
          },
        },
        ".icon-menu-line": {
          display: ["none"],
        },
        ".icon-menu-close": {
          display: ["flex"],
        },
      },
      ".icon-menu-line": {
        display: ["flex"],
      },
      ".icon-menu-close": {
        display: ["none"],
      },
    },
  },
};
