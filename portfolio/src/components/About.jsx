import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import endpoints from "../constants/EndPoint";
import FallbackSpinner from "./FallbackSpinner";
import PropTypes from "prop-types";
import Header from "./Header";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

function About(props) {
  const { header } = props;  
  const [data, setData] = useState(null);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  useEffect(() => {
    fetch(endpoints.about, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            // <Fade>
              <Row>
                <Col style={styles.introTextContainer}>{parseIntro(data.about)}</Col>
                <Col style={styles.introImageContainer}>
                  <img src={data?.imageSource} alt="profile" />
                </Col>
              </Row>
            // </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
