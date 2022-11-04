import React, { Component } from "react";
import Image from "next/image";
import fab from "../public/fab4.jpeg";

var textArray = ['Somos los fans.', 'Somos los amantes del fut.', 'Somos los aficionados.']

class Us extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 7000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1 animate-in slide-in-from-left duration-700">
            <div className="aboutUsContainer">
              <h1 className="usText text-white text-5xl font-bold ">
                {textThatChanges}
              </h1>
              <h2 className="text-1xl"></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Us;
