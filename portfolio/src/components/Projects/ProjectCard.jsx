import { Badge, Button, Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: "left",
  },
  linkStyle: {
    textDecoration: "none",
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = (props) => {
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  const { project } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
        }}
      >
        <Card.Img variant="top" src={project?.image} />
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>{parseBodyText(project.bodyText)}</Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link, index) => (
            <div key={index}>
              <Button
                key={link.href}
                style={styles.buttonStyle}
                onClick={() => window.open(link.href, "_blank")}
              >
                {link.text}
              </Button>
            </div>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer >
            {project.tags.map((tag, index) => (
              <div key={index}>
                <Badge
                  key={tag}
                  pill
                  style={styles.badgeStyle}
                >
                  {tag}
                </Badge>
              </div>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
