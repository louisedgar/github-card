import React, { Component } from "react";
import Card from "./Card";

export class CardList extends Component {
  render() {
    const profiles = this.props.profiles.map((profile, index) => (
      <Card {...profile} key={index} />
    ));
    return <div>{profiles}</div>;
  }
}

export default CardList;
