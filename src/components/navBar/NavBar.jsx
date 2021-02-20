import React, { useState, useEffect } from 'react';
import { Link as NewLink, animateScroll as scroll } from 'react-scroll';
import {
  WrapperContainer,
  Container,
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

  useEffect(() => {
    async function handleScrollBar() {
      try {
        if (window.scrollY >= 130) {
          setNavBc(true);
        } else {
          setNavBc(false);
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
  }, [navBc]);

  return (
    <WrapperContainer primary={navBc}>
      <Container primary={navBc}>
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
            Wonde.Shi
          </LogoName>
        </Logo>
        <ListContainer>
          <List>
            <LinkStyled to="/">Home</LinkStyled>
          </List>
          <List>
            <NewLink
              to="about"
              smooth={true}
              duration={2000}
              spy={true}
              delay={100}
              offset={-100}
            >
              About
            </NewLink>
          </List>
          <List>
            <LinkStyled to="/blogs">Blogs</LinkStyled>
          </List>
          <List>
            <NewLink
              to="project"
              smooth={true}
              duration={2000}
              spy={true}
              delay={100}
              offset={-40}
            >
              Projects
            </NewLink>
          </List>
          <List contact={true}>
            <LinkStyled to="/contact">Contact</LinkStyled>
          </List>
          <List>
            <LinkStyled to="/login">Login</LinkStyled>
          </List>
        </ListContainer>
        <Flag>
          <Image src="//s.svgbox.net/flags-ld.svg?ic=et" alt="flag" />
        </Flag>
      </Container>
    </WrapperContainer>
  );
};

export default React.memo(NavBar);
