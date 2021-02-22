import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 70px;
  padding: 0 1rem;
  margin: 2rem 0 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.486);
  background: linear-gradient(150deg, #39ef74, #4600f1 100%);
  box-shadow: -1px 1px 1rem rgba(255, 255, 255, 0.234);

  @media (max-width: 900px) {
    margin: 0.1rem 0 2rem;
  }
`;

export const SinglePaginationItem = styled.span`
  width: 30px;
  border: 1px solid rgba(244, 255, 255, 0.4);
  color: #ffffff;
  border-radius: 7px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translate(0, 10px);
    transform: rotateY(2deg);
    border: 1px solid #1535c244;
    color: #f8f0f0;
    background-color: #1535c2;
  }
  & a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    padding: 0;
  }
`;
export const Button = styled(Link)`
  color: white;
  border-color: white;
`;
