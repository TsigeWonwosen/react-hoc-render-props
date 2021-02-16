import React from 'react';
import { Link } from 'react-scroll';

import DownArrowIcons from '../../img/down-arrow.gif';

import {
  HeroContainer,
  ButtonContainer,
  Button,
  Overlay,
  HeaderOne,
  Text,
  DownArrow,
} from './Hero.styled';
function Head() {
  return (
    <HeroContainer id="hero">
      <Overlay>
        <HeaderOne>Design elements, React With Styled Components</HeaderOne>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          consectetur nihil omnis vero culpa optio placeat alias quis mollitia
          adipisci?
        </Text>
        <ButtonContainer>
          <Button primary="primer"> Contact Me</Button>

          <Button>
            <Link
              to="project"
              smooth={true}
              duration={2000}
              spy={true}
              delay={100}
              offset={100}
            >
              See Projects
            </Link>
          </Button>
        </ButtonContainer>
        <DownArrow src={DownArrowIcons} />
      </Overlay>
    </HeroContainer>
  );
}

export default React.memo(Head);
