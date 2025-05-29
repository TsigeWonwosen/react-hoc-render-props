import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  WrapperContainer,
  Container,
  Content,
  ListContainer,
  List,
  Logo,
  LogoName,
  moveVertically,
  LinkStyled,
  MobileMenuContainer,
  MobileMenu,
  ListWraper,
} from "./NavBar.styled";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [navBc, setNavBc] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    async function handleScrollBar() {
      try {
        if (pathname === "/" && window.scrollY < 100) {
          setNavBc((prvState) => !prvState);
        } else {
          setNavBc(true);
        }
      } catch (e) {
        console.log(e);
      }
      return;
    }
    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("scroll", handleScrollBar);
    };
  }, [navBc, pathname]);

  return (
    <WrapperContainer primary={navBc}>
      <Container primary={navBc}>
        <Content>
          <Logo id="home">
            <LogoName
              onClick={() =>
                scroll.scrollToTop({
                  duration: 2000,
                  delay: 100,
                  smooth: true,
                  behavior: "smooth",
                })
              }
              move={moveVertically}
            >
              Wonde
              <span style={{ color: "blue !important" }}>.</span>
              Shi
            </LogoName>
          </Logo>
          <ListContainer>
            {links.map((link) => (
              <LinkStyled
                key={link.label}
                to={link.path}
                exact
                activeClassName={hash === "" ? "active" : ""}
              >
                <List>{link.label}</List>
              </LinkStyled>
            ))}
            {/* <List>
              <LinkStyled
                to="/"
                exact
                activeClassName={hash === "" ? "active" : ""}
              >
                Home
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/#about"
                exact
                activeClassName={hash === "#about" ? "active" : ""}
              >
                About
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/blogs"
                exact
                activeClassName="active"
              >
                Blogs
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/#project"
                exact
                activeClassName={hash === "#project" ? "active" : ""}
              >
                Projects
              </LinkStyled>
            </List>
            <List contact={true}>
              <LinkStyled
                to="/contact"
                exact
                activeClassName="active"
              >
                Contact
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/login"
                activeClassName="active"
              >
                Login
              </LinkStyled>
            </List> */}
          </ListContainer>
          <MobileMenuContainer>
            {!showMenu ? (
              <Menu
                size={15}
                strokeWidth={2}
                onClick={() => setShowMenu(true)}
              />
            ) : (
              <X
                size={15}
                strokeWidth={2}
                onClick={() => setShowMenu(false)}
              />
            )}
            {showMenu && (
              <MobileMenu>
                <ListWraper>
                  {links.map((link) => (
                    <LinkStyled
                      key={link.label}
                      to={link.path}
                      exact
                      activeClassName={hash === "" ? "active" : ""}
                    >
                      <List>{link.label}</List>
                    </LinkStyled>
                  ))}
                </ListWraper>
              </MobileMenu>
            )}
          </MobileMenuContainer>
        </Content>
      </Container>
    </WrapperContainer>
  );
};

export default React.memo(NavBar);

const links = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
  { label: "Projects", path: "/#project" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/contact" },
  { label: "Login", path: "/login" },
];
