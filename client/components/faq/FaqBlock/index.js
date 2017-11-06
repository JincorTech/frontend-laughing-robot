import React, { Component } from 'react';
import s from './styles.scss';

class FaqBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this._toggle = this._toggle.bind(this);
    this._renderBody = this._renderBody.bind(this);
  }

  _toggle() {
    this.setState((prevState) => ({ open: !prevState.open }));
  }

  _renderBody() {
    const { children } = this.props;

    return (
      <div className={s.body}>{children}</div>
    );
  }

  render() {
    const { open } = this.state;
    const { title } = this.props;

    return (
      <div className={s.block}>
        <div
          className={s.title}
          onClick={() => this._toggle()}>
          {title}
        </div>
        <div className={s.animationContainer} key={open}>
          {open ? this._renderBody() : null}
        </div>
      </div>
    );
  }
}

export default FaqBlock;
