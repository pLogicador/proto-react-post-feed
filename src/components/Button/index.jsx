import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { text, whenClick, disabled } = this.props;

    return (
      <button className="button" onClick={whenClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
