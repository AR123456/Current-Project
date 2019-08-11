import React, { Component } from "react";
// import styled from "styled-components";
import moment from "moment";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetail from "./components/DayDetail";
import data from "./data/sample.json";

class App extends Component {
  state = {
    ///days: [],
    days: data.data,
    selectDay: null
  };
  componentDidMount() {
    //
    console.log(this.state.days[0]);
  }
  selectDay = day => {
    this.setState({ selectedDay: day });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <h1>Weather for location Here</h1>
          </Col>
          <Col md={5}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          {this.state.days.map(day => (
            <DayCard
              key={day.ts}
              current={day.temp}
              high={day.max_temp}
              low={day.min_temp}
              precip={day.pop}
              icon={day.weather.icon}
              description={day.description}
              day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
              selectDay={() => this.selectDay(day)}
              isActive={day === this.state.selectedDay}
            />
          ))}
        </Row>
        <Row>
          <Col>
            {this.state.selectedDay ? (
              <DayDetail
                current={this.state.selectedDay.temp}
                high={this.state.selectedDay.max_temp}
                low={this.state.selectedDay.min_temp}
                precip={this.state.selectedDay.pop}
                icon={this.state.selectedDay.weather.icon}
                description={this.state.selectedDay.description}
                day={moment(
                  this.state.selectedDay.valid_date,
                  "YYYY-MM-DD"
                ).format("dddd, MMMM Do, YYYY")}
                rh={this.state.selectedDay.rh}
                pres={this.state.selectedDay.pres}
                ozone={this.state.selectedDay.ozone}
                uv={this.state.selectedDay.uv}
              />
            ) : (
              <h2>Choose a day above to get more details!</h2>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
