import React, { Component } from 'react';

import LandingSection from '../LandingSection';
import LandingSectionAlt from '../LandingSectionAlt';

const ICO_STARTS = 1512140400000;

class LandingSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 0,
      started: false
    };

    this._tick = this._tick.bind(this);
    this._getCountdown = this._getCountdown.bind(this);
  }

  componentDidMount() {
    const countdown = this._getCountdown();
    this.setState({ countdown });

    if (countdown > -3000) {
      setInterval(this._tick, 1000);
    }
  }

  _getCountdown() {
    const currentTimestamp = new Date().getTime();
    const countdown = ((ICO_STARTS - currentTimestamp) / 1000).toFixed();
    return countdown;
  }

  _tick() {
    const countdown = this._getCountdown();
    this.setState({ countdown }, () => {
      if (countdown <= 0) {
        this.setState({ started: true });
      }
    });
  }

  render() {
    const { started, countdown } = this.state;

    return started ? <LandingSectionAlt/> : <LandingSection countdown={countdown}/>;
  }
}

export default LandingSwitcher;
