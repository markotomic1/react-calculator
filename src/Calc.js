import React from "react";
import Buttons from "./Buttons";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);

    this.state = {
      display: "0",
      operation: "",
    };
  }
  handleClick(event) {
    if (this.state.display === "0") {
      this.setState({
        display: event.target.value,
      });
    } else {
      this.setState({
        display: (this.state.display += event.target.value),
      });
    }
  }

  handleClear() {
    this.setState({
      display: "0",
    });
  }
  handleEquals() {
    const num = this.state.display;

    this.setState({
      display: eval(num),
    });
  }

  render() {
    return (
      <div>
        <Buttons
          onClick={this.handleClick}
          display={this.state.display}
          onClear={this.handleClear}
          onEqual={this.handleEquals}
        />
      </div>
    );
  }
}

export default Calc;
