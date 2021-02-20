import React from 'react';
import moment from 'moment';
import {
  Card,
  Body,
  BodyContainer,
  Image,
  ArticleInfo,
  Header,
  Date,
  Title,
  PostBody,
  Tags,
  LinkTo,
} from './ListUser.styled';

function ListUser({ title, body, _id, email, image: { url }, createdAt }) {
  let date = new window.Date(createdAt);
  date = moment(date).format('MMM-Do-YYYY');
  let TextBody = body.length > 100 ? body.substr(0, 120) + ' ...' : body;
  return (
    <Card>
      <BodyContainer>
        <Image src={url} alt={title} />
        <Body>
          <ArticleInfo>
            <Header>{email}</Header>
            <Date> Published on {date}</Date>
          </ArticleInfo>
          <Title>{title}</Title>
          <PostBody>{TextBody}</PostBody>
        </Body>
      </BodyContainer>
      <Tags>
        <LinkTo to={`/blogs/${_id}`}>Read More</LinkTo>
        <LinkTo to="#">Likes</LinkTo>
      </Tags>
    </Card>
  );
}

export default ListUser;
