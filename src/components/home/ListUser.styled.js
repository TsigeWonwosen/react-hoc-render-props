import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 400px;
  max-width: 500px;
  min-width: 300px;
  border-radius: 12px;
  transform-style: preserve-3d;
  perspective: 500px;
  backdrop-filter: blur(10px);
  background: linear-gradient(150deg, #39ef74, #4600f1 100%);
  box-shadow: -0.1rem 0 1rem #000;
  transition: 0.4s all ease-in-out;
  z-index: 20;
  padding: 0;
  margin: 0;
  overflow: hidden;
  opacity: 0.7;

  @media (max-width: 900px) {
    width: 400px;
    margin: 0;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    transform: rotateY(2deg);
    z-index: 10;
  }

  &:after {
    content: '';
    width: 340px;
    height: 340px;
    position: absolute;
    bottom: -50%;
    right: -30%;
    background-color: rgba(205, 240, 208, 0.15);
    border-radius: 50%;
    z-index: -1;
  }
  &:before {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: 170px;
    left: 1px;
    background-color: rgba(223, 248, 17, 0.15);
    border-radius: 50%;
    z-index: -1;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 45%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: center;
  margin: 0;
  padding: 0;
`;

export const ArticleInfo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0;
  position: absolute;
  width: 100%;
  top: 124px;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(70, 0, 241, 0.8),
    rgba(57, 239, 116, 0.01)
  );
`;

export const Date = styled.h6`
  font-size: 0.74rem;
  color: rgba(255, 254, 254, 1);
  padding-left: 2rem;
  z-index: 30;
`;
export const Header = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1rem;
  padding-left: 2rem;
  color: rgba(255, 255, 255, 1);
`;
export const BodyContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Body = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.5rem;
`;

export const Title = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.896);
`;
export const PostBody = styled.h6`
  font-size: 0.8rem;
  margin-top: 0.7rem;
  color: rgba(255, 255, 255, 0.721);
`;

export const Tags = styled.div`
  width: 100%;
  height: 10%;
  padding: 0rem 2rem;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: center;
  line-height: 2;
  background-color: transparent;
  opacity: 0;
  transition: 0.3s all ease-in-out;
  ${Card}:hover & {
    opacity: 1;
  }
  &:hover {
    color: #b9b9e9;
    background-clip: text;
    border-color: rgb(75, 228, 233);
  }
`;
export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  color: #cfcfe0;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 1px solid #cfcfe0;
  border-radius: 12px;
  padding: 0.5rem 0.4rem;
  position: relative;
  max-width: 100%;
  transition: hover 0.3s ease-in-out;
  &:hover {
    border: 1px solid #39ef74;
    transform: translateY(-1px);
    background: linear-gradient(150deg, #39ef74, #4600f1 100%);
  }
`;
