import React from 'react';

import {
  Wrapper,
  AboutText,
  Paragraph,
  Image,
  ImageContainer,
  Title,
  Line,
} from './About.styled';

function About() {
  return (
    <Wrapper id="about">
      <AboutText>
        <Title>About Me</Title>
        <Line />
        <Paragraph>
          I am a software developer by profession with formal education in
          computer science (yah there was a time where we had to visit a place
          to learn something). Over the period of time I have developed niche
          skills of using google and stack-overflow which helped me survive
          grow. I am also believer of free & open education for everyone and try
          to do my bits whenever I get time.
        </Paragraph>
      </AboutText>

      <ImageContainer>
        <Image />
      </ImageContainer>
    </Wrapper>
  );
}

export default About;
