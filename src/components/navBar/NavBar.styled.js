import styled, { css, keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";

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
  position: relative;
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
  max-width: 1280px;
  height: 75px;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
  }
`;
export const LogoName = styled.h3`
  letter-spacing: 1px;
  font-weight: bold;
  font-family: "Karla", sans-serif;
  background-image: linear-gradient(to right, white, #f4743b);
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) =>
    props.move &&
    css`
      animation: ${props.move} 10s;
      animation-iteration-count: infinite;
    `}
`;

export const ListContainer = styled.ul`
  width: auto;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  gap: 10px;

  @media (max-width: 1000px) {
    display: none;
    max-width: 50%;
  }
  @media (max-width: 900px) {
    max-width: 90%;
    margin-right: 0rem;
    height: 50%;
  }
`;
export const List = styled.li`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 5px;
  text-decoration: none;
  list-style: none;
  border-radius: ${({ contact }) => (contact ? "12px" : "")};
  outline: none;
  cursor: pointer;
  color: #f4f4f4f4;
  border: 3px solid ${({ contact }) => (contact ? "#f4743b" : "transparent")};
  border-bottom: 3px solid
    ${({ contact }) => (contact ? "#f4743b" : "transparent")};
  font-size: 1.1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ contact }) => (contact ? "#f4f4f4" : "")};
    border-bottom: 3px solid
      ${({ contact }) => (contact ? "transparent" : "#f4743b")};
    background-color: ${({ contact }) => (contact ? "#f4743b" : "")};
  }
`;

export const Logo = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-left;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 20%;
  transition: animation 0.5s ease-in-out;
  cursor: pointer;
  & span {
    display: inline;
    font-size: 2rem;
    & {
      color: red;
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    margin-left: 2rem;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 25px;
`;

export const moveVertically = keyframes`
       0% {
    background-image: linear-gradient(180deg,
    #f4743b,
       #FFFF 
    );
  }

  100% {
    background-image: linear-gradient(180deg,
     
      rgba(250, 200, 10,0.8) ,
      #FFFF 
    );
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const MobileMenuContainer = styled.div`
  display: none;
  position: relative;
  margin-right: auto;
  width: auto;
  height: auto;
  z-index: 500;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 300px;
  height: 300px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1;

  color: wheat;
`;

export const ListWraper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 400px;
  border-radius: 4px;
  background: yellowgreen;
`;
