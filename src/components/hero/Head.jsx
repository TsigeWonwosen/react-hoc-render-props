import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import DownArrowIcons from '../../img/down-arrow.gif';

import {
  MainHeroContainer,
  HeroContainer,
  ButtonContainer,
  Button,
  Overlay,
  HeaderOne,
  Text,
  DownArrow,
  LinkGitHub,
  CurveSvg,
} from './Hero.styled';
function Head() {
  return (
    <MainHeroContainer>
      <HeroContainer id="hero">
        <Overlay>
          <HeaderOne>Design elements, React With Styled Components</HeaderOne>
          <Text>
            This Project was built with React, Styled Components and Back end
            with Strapi (Front End hosted on Netlify Back end on Heroku).
          </Text>

          <ButtonContainer>
            <Button primary="primer">
              <LinkGitHub to="/contact">
                <span>Contact Me</span>
                <AiOutlineMail />
              </LinkGitHub>
            </Button>

            <Button>
              <LinkGitHub
                href="https://github.com/TsigeWonwosen/react-hoc-render-props"
                target="_blank"
                rel="noreferrer"
              >
                <span>See Code </span>
                <FaGithub />
              </LinkGitHub>
            </Button>
          </ButtonContainer>
          <DownArrow src={DownArrowIcons} />
        </Overlay>
      </HeroContainer>
      <CurveSvg>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
        >
          <linearGradient id="gradient" gradientTransform="rotate(180)">
            <stop className="main-stop" offset="0%" />
            <stop className="alt-stop" offset="100%" />
          </linearGradient>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </CurveSvg>
    </MainHeroContainer>
  );
}

export default React.memo(Head);
