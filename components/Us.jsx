import React, { Component } from "react";
import Image from "next/image";
import fab from "../public/fab4.jpeg";

var textArray = [
  "Somos los fans.",
  "Somos los amantes del fut.",
  "Somos los aficionados.",
];

class Us extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 col-span-1 animate-in slide-in-from-left duration-700">
            <div className="aboutUsContainer text-center bg-black/15 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
              <h1 className="usText text-white text-5xl font-bold mb-4">
                {textThatChanges}
              </h1>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Tiro al Ángulo comenzó como el podcast de 4 amigos de la universidad.
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Igual que nosotros, ese podcast está tratando de crecer. 
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Queremos ser la comunidad de fútbol más chingona de todo el mundo.
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Llena de fans.
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Llena de aficionados. 
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Llena de gente como ustedes. 
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Así que comenten, peleen, y no tengan miedo de
                expresar sus opiniones pamboleras sobre este increíble deporte,
                que para eso estamos. 
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Juntos, podemos ser la nueva voz del fútbol. 
              </h2>
              <h2 className="text-2xl text-white bg-grey mb-1">
                Sin más que decir, esto es Tiro al Ángulo,
                esperamos hablar con ustedes pronto.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Us;
