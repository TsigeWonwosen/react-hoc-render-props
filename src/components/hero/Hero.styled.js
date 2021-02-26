import styled, { css } from 'styled-components';
import HeroImage from '../../img/Background.jpg';

export const MainHeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 20;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const HeroContainer = styled.section`
  position: relative;
  height: 99.7vh;
  z-index: 10;
  margin-top: 0;
  padding-top: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url(${HeroImage}),
      linear-gradient(90deg, #0051c7, #322b6c);
    background-position: bottom center;
    background-size: cover;
    object-fit: cover;
    background-blend-mode: multiply;
    background-repeat: 'no-repeat';
  }

  @media (max-width: 900px) {
    /* clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%); */
    /* margin-top: 2rem; */
  }
`;

export const Overlay = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(4, 29, 85, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    background-color: rgba(4, 29, 85, 0.8);
  }
`;

export const HeaderOne = styled.h1`
  position: relative;
  background: transparent;
  max-width: 80%;
  text-transform: capitalize;
  font-size: clamp(1.3rem, -0.875rem + 8vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  color: #ffffff;
  width: clamp(400px, 8vw -1rem, 500px);

  @media (max-width: 900px) {
    font-weight: 700;
    color: rgba(229, 241, 240, 0.965);
    width: 90%;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const Text = styled.p`
  margin: 2rem 0rem 1.5rem;
  font-size: clamp(0.9rem, -0.875rem + 4vw, 1.1rem);
  line-height: 1.7rem;
  text-align: center;
  width: clamp(400px, 70vw, 800px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 900px) {
    margin: 2rem auto 1.4rem;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 85%;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 500px) {
    max-width: 90%;
  }
`;

export const ButtonContainer = styled.section`
  position: relative;
  height: 2rem;
  margin-top: 2rem;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: none;
  @media (max-width: 900px) {
    max-width: 60%;
  }

  @media (max-width: 600px) {
    max-width: 80%;
  }
  @media (max-width: 400px) {
    max-width: 90%;
  }
  @media (max-width: 300px) {
    max-width: 100%;
  }
`;
export const LinkGitHub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 45px;
  padding: 0 1rem;
  margin: 1rem;
  border-radius: 12px;
  outline: none;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: #f4743b;
  transition: 0.3s all ease-in-out;
  & span {
    color: #e2eeeef8;
    font-size: 0.9rem;
    margin-right: 0.7rem;
  }

  & svg {
    font-size: 0.5rem;
    height: 20px;
    width: 20px;
    color: #e2eeeef8;
  }

  &:hover {
    color: #e2eeeef8;
    background: #f37944da;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      border: 2px solid #f4743b;

      & span {
        color: #f4743b;
      }
      & svg {
        color: #f4743b;
      }
      &:hover {
        color: white;
        background: #f4743b;
        border: 1px solid #f4743b;
        & span {
          color: #e2eeeef8;
        }
        & svg {
          color: #e2eeeef8;
        }
      }
    `}

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }

  @media (max-width: 430px) {
    font-size: 0.6rem;
    padding: 0 0.4rem;
    margin: 0.7rem;
  }
  @media (max-width: 430px) {
    font-size: 0.6rem;
    padding: 0 0.3rem;
    margin: 0.5rem;
  }
`;

export const DownArrow = styled.img`
  position: absolute;
  bottom: 90px;
  left: 48%;
  transform: translate(0%, 50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  z-index: 20;
  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const CurveSvg = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 1000;

  & svg {
    position: relative;
    display: block;
    height: 100%;
    width: calc(103% + 1.3px);
  }

  & .main-stop {
    stop-color: #031d44;
  }

  & .alt-stop {
    stop-color: #382397;
  }
  & .shape-fill {
    /* fill: url('#gradient'); */
    fill: #f8f8f8;
  }
`;
