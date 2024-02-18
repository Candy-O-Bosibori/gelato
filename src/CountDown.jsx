import React, { Component } from "react";

class Offertime extends Component {
  constructor(props) {
    super(props);
    const targetDate = new Date("2024/03/01");
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();
    this.state = {
      delay: difference > 0 ? difference : 0,
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
      <span className="font-bold text-5xl text-darkcherry dark:text-babypink">
        {d}:{h}:{m}:{s}
      </span>
    );
  }
}

export default Offertime;
