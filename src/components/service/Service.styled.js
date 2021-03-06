import styled from 'styled-components';

import OfficePic from '../../img/office.jpg';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 2rem 0rem 0rem;
  clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 100%);

  @media (max-width: 900px) {
    margin: 1rem 0rem 2rem;
  }
`;
export const Content = styled.section`
  background-image: url(${OfficePic});
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-position: 50% 0.2%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(39, 39, 95, 0.45);
    background-blend-mode: overlay;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1.4rem;
  }
`;

export const Header = styled.span`
  z-index: 20;
`;
export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  color: #fdfdfd;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 3.2rem;
  padding: 1rem 0;
  z-index: 20;

  @media (max-width: 900px) {
    letter-spacing: 1.2px;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;
export const Paragraph = styled.p`
  max-width: 75%;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.7rem;
  z-index: 20;

  @media (max-width: 900px) {
    max-width: 99%;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
`;

export const Line = styled.div`
  margin: 2rem auto 2rem;
  padding: 0;
  height: 0.4rem;
  background-color: #f4743b;
  width: 100px;
  text-align: center;
  border-radius: 15px;
`;
