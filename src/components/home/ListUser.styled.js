import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  position: relative;
  display: flex;
  position: relative;
  height: 200px;
  max-width: 1000px;
  width: 90%;
  border-radius: 5px;
  transform-style: preserve-3d;
  perspective: 500px;
  backdrop-filter: blur(10px);
  background: linear-gradient(150deg, #39ef74, #4600f1);
  box-shadow: 0.2rem -0.1rem 3rem rgba(0, 0, 0, 0.25);
  transition: 0.3s all ease-in-out;
  z-index: 20;
  padding: 0;
  margin: 0;
  overflow: hidden;
  opacity: 0.8;

  @media (max-width: 900px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    height: 270px;
  }
  &:hover {
    opacity: 1;
    transform: translateY(-10px);
    transform: rotateY(2deg);
    z-index: 10;
  }

  &:after {
    content: '';
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: -50%;
    right: -5%;
    background-color: rgba(205, 240, 208, 0.15);
    border-radius: 50%;
    z-index: -1;

    @media (max-width: 700px) {
      width: 200px;
      height: 200px;
    }
  }
  &:before {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: 20%;
    left: 35%;
    background-color: rgba(223, 248, 17, 0.15);
    border-radius: 50%;
    z-index: -1;
  }
`;
export const Image = styled.div`
  background: url(${({ src }) => src && src});
  width: 45%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  background-position: 30% 15%;
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  background-color: #4600f1;
  background-blend-mode: multiply;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    width: 40%;
  }
`;

export const ArticleInfo = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.1rem 0;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Date = styled.h6`
  font-size: 0.7rem;
  color: rgba(255, 254, 254, 0.4);
  z-index: 30;
  width: auto;
  margin-right: auto;
`;
export const Header = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.7rem;
  margin-right: 0.9rem;
  width: auto;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 500px) {
    margin-right: 0.4rem;
  }
`;
export const BodyContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Body = styled.div`
  padding: 0.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 0.5rem;

  @media (max-width: 700px) {
    padding: 0.5rem 1rem;
  }
`;

export const Title = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.896);

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
`;
export const PostBody = styled.h6`
  font-size: 0.87rem;
  margin-top: 0.5rem;
  line-height: 1.6rem;
  color: rgba(255, 255, 255, 0.721);

  @media (max-width: 500px) {
    margin-top: 0.3rem;

    font-size: 0.7rem;
  }
`;

export const Tags = styled.div`
  width: 50%;
  height: 15%;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 2;
  background-color: transparent;
  opacity: 1;
  transition: 0.3s all ease-in-out;
  ${Card}:hover & {
    opacity: 1;
  }
  &:hover {
    color: #b9b9e9;
    background-clip: text;
    border-color: rgb(75, 228, 233);
  }

  @media (max-width: 700px) {
    height: 13%;
  }
`;
export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 800;
  font-size: 0.8rem;
  height: 100%;
  color: #cfcfe0;
  text-transform: capitalize;
  border: 1px solid #cfcfe0;
  border-radius: 0 0 12px;
  position: relative;
  max-width: 40%;
  transition: hover 0.3s ease-in-out;
  & span {
    color: #cfcfe0;
    margin-left: 1rem;
  }
  &:hover {
    border: 1px solid #39ef74;
    background: linear-gradient(90deg, #39ef74, #4600f1 100%);
  }
`;
