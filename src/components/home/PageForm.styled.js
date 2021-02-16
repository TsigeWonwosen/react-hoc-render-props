import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 75px;
  padding: 0 1rem;
  margin: 2rem 0 3rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.486);
  background: linear-gradient(150deg, #39ef74, #4600f1 100%);
  box-shadow: -1px 1px 2rem rgba(255, 255, 255, 0.534);

  @media (max-width: 900px) {
    width: 90%;
    margin: 4rem 0 0.2rem;
  }
`;

export const SinglePaginationItem = styled.span`
  display: flex;
  max-width: 90%;
  padding: 3px 13px;
  border: 1px solid #0f2cad;
  color: #ffffff;
  border-radius: 10px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translate(0, 10px);
    transform: rotateY(2deg);
    border: 1px solid #1535c2;
    color: #f8f0f0;
    background-color: #1535c2;
  }

  @media (max-width: 900px) {
    max-width: 90%;
    padding: 3px 8px;
    margin: 0 1px;
  }
`;
