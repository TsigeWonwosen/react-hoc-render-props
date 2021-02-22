import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import DownArrowIcons from '../../img/down-arrow.gif';

import {
  HeroContainer,
  ButtonContainer,
  Button,
  Overlay,
  HeaderOne,
  Text,
  DownArrow,
  LinkGitHub,
} from './Hero.styled';
function Head() {
  return (
    <HeroContainer id="hero">
      <Overlay>
        <HeaderOne>Design elements, React With Styled Components</HeaderOne>
        <Text>
          This Project is built with React, Styled Components and Back end with
          Strapi.which has Navigation , About Me, Blogs , Other Projects
          pages.All are factional && mobile friendlily.
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
  );
}

export default React.memo(Head);
