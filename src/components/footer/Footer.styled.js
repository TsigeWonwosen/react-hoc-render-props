import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin-top: 2rem;
  padding: 2rem 2rem 2rem;
  background-color: #111111;
  gap: 0.4rem;
  justify-items: center;
`;

export const Grid = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.4rem;
`;
export const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 90%;
  margin-top: 1rem;
  padding: 1rem 2rem;
  border-radius: 2px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: 1px;
  color: rgba(204, 210, 216, 0.801);
  text-align: left;
`;

export const Line = styled.span`
  margin-top: 0.8rem;
  padding: 0;
  height: 0.2rem;
  background-color: rgba(165, 167, 182, 0.76);
  width: 30%;
`;

export const Body = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.4rem;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 90%;
  margin-top: 1rem;
  padding: 1rem 2rem;
  border-radius: 2px;
`;

export const BodyTitle = styled.h2`
  font-size: 1rem;
  color: rgba(230, 110, 41, 0.808);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: left;
`;

export const UnOrderList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  padding: 0;
`;

export const List = styled.li`
  list-style: none;
  padding: 0;
  color: rgba(197, 199, 201, 0.658);
  line-height: 1.5rem;
  padding-top: 0.4rem;
  font-size: 0.96rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  width: auto;
  border-bottom: 1px solid transparent;
  transition: hover 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`;

export const Span = styled.span`
  color: rgba(182, 99, 43, 0.644);
`;
