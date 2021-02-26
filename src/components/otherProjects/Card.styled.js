import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0 0;
  margin-bottom: -5px;
  padding: 6rem 1rem 3rem;
  box-sizing: border-box;
  color: white;
  font-family: 'DM Mono', monospace;
  background: linear-gradient(90deg, #3296f3, #0652c7);
  clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 100%);
`;

export const Title = styled.h2`
  font-size: clamp(2rem, -0.875rem + 8vw, 3rem);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.8);
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

export const CardList = styled.section`
  /* background-color: #080855ab; */
  display: flex;
  padding: 5rem 3rem;
  overflow-x: scroll;
`;

export const Card = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background: linear-gradient(90deg, #4592f4, white, #0b1a3711);
  box-shadow: -1rem 0 3rem #000;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1rem);
    transform: rotate3d(1, 1, 1, 4deg);
  }
  &:hover ~ & {
    transform: translateX(130px);
  }
  &:not(:first-child) {
    margin-left: -130px;
  }
`;

export const CardHeader = styled.header`
  margin-bottom: auto;
  background-color: transparent;
  text-transform: capitalize;
`;

export const Date = styled.span`
  font-size: 14px;
  margin: 0 0 1rem;
  color: #0859cf;
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
  margin: 0.25rem 0 auto;
  cursor: pointer;
  text-transform: capitalize;
  color: #0859cf;
`;

export const Author = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
  background-color: transparent;
`;

export const AuthorAvatar = styled.a``;

export const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  filter: grayscale(10%);
  margin: 16px 10px;
`;

export const AuthorName = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #0859cf;
`;

export const Prefix = styled.div`
  background-color: transparent;
  margin: 0.25rem 0 auto;
  cursor: pointer;
  font-size: 1rem;
  color: '#0859CF';
`;

export const Name = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #0859cf;
`;

export const Tags = styled.div`
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;
  background-color: transparent;
  border: 1px solid rgba(22, 32, 77, 0.4);
  border-radius: 10px;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 2px solid #421d839f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;

  &:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    background-clip: text;
    border-color: rgb(40, 49, 99);
  }
`;
