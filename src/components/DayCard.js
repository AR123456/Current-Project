import React from "react";
import styled from "styled-components";
import { Col, Card, CardHeader, CardBody } from "reactstrap";

const teal = "#17a2b8";

const outline = `2px solid ${teal}`;
const CardWrapper = styled.div`
  cursor: pointer;
  .card {
    border-width: 2px;
  }
  &:hover {
    .card {
      border: ${outline};
    }
  }
  .card {
    border: ${props => (props.isActive ? outline : null)};
    text-align: center;
  }
  .card-header {
    background: ${props => (props.isActive ? teal : null)};
    border-bottom: ${props => (props.isActive ? outline : null)};
    color: ${props => (props.isActive ? "white" : null)};
  }
  img {
    width: 75px;
  }
`;

const DayCard = props => {
  console.log(props);
  return (
    <Col onClick={props.selectDay}>
      <CardWrapper isActive={props.isActive}>
        <Card>
          <CardHeader>{props.day}</CardHeader>
          <CardBody>
            <h3>
              <strong>{props.current.toFixed(1)}°</strong>
            </h3>
            <p>
              <img
                src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`}
                alt={props.description}
              />
            </p>
            <p>
              <strong>High:</strong> {props.high.toFixed(1)}°
            </p>
            <p>
              <strong>Low:</strong> {props.low.toFixed(1)}°
            </p>
            <p>
              <strong>Percip: </strong>
              {props.precip}
            </p>
          </CardBody>
        </Card>
      </CardWrapper>
    </Col>
  );
};
export default DayCard;
