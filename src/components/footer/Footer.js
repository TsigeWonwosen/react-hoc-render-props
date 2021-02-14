import React from 'react';

import {
  FooterWrapper,
  Grid,
  Header,
  Title,
  Line,
  Span,
  Body,
  Card,
  BodyTitle,
  UnOrderList,
  List,
} from './Footer.styled';
function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        <Header>
          <Title>
            Created by <Span>Wonde.shi</Span>
          </Title>
          <Line />
        </Header>
      </Grid>
      <Body>
        <Card>
          <BodyTitle>TECH</BodyTitle>
          <Line />
          <UnOrderList>
            <List>JavaScript</List>
            <List>React</List>
            <List>Node</List>
            <List>Mongoose</List>
            <List>Express</List>
          </UnOrderList>
        </Card>
        <Card>
          <BodyTitle>FAMILY</BodyTitle>
          <Line />

          <UnOrderList>
            <List>Heroku</List>
            <List>Stripe</List>
            <List>Netlify</List>
            <List>Cloudinary</List>
          </UnOrderList>
        </Card>

        <Card>
          <BodyTitle> CONTACT</BodyTitle>
          <Line />

          <UnOrderList>
            <List>Email</List>
            <List>Phone</List>
            <List>Mobile</List>
            <List>Address</List>
          </UnOrderList>
        </Card>
        <Card>
          <BodyTitle> FOLLOW</BodyTitle>
          <Line />

          <UnOrderList>
            <List>Twitter</List>
            <List>GitHub</List>
            <List>Facebook</List>
            <List>LinkedIn</List>
            <List>CodePen</List>
          </UnOrderList>
        </Card>
      </Body>
    </FooterWrapper>
  );
}

export default Footer;
