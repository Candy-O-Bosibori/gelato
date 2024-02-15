import React, { Component } from "react";

class CountDown extends Component {
  constructor(props) {
    super(props);
    const difference = +new Date(`03/01/2024`) - +new Date();
    this.state = {
      delay: difference,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ delay: prevState.delay - 1000 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { delay } = this.state;
    const d = Math.floor(delay / (1000 * 60 * 60 * 24));
    const h = Math.floor((delay / (1000 * 60 * 60)) % 24);
    const m = Math.floor((delay / 1000 / 60) % 60);
    const s = Math.floor((delay / 1000) % 60);

    return (
      <span className="font-bold text-5xl text-darkcherry">
        {d}:{h}:{m}:{s}
      </span>
    );
  }
}

export default CountDown;
