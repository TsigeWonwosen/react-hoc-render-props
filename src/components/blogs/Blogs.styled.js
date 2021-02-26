import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerPosts = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: ${({ featured }) => (!featured ? '6rem' : '4rem')};
  margin-bottom: ${({ featured }) => (!featured ? '4rem' : '0.1rem')};
  background-image: radial-gradient(90deg, #5c0067 0%, #00d4ff 100%);

  @media (max-width: 900px) {
    margin-top: ${({ featured }) => (!featured ? '7rem' : '0rem')};
  }
`;

export const WrapperPosts = styled.section`
  display: grid;
  justify-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: box-sizing;
  background-color: transparent;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
  gap: 2rem;
  padding: 3rem 1rem;

  overflow-x: hidden;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
    gap: 2.3rem 0;
    padding: 0rem;
    margin: 0;
    outline: none;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  color: #0b7cfa;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 3.2rem;
  padding: 1rem 0;
  z-index: 20;

  @media (max-width: 900px) {
    letter-spacing: 0.5px;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
    font-size: 2.3rem;
  }

  @media (max-width: 400px) {
    letter-spacing: 0.3px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.8rem;
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

  @media (max-width: 900px) {
    margin: 0.5rem auto 3rem;
  }
`;

export const Button = styled(Link)`
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1.5rem;
  margin: 1rem auto 4rem;
  background-color: transparent;
  border: 3px solid #f4743b;
  color: #f4743b;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #f4743b;
  }

  @media (max-width: 900px) {
    margin: 3rem 0rem 3rem;
  }
`;
