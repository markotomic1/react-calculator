import React from "react";
import Buttons from "./Buttons";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      display: "",
    };
  }
  handleClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <Buttons click={this.handleClick} />
      </div>
    );
  }
}

export default Calc;
