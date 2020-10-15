import React, { Component } from "react";
import "./MainArea.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class MainArea extends Component {
  state = {
    backgroundColor: "rgb(23,23,23)",
    copied: false,
  };

  getNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  bgcolor = () => {
    const color =
      "rgb(" +
      this.getNumber() +
      "," +
      this.getNumber() +
      "," +
      this.getNumber() +
      ")";
    return color;
  };

  handleGenerate = () => {
    const color = this.bgcolor();
    this.setState({
      backgroundColor: color,
      copied: false,
    });
  };
  render() {
    return (
      <div
        className="mainarea__wrapper d-flex align-items-center"
        style={{ background: this.state.backgroundColor }}
      >
        <div className="mainarea__content col- col-lg-6 mx-auto text-center p-5">
          <h3 className="p-2 text-white display-4">
            Click the button to generate a color!
          </h3>

          <CopyToClipboard
            text={this.state.backgroundColor}
            onCopy={() => this.setState({ copied: true })}
          >
            {/* <span>Copy to clipboard with span</span> */}
            <h4 className="m-3 text-white">{this.state.backgroundColor}</h4>
          </CopyToClipboard>
          {this.state.copied ? (
            <h5 className="d-block text-white">#Copied!</h5>
          ) : (
            <h5 className="d-none text-white">#Copied!</h5>
          )}
          <button
            className="btn btn-primary mx-auto"
            onClick={this.handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    );
  }
}
