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
  margin: 3rem 0 4rem 0;
  z-index: 10;
  @media (max-width: 1100px) {
    margin: 6rem 0 4rem 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 4rem 0;
    padding: 2rem 1rem;
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
    padding: 2rem 0.5rem;
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
export const Title = styled.h2`
  font-size: clamp(2.4rem, -0.875rem + 8vw, 3rem);
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  text-transform: capitalize;
  color: #0b7cfa;
`;
export const Paragraph = styled.p`
  max-width: clamp(600px, 8vw + 10px, 700px);
  font-size: clamp(0.9rem, -0.875rem + 8vw, 1rem);
  color: #2f2e41;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.9rem;
  text-align: left;
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
