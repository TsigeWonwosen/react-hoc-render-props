import { project_Db } from "./projectData";
import {
  Line,
  CardContainer,
  CardHeader,
  CardList,
  Card,
  Date,
  HeaderTitle,
  Tags,
  Title,
  Link,
  Image,
  Author,
  AuthorAvatar,
  AuthorName,
  Name,
  Prefix,
} from "./Card.styled";
import "./card.css";

function Projects() {
  return (
    <CardContainer id="project">
      <Title>Other Projects</Title>
      <Line />
      <CardList className="card-list">
        {project_Db.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <Date>{project.date}</Date>
              <HeaderTitle>{project.title}</HeaderTitle>
            </CardHeader>

            <Author>
              <AuthorAvatar href="!#">
                <Image
                  src={project.img}
                  alt={project.author}
                />
              </AuthorAvatar>
              <svg
                className="half-circle"
                viewBox="0 0 106 57"
              >
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <AuthorName>
                <Prefix>{project.info}</Prefix>
                <Name>{project.author}</Name>
              </AuthorName>
            </Author>

            <Tags>
              {project.tags.map((tag) => (
                <Link
                  to="#"
                  key={tag}
                >
                  {tag}
                </Link>
              ))}
            </Tags>
          </Card>
        ))}
      </CardList>
    </CardContainer>
  );
}

export default Projects;
