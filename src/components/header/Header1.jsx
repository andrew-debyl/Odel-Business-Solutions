"use client";
import Link from "next/link";
import { useEffect, useMemo, useReducer, useRef } from "react";
import navData from "../../data/nav.json";
import ScrollProgress from "../common/ScrollProgress";
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

const Header1 = () => {
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
      <ScrollProgress />
      <header
        ref={headerRef}
        className={`header-area style-1 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="container d-flex flex-nowrap align-items-center justify-content-between">
          <div className="company-logo">
            <Link href="/" className="logo-dark">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo-odel.png"
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
            <div className="right-sidebar-and-hotline-area">
              <div className="hotline-area d-xl-flex d-none">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                  >
                    <path d="M21.4233 16.9723L16.9701 14.0025C16.4049 13.6286 15.6474 13.7516 15.2296 14.2851L13.9324 15.953C13.8518 16.0593 13.7355 16.133 13.6049 16.1605C13.4743 16.1879 13.3382 16.1674 13.2215 16.1026L12.9748 15.9666C12.1568 15.5207 11.139 14.9656 9.08843 12.9143C7.03782 10.863 6.48163 9.84441 6.03578 9.02794L5.90048 8.78119C5.8348 8.66457 5.81347 8.52814 5.84042 8.39704C5.86736 8.26593 5.94077 8.14897 6.04712 8.06771L7.71384 6.77093C8.24713 6.35309 8.37031 5.59578 7.9969 5.03048L5.02713 0.577286C4.64443 0.00163523 3.87664 -0.171172 3.28419 0.184969L1.42202 1.30357C0.836918 1.64754 0.407665 2.20464 0.224235 2.85811C-0.446327 5.30138 0.0581298 9.51809 6.26973 15.7304C11.2109 20.6712 14.8894 21.9999 17.4178 21.9999C17.9997 22.0024 18.5792 21.9267 19.141 21.7748C19.7946 21.5916 20.3517 21.1623 20.6955 20.5771L21.8152 18.716C22.1719 18.1234 21.9992 17.3552 21.4233 16.9723ZM21.1835 18.3398L20.0663 20.202C19.8194 20.6244 19.4187 20.935 18.9481 21.0687C16.6925 21.688 12.7519 21.175 6.78849 15.2117C0.825106 9.24827 0.312228 5.308 0.931488 3.05209C1.06539 2.58083 1.37635 2.17961 1.7993 1.93237L3.66147 0.815229C3.91853 0.660553 4.25177 0.735528 4.41783 0.985329L6.03106 3.40733L7.38507 5.43814C7.54722 5.68334 7.49394 6.01198 7.26262 6.19343L5.59552 7.49021C5.08818 7.87814 4.9433 8.58007 5.25566 9.13716L5.38804 9.37768C5.85662 10.2371 6.43918 11.3062 8.56606 13.4327C10.6929 15.5592 11.7617 16.1418 12.6207 16.6104L12.8616 16.7431C13.4186 17.0554 14.1206 16.9106 14.5085 16.4032L15.8053 14.7361C15.9868 14.5049 16.3153 14.4517 16.5606 14.6137L21.0134 17.5834C21.2634 17.7494 21.3384 18.0828 21.1835 18.3398ZM12.4659 3.66805C15.9066 3.67187 18.6949 6.4602 18.6988 9.90091C18.6988 10.1034 18.8629 10.2675 19.0654 10.2675C19.2679 10.2675 19.432 10.1034 19.432 9.90091C19.4278 6.05538 16.3114 2.93901 12.4659 2.9348C12.2634 2.9348 12.0993 3.09893 12.0993 3.30142C12.0993 3.50392 12.2634 3.66805 12.4659 3.66805Z" />
                    <path d="M12.4653 5.86759C14.6916 5.87021 16.4957 7.67433 16.4983 9.90062C16.4983 9.99786 16.5369 10.0911 16.6057 10.1599C16.6744 10.2286 16.7677 10.2672 16.8649 10.2672C16.9622 10.2672 17.0554 10.2286 17.1242 10.1599C17.1929 10.0911 17.2315 9.99786 17.2315 9.90062C17.2285 7.26951 15.0963 5.13735 12.4653 5.13434C12.2628 5.13434 12.0986 5.29847 12.0986 5.50096C12.0986 5.70346 12.2628 5.86759 12.4653 5.86759Z" />
                    <path d="M12.4653 8.06738C13.4772 8.06859 14.2972 8.88863 14.2985 9.90059C14.2985 9.99783 14.3371 10.0911 14.4058 10.1598C14.4746 10.2286 14.5679 10.2672 14.6651 10.2672C14.7623 10.2672 14.8556 10.2286 14.9243 10.1598C14.9931 10.0911 15.0317 9.99783 15.0317 9.90059C15.0301 8.48385 13.882 7.33573 12.4653 7.33414C12.2628 7.33414 12.0986 7.49827 12.0986 7.70076C12.0986 7.90326 12.2628 8.06738 12.4653 8.06738Z" />
                  </svg>
                </div>
                <div className="content">
                  <span>Any Question</span>
                  <h6>
                    <Link href="tel:+990737621432">+990-737 621 432</Link>
                  </h6>
                </div>
              </div>
              <div className="sidebar-btn" onClick={toggleRightSidebar}>
                <svg
                  className="open"
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
              <div className="sidebar-button mobile-menu-btn d-none">
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
