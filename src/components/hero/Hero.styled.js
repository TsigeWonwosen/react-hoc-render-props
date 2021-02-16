import styled, { css } from 'styled-components';
import HeroImage from '../../img/backgraund2.jpg';

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  z-index: 10;
  margin-top: 0;
  padding-top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 89%, 0% 80%);
  filter: sepia(0.4);

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
    background-image: url(${HeroImage});
    background-position: top center;
    background-size: cover;
    object-fit: cover;
    background-repeat: 'no-repeat';
    opacity: 0.48;
  }

  @media (max-width: 900px) {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 90%);
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
`;

export const HeaderOne = styled.h1`
  position: relative;
  background: transparent;
  font-size: clamp(1rem, -0.875rem + 8vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  color: rgba(229, 241, 240, 0.965);
  width: clamp(400px, 8vw -1rem, 500px);
`;

export const Text = styled.p`
  margin: 2rem 0rem 1.5rem;
  font-size: 1rem;
  font-size: clamp(0.9rem, -0.875rem + 4vw, 1.1rem);
  line-height: 1.5rem;
  max-width: clamp(400px, 80vw, 700px);
  font-weight: 600;

  @media (max-width: 900px) {
    margin: 1.5rem 0rem 1rem;
    line-height: 1.3rem;
  }
`;

export const ButtonContainer = styled.section`
  position: relative;
  height: 2rem;
  margin-top: 2rem;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: none;
  @media (max-width: 900px) {
    max-width: 300px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1560px;
  padding: 10px 1.7rem;
  margin: 1rem;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: #fca311;
  color: #e2eeeef8;
  &:hover {
    color: #fca311;
    border: 1px solid white;
    background: transparent;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      border: 1px solid #fca311;
      color: white;

      &:hover {
        color: white;
        background: #fca311;
      }
    `}

  @media (max-width: 900px) {
    max-width: 80px;
    padding: 10px 1rem;
    font-size: 1rem;
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
  z-index: 1000;
  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
  }
`;
