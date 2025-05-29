import moment from "moment";
import { BsArrowRight } from "react-icons/bs";
import sampleImage from "../../img/screen-post-.jpg";
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
} from "./ListUser.styled";

function ListUser({ title, body, id, email, image, createdAt }) {
  let date = new window.Date(createdAt);
  date = moment(date).format("MMM-Do-YYYY");
  let TextBody = body.length > 180 ? body.substr(0, 180) + " . . ." : body;
  return (
    <Card>
      <BodyContainer>
        <Image
          src={sampleImage}
          alt={title}
        />
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
            <LinkTo to={`/blogs/${id}`}>
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
