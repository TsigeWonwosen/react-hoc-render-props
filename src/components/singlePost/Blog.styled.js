import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height: 90vh;
  width: 100vw;
  margin: 5rem auto 5rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  width: 70%;
  color: blue;
  margin: 7rem auto 2rem;
  border-radius: 15px;
  position: relative;
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
`;

export const BlogInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 334px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Button = styled(Link)`
  padding: 7px 1.5rem;
  border-radius: 5px;
  margin: 1.3rem 3rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  width: auto;
  border: 1px solid #fca311;
  color: #fca311;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  z-index: 30;

  &:hover {
    background: #fca311;
    color: white;
  }
`;
export const PublishAt = styled.h5`
  width: auto;
  font-size: 0.9rem;
  padding: 0.4rem 3rem 0.6rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
`;

export const Title = styled.h2`
  width: auto;
  font-size: 1.8rem;
  padding: 1rem 3rem;
  text-align: left;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.94);
`;

export const Body = styled.section`
  font-size: 1rem;
  padding: 1rem 3rem;
  color: #848c8e;
  margin: 1rem 0 3rem;
  font-weight: 300;
  line-height: 1.5;

  & > ol,
  ul > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5rem 0.1rem;
    color: #4222;
    font-size: 1.4rem;
  }

  & > p {
    margin: 1.2rem 0rem;
  }

  & > ul li::marker {
    font-size: 150%;
    color: rgb(175, 230, 175);
    padding: 1rem 2px;
  }

  & > ol li::marker {
    color: rgb(214, 209, 161);
    font-weight: bold;
    padding: 1.5rem 2px;
  }

  & > p > img {
    border-radius: 10px;
    margin: 1.5rem 0rem;
  }
`;
