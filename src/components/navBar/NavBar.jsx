import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {
  WrapperContainer,
  Container,
  Content,
  ListContainer,
  List,
  Flag,
  Logo,
  LogoName,
  Image,
  moveVertically,
  LinkStyled,
} from './NavBar.styled';

const NavBar = () => {
  const [navBc, setNavBc] = useState(false);
  const { pathname, hash } = useLocation();
 
  useEffect(() => {
    async function handleScrollBar() {
      try {
        if (pathname === '/' && window.scrollY < 100) {
          setNavBc((prvState) => !prvState);
        } else {
          setNavBc(true);
        }
      } catch (e) {
        console.log(e);
      }
      return;
    }
    window.addEventListener('scroll', handleScrollBar);

    return () => {
      window.removeEventListener('scroll', handleScrollBar);
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
                  behavior: 'smooth',
                })
              }
              move={moveVertically}
            >
              Wonde
              <span style={{ color: 'red' }}>.</span>
              Shi
            </LogoName>
          </Logo>
          <ListContainer>
            <List>
              <LinkStyled
                to="/"
                exact
                activeClassName={hash === '' ? 'active' : ''}
              >
                Home
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/#about"
                exact
                activeClassName={hash === '#about' ? 'active' : ''}
              >
                About
              </LinkStyled>
            </List>
            <List>
              <LinkStyled to="/blogs" exact activeClassName="active">
                Blogs
              </LinkStyled>
            </List>
            <List>
              <LinkStyled
                to="/#project"
                exact
                activeClassName={hash === '#project' ? 'active' : ''}
              >
                Projects
              </LinkStyled>
            </List>
            <List contact={true}>
              <LinkStyled to="/contact" exact activeClassName="active">
                Contact
              </LinkStyled>
            </List>
            <List>
              <LinkStyled to="/login" activeClassName="active">
                Login
              </LinkStyled>
            </List>
          </ListContainer>
          <Flag>
            <Image src="//s.svgbox.net/flags-ld.svg?ic=et" alt="flag" />
          </Flag>
        </Content>
      </Container>
    </WrapperContainer>
  );
};

export default React.memo(NavBar);
