import React from "react";
import { useLocation } from "react-router-dom";

import {
  Wrapper,
  AboutText,
  Paragraph,
  Image,
  ImageContainer,
  Title,
  Line,
} from "./About.styled";

function About() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <Wrapper id="about">
      <AboutText>
        <Title>About Me</Title>
        <Line />
        <Paragraph className="paragraph">
          I'm Tsige Wondwosen Shiferaw, a Full-Stack Developer with a Master's
          degree in Computer Science from Politecnico di Torino. With expertise
          spanning frontend to backend development, I specialize in building
          modern web applications using cutting-edge technologies. Currently
          seeking full-time opportunities, I combine formal education with
          hands-on experience to deliver robust solutions. My independent
          projects demonstrate my ability to architect and implement end-to-end
          systems with clean, maintainable code. Technical Proficiencies
          Frontend: JavaScript (ES6+), React, Redux, Gatsby Styling: Sass,
          Styled Components Backend & Tools: Node.js, Mongoose, Strapi, Firebase
          Version Control: GitHub Package Management: npm Passionate about
          creating seamless user experiences while ensuring scalable
          architecture, I thrive in collaborative environments that value
          innovation and technical excellence.
        </Paragraph>
      </AboutText>

      <ImageContainer>
        <Image />
      </ImageContainer>
    </Wrapper>
  );
}

export default About;
