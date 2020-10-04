import React from "react";
import Buttons from "./Buttons";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);

    this.state = {
      display: "0",
      operation: "",
    };
  }
  handleClick(event) {
    var text = this.state.display;
    if (text === "0") {
      this.setState({
        display: event.target.value,
      });
    } else {
      this.setState({
        display: (text += event.target.value),
      });
    }
  }
  handleDot(event) {
    var text = this.state.display;

    if (text.indexOf(".") === -1) {
      this.setState({
        display: (text += event.target.value),
      });
    } else if (
      text.indexOf("+") !== -1 ||
      text.indexOf("-") !== -1 ||
      text.indexOf("/") !== -1 ||
      text.indexOf("*") !== -1
    ) {
      if (text.match(/\./gi).length < 2) {
        this.setState({
          display: (text += event.target.value),
        });
      }
    }
  }
  handleOperator(event) {
    var string = this.state.display.toString();
    var reg = /\/(\+|-|\*|\/)|\*(\+|-|\*|\/)|-(\+|-|\*|\/)|\+(\+|-|\*|\/)/g;

    /*if (!reg.test(string)) {
      this.setState({
        display: (string += event.target.value),
      });
    } else if (string.indexOf("-") === -1 && event.target.value === "-") {
      this.setState({
        display: (string += event.target.value),
      });
    } */
    if (reg.test(string) === true) {
      var regex = /\+|-|\*|\//g;

      var text = string.replace(regex, event.target.value);
      this.setState({
        display: text.slice(0, text.length - 1),
      });
    } else if (string.charAt(string.length - 1) !== event.target.value) {
      this.setState({
        display: (string += event.target.value),
      });
    }
  }

  handleClear() {
    this.setState({
      display: "0",
    });
  }
  handleEquals() {
    try {
      var num = eval(this.state.display);
    } catch (e) {
      console.errorg(e.lineNumber);
      console.error(e.message);
    }
    this.setState({
      display: num,
    });
  }

  render() {
    return (
      <div>
        <Buttons
          onDot={this.handleDot}
          onClick={this.handleClick}
          display={this.state.display}
          onClear={this.handleClear}
          onEqual={this.handleEquals}
          onOperator={this.handleOperator}
        />
      </div>
    );
  }
}

export default Calc;
