import React from 'react';
import moment from 'moment';
import { BsArrowRight } from 'react-icons/bs';
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
  let TextBody = body.length > 100 ? body.substr(0, 200) + ' ...' : body;
  return (
    <Card>
      <BodyContainer>
        <Image src={url} alt={title} />
        <Body>
          <div>
            <Title>{title.substr(0, 60)}</Title>
            <ArticleInfo>
              <Header>{email}</Header>
              <Date> {date}</Date>
            </ArticleInfo>
          </div>
          <PostBody>{TextBody}</PostBody>
          <Tags>
            <LinkTo to={`/blogs/${_id}`}>
              <span>Read More</span>
              <BsArrowRight />
            </LinkTo>
          </Tags>
        </Body>
      </BodyContainer>
    </Card>
  );
}

export default ListUser;
