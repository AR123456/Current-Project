import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
const StyledCard = styled(Card)`
  text-align: center;
  h2 {
    color: black;
  }
`;

const DayDetail = props => {
  return (
    <StyledCard>
      <CardBody>
        <h2>Day Detail for {props.day} </h2>
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
          <strong>Percip:</strong> {props.precip}
        </p>
        <p>
          <strong>Relative Humidity:</strong> {props.rh}%
        </p>
        <p>
          <strong>Barometric Pressure:</strong> {props.pres}
        </p>
        <p>
          <strong>Ozone:</strong> {props.ozone}
        </p>
        <p>
          <strong>UV:</strong> {props.uv}
        </p>
      </CardBody>
    </StyledCard>
  );
};

export default DayDetail;
