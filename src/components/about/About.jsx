import React from 'react';
import {useLocation} from 'react-router-dom'

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
  const location = useLocation();


   React.useEffect(() => {
     if (location.hash) {
       let elem = document.getElementById(location.hash.slice(1));
       if (elem) {
         elem.scrollIntoView({ behavior: 'smooth' });
       }
     } else {
       window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
     }
   }, [location]);

  return (
    <Wrapper id="about">
      <AboutText>
        <Title>About Me</Title>
        <Line />
        <Paragraph className="paragraph">
          I am a Tsige Wondwosen shiferaw a Fullstack developer by profession
          with formal education in computer science (Master's from Politecnico
          di Torino). Currently i am looking full time position. Through out my
          education and work experience a learned a lot how to create a web site
          front end to back end. Currently i am working on my own projects.
          <br />
          Here is a list of technologies that I use in my work: JavaScript(ES6)
          , React , Node , Mongoose, Redux , Gatsby , Sass , Styled
          Components,Strapi , Firebase , GitHub Npm .
        </Paragraph>
      </AboutText>

      <ImageContainer>
        <Image />
      </ImageContainer>
    </Wrapper>
  );
}

export default About;
