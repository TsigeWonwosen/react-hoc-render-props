import React from 'react';

import {
  Wrapper,
  Title,
  Paragraph,
  Content,
  Header,
  Line,
} from './Service.styled';
function Service() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>Service</Title>
          <Line />
        </Header>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          doloribus sapiente. Explicabo, fugit expedita perspiciatis sint
          consectetur libero nulla sed placeat odit dolor quos autem
          consequuntur, quia, inventore accusamus rem?
        </Paragraph>
      </Content>
    </Wrapper>
  );
}

export default Service;
