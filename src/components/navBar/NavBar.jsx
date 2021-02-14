import React, { useState, useEffect } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import {
  Container,
  ListContainer,
  List,
  Flag,
  Logo,
  LogoName,
  Image,
  moveVertically,
} from './NavBar.styled';

const NavBar = () => {
  const [navBc, setNavBc] = useState(false);

  useEffect(() => {
    async function handleScrollBar() {
      console.log(navBc);
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
          <Link to="hero" smooth={true} duration={2000} spy={true}>
            Home
          </Link>
        </List>
        <List>
          <Link to="about" smooth={true} duration={2000} spy={true} delay={100}>
            About
          </Link>
        </List>
        <List>
          <Link to="posts" smooth={true} duration={2000} spy={true} delay={100}>
            Blogs
          </Link>
        </List>
        <List>Contact</List>
        <List>Login</List>
      </ListContainer>
      <Flag>
        <Image src="//s.svgbox.net/flags-ld.svg?ic=et" alt="flag" />
      </Flag>
    </Container>
  );
};

export default React.memo(NavBar);
