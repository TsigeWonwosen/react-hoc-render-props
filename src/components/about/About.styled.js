import styled from 'styled-components';
import { ReactComponent as Profile } from '../../img/profilePic.svg';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 2rem;
  margin: 1rem 0 4rem 0;
  z-index: 10;
  /* border: 1px solid #fff; */

  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

export const AboutText = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 2rem;
  @media (max-width: 900px) {
    width: 95%;
  }
`;
export const ImageContainer = styled.section`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  padding: 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const Image = styled(Profile)`
  width: 400px;
  height: 400px;
  max-width: 650px;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  object-fit: cover;
  position: center center;
`;
export const Title = styled.h1`
  font-size: clamp(1rem, -0.875rem + 8vw, 2rem);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
`;
export const Paragraph = styled.p`
  max-width: clamp(600px, 8vw + 10px, 700px);
  font-size: clamp(0.9rem, -0.875rem + 8vw, 1rem);
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Open Sans', sans-serif;
  line-height: 1.9rem;
  text-align: left;
`;

export const Line = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  padding: 0;
  height: 0.2rem;
  background-color: rgba(165, 167, 182, 0.96);
  width: 25%;
`;
