import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import Header from "./Header";
import endpoints from "../constants/EndPoint";
import FallbackSpinner from "./FallbackSpinner";
import "../css/experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";

const styles = {
  ulStyle: {
    listStylePosition: "outside",
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: "inline-block",
  },
  inlineChild: {
    display: "inline-block",
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Container>
            <Timeline>
              {data.map((item) => (
                  <TimelineItem
                    key={item.title + item.dateText}
                    style={styles.itemStyle}
                  >
                    <h2 className="item-title">{item.title}</h2>
                    <div style={styles.subtitleContainerStyle}>
                      <h4 style={{ ...styles.subtitleStyle }}>{item.subtitle}</h4>
                      {item.workType && <h5 style={styles.inlineChild}>&nbsp;· {item.workType}</h5>}
                    </div>
                    <ul style={styles.ulStyle}>
                      {item.workDescription.map((point, index) => (
                        <div key={index}>
                          <li>
                            <ReactMarkdown
                              children={point}
                              components={{
                                p: "span",
                              }}
                            />
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </TimelineItem>
              ))}
            </Timeline>
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;
