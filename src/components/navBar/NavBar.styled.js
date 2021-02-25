import styled, { css, keyframes } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const WrapperContainer = styled.div`
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  z-index: 30;
  ${(props) =>
    props.primary &&
    css`
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(163, 159, 159, 0.3);
      background-color: #031d44;
      background-image: linear-gradient(180deg, #3d0d09, #f4743b);
    `}

  @media (max-width: 900px) {
    flex-direction: column;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 94%);
    height: 120px;
  }
`;
export const Container = styled.section`
  height: 75px;
  width: 100%;

  background-color: transparent;
  display: flex;
  justify-content: space-around;
  z-index: 30;
  color: rgba(204, 211, 210, 0.965);
  padding: 0 2rem;
  transition: 0.3s ease-in-out;

  ${(props) =>
    props.primary &&
    css`
      background-color: #0a1128;
      background-image: linear-gradient(45deg, #0a1128, #0496ff 90%);
    `}

  @media (max-width: 900px) {
    flex-direction: column;
    height: 110px;
    padding: 0 1rem;
    background-color: #0a1128;
    background-image: linear-gradient(45deg, #0a1128, #0496ff 90%);
  }
`;
export const Content = styled.section`
  max-width: 1200px;
  height: 75px;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 110px;
  }
`;
export const LogoName = styled.h3`
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Karla', sans-serif;
  background-image: linear-gradient(
    to right,
    green 0%,
    hsl(49, 100%, 50%) 50%,
    #e52e71 100%
  );
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) =>
    props.move &&
    css`
      animation: ${props.move} 4s;
      animation-iteration-count: infinite;
    `}
`;

export const ListContainer = styled.ul`
  width: 100%;
  height: 80%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  max-width: 34%;
  margin-right: 3.4rem;
  @media (max-width: 1000px) {
    max-width: 50%;
  }
  @media (max-width: 900px) {
    max-width: 90%;
    margin-right: 0rem;
    height: 50%;
  }
`;
export const List = styled.li`
  height: 75%;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
  list-style: none;
  border-radius: ${({ contact }) => (contact ? '10px' : '')};
  outline: none;
  cursor: pointer;
  color: #f4f4f4f4;
  border: 2px solid ${({ contact }) => (contact ? '#f4743b' : 'transparent')};
  border-bottom: 2px solid
    ${({ contact }) => (contact ? '#f4743b' : 'transparent')};
  font-size: 1.1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ contact }) => (contact ? '#f4f4f4' : '')};
    border-bottom: 2px solid
      ${({ contact }) => (contact ? 'transparent' : '#f4743b')};
    background-color: ${({ contact }) => (contact ? '#f4743b' : '')};
  }
  & a {
    padding: 0;
    margin: 0 0 -3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
    height: 101%;
    border-bottom: 3px solid transparent;
  }
  & a.active {
    border-bottom: 3px solid #f4743b;
  }
`;

export const Logo = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-left;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 20%;
  transition: animation 0.5s ease-in-out;
  cursor: pointer;
  & span {
    padding: 0;
    margin: 0;
    color: red !important;
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    margin-left: 2rem;
  }
`;

export const Flag = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  width: auto;
  max-width: 80px;
  display: flex;
  padding-left: 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.8);

  @media (max-width: 900px) {
    top: 1rem;
    right: 1.5rem;
    border-left: 1px solid transparent;
  }
  @media (max-width: 500px) {
    top: 15px;
    right: 2rem;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 25px;
`;

export const moveVertically = keyframes`
       0% {
    background-image: linear-gradient(
    ##f4743b;4,
      #b4e52e 
    );
  }

  100% {
    background-image: linear-gradient(
     
      rgba(250, 200, 10,0.8) ,
      #FFFF 
    );
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
