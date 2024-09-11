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
              <div className="sidebar-btn" onClick={toggleRightSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <g>
                    <path d="M6.79688 9.375H2.57812C1.15652 9.375 0 8.21848 0 6.79688V2.57812C0 1.15652 1.15652 0 2.57812 0H6.79688C8.21848 0 9.375 1.15652 9.375 2.57812V6.79688C9.375 8.21848 8.21848 9.375 6.79688 9.375ZM2.57812 1.25C1.84578 1.25 1.25 1.84578 1.25 2.57812V6.79688C1.25 7.52922 1.84578 8.125 2.57812 8.125H6.79688C7.52922 8.125 8.125 7.52922 8.125 6.79688V2.57812C8.125 1.84578 7.52922 1.25 6.79688 1.25H2.57812ZM17.4219 9.375H13.2031C11.7815 9.375 10.625 8.21848 10.625 6.79688V2.57812C10.625 1.15652 11.7815 0 13.2031 0H17.4219C18.8435 0 20 1.15652 20 2.57812V6.79688C20 8.21848 18.8435 9.375 17.4219 9.375ZM13.2031 1.25C12.4708 1.25 11.875 1.84578 11.875 2.57812V6.79688C11.875 7.52922 12.4708 8.125 13.2031 8.125H17.4219C18.1542 8.125 18.75 7.52922 18.75 6.79688V2.57812C18.75 1.84578 18.1542 1.25 17.4219 1.25H13.2031ZM15.3125 20C12.7278 20 10.625 17.8972 10.625 15.3125C10.625 12.7278 12.7278 10.625 15.3125 10.625C17.8972 10.625 20 12.7278 20 15.3125C20 17.8972 17.8972 20 15.3125 20ZM15.3125 11.875C13.4171 11.875 11.875 13.4171 11.875 15.3125C11.875 17.2079 13.4171 18.75 15.3125 18.75C17.2079 18.75 18.75 17.2079 18.75 15.3125C18.75 13.4171 17.2079 11.875 15.3125 11.875ZM6.79688 20H2.57812C1.15652 20 0 18.8435 0 17.4219V13.2031C0 11.7815 1.15652 10.625 2.57812 10.625H6.79688C8.21848 10.625 9.375 11.7815 9.375 13.2031V17.4219C9.375 18.8435 8.21848 20 6.79688 20ZM2.57812 11.875C1.84578 11.875 1.25 12.4708 1.25 13.2031V17.4219C1.25 18.1542 1.84578 18.75 2.57812 18.75H6.79688C7.52922 18.75 8.125 18.1542 8.125 17.4219V13.2031C8.125 12.4708 7.52922 11.875 6.79688 11.875H2.57812Z" />
                  </g>
                </svg>
              </div>
              <Link href="/contact" className="primary-btn4 d-xl-flex d-none">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
