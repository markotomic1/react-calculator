import React from "react";
import "./buttons.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="pad">
        <div id="clear">AC</div>
        <div id="divide" className="operation">
          {" "}
          /
        </div>
        <div id="multiply" className="operation">
          *
        </div>
        <div id="seven" className="number">
          7
        </div>
        <div id="eight" className="number">
          8
        </div>
        <div id="nine" className="number">
          9
        </div>
        <div id="subtract" className="operation">
          -
        </div>
        <div id="four" className="number">
          4
        </div>
        <div id="five" className="number">
          5
        </div>
        <div id="six" className="number">
          6
        </div>
        <div id="add" className="operation">
          +
        </div>
        <div id="one" className="number">
          1
        </div>
        <div id="two" className="number">
          2
        </div>
        <div id="three" className="number">
          3
        </div>
        <div id="equals" className="number">
          =
        </div>
        <div id="zero" className="number">
          0
        </div>
        <div id="decimal" className="number">
          .
        </div>
      </div>
    );
  }
}
export default Buttons;
