import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.section`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  z-index: 30;
  color: rgba(204, 211, 210, 0.965);
  padding: 0 1.5rem;
  transition: 0.3s ease-in-out;

  ${(props) =>
    props.primary &&
    css`
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(163, 159, 159, 0.3);
      background-color: #031d44;
      background-image: linear-gradient(90deg, #121f56 0%, #0496ff 100%);
    `}

  @media (max-width: 900px) {
    flex-direction: column;
    height: 90px;
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
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  max-width: 34%;
  margin-right: 3.4rem;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-right: 0rem;
  }
`;
export const List = styled.li`
  height: 60%;
  max-width: 100px;
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
  border: 2px solid ${({ contact }) => (contact ? '#fca311' : 'transparent')};
  border-bottom: 2px solid
    ${({ contact }) => (contact ? '#FCA311' : 'transparent')};
  font-size: 1.1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ contact }) => (contact ? '#f4f4f4' : '')};
    border-bottom: 2px solid
      ${({ contact }) => (contact ? 'transparent' : '#fca311')};
    background-color: ${({ contact }) => (contact ? '#fca311' : '')};
  }
`;

export const Logo = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20%;
  transition: animation 0.4s ease-in-out;
  cursor: pointer;
  @media (max-width: 900px) {
    max-width: 40%;
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
    top: 10px;
    right: 10px;
    border-left: 1px solid transparent;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 25px;
`;

export const moveVertically = keyframes`
       0% {
    background-image: linear-gradient(
      to right,
      rgb(0, 128, 100) 0%,
      hsl(59, 100%, 50%) 50%,
      #b4e52e 100%
    );
  }

  100% {
    background-image: linear-gradient(
      to right,
      red 0%,
      hsl(54, 100%, 50%) 50%,
      #d62ee5 100%
    );
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
