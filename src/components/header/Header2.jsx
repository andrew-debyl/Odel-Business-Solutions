"use client";
import Link from "next/link";
import { useEffect, useMemo, useReducer, useRef } from "react";
import navData from "../../data/nav.json";
const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}

const Header2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`header-area style-2 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="container d-flex flex-nowrap align-items-center justify-content-between">
          <div className="company-logo">
            <Link href="/" className="logo-dark">
              <img
                alt="image"
                className="img-fluid"
                src="/assets/img/temp.png"
              />
            </Link>
          </div>
          <div className="main-menu d-lg-flex d-none">
            <ul className="menu-list">
              {navData.map((data) => {
                const { id, label, link, icon, subMenu } = data;
                return (
                  <li
                    key={id}
                    className={`${
                      icon === true ? "menu-item-has-children" : ""
                    }`}
                  >
                    <Link href={link} className="drop-down">
                      {label}
                    </Link>
                    {icon && (
                      <i
                        onClick={() => toggleMenu(label)}
                        className={`bi bi-${
                          state.activeMenu === label ? "dash" : "plus"
                        } dropdown-icon`}
                      />
                    )}

                    {subMenu && (
                      <ul
                        className={`sub-menu ${
                          state.activeMenu === label ? "d-block" : ""
                        }`}
                      >
                        {subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link legacyBehavior href={subItem.link}>
                              <a>{subItem.label}</a>
                            </Link>
                            {subItem.icon && subItem.icon ? (
                              <>
                                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                                <i
                                  onClick={() => toggleSubMenu(subItem.label)}
                                  className={`d-lg-none d-flex bi bi-${
                                    state.activeSubMenu === subItem.label
                                      ? "dash"
                                      : "plus"
                                  } dropdown-icon `}
                                />
                              </>
                            ) : (
                              ""
                            )}
                            {subItem.subMenu && (
                              <ul
                                className={`sub-menu ${
                                  state.activeSubMenu === subItem.label
                                    ? "d-block"
                                    : ""
                                }`}
                              >
                                {subItem.subMenu.map((subItem, subIndex) => (
                                  <li key={subItem.id}>
                                    <Link legacyBehavior href={subItem.link}>
                                      <a>{subItem.label}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="sidebar-and-btn">
              <a
                href="tel:+14166276564"
                className="primary-btn4 d-xl-flex d-none"
              >
                +1 416-627-6564
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
