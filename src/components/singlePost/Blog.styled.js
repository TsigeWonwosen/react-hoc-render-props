import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 5rem auto;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  width: 70%;
  color: blue;
  margin: 7rem auto 1rem;
  border-radius: 15px;
  position: relative;

  @media (max-width: 1240px) {
    width: 85%;
    margin: 9rem auto 1rem;
  }
  @media (max-width: 900px) {
    width: 80%;
    margin: 9rem auto 1rem;
  }
  @media (max-width: 550px) {
    width: 90%;
    margin: 9rem auto 0.3rem;
  }
  @media (max-width: 400px) {
    width: 100%;
    margin: 6rem auto 1rem;
  }
`;

export const ImageSingle = styled.img`
  padding: 0;
  margin: 0;
  max-width: 100%;
  max-height: 50%;
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: 20% 70%;
  border-radius: 15px 15px 0 0;

  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 400px) {
    height: 270px;
  }
`;

export const BlogInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 360px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    top: 342px;
    left: 0;
  }
  @media (max-width: 700px) {
    top: 360px;
    left: 0;
  }
  @media (max-width: 500px) {
    top: 228px;
    left: 0;
  }

  @media (max-width: 400px) {
    top: 185px;
    left: 0;
  }
  @media (max-width: 300px) {
    top: 205px;
    left: 0;
  }
`;

export const Button = styled(Link)`
  padding: 9px 1.5rem;
  border-radius: 5px;
  margin: 2rem 3rem 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  width: auto;
  border: 2px solid #f4743b;
  color: #f4743b;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #f4743b;
    color: white;
  }
`;
export const PublishAt = styled.h5`
  width: auto;
  font-size: 1rem;
  padding: 0.4rem 3rem 0.6rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 550px) {
    font-size: 0.7rem;
    padding: 0.3rem 3rem 0.4rem;
  }
  @media (max-width: 400px) {
    font-size: 0.6rem;
    padding: 0.2rem 0 0.2rem 3rem;
  }
`;

export const Title = styled.h2`
  width: auto;
  font-size: 1.5rem;
  padding: 1rem 3rem 0.5rem;
  text-align: left;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.94);

  @media (max-width: 950px) {
    font-size: 1rem;
    padding: 0.5rem 3rem 0.5rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    padding: 0.5rem 3rem 0.5rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.5rem 3rem 0.5rem;
  }

  @media (max-width: 300px) {
    font-size: 0.7rem;
    padding: 0.3rem 0 0.5rem 3rem;
  }
`;

export const Body = styled.section`
  font-size: 1rem;
  padding: 0.5rem 3rem;
  margin: 0.5rem 0 3rem;
  font-weight: 300;
  line-height: 1.5;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0.1rem;
    color: #442333;
    font-size: 1.4rem;
  }
  & p {
    margin: 1.2rem 0rem;
    font-size: 1rem;
    color: #1f0709;
  }

  & > ol > li {
    margin: 1.3rem 0.1rem;
    color: #000000;
    font-size: 1.4rem;
  }

  & > ol > li::marker {
    color: rgb(185, 130, 175);
    padding: 1rem 2px;
    font-size: 1.6rem;
  }

  & p img {
    border-radius: 10px;
    margin: 1.5rem 0rem;
  }

  @media (max-width: 500px) {
    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1rem 0.1rem;
      color: #00000099;
      font-size: 0.9rem;
    }
  }
`;
