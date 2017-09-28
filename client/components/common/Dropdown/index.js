import React, { Component } from 'react';
import s from './styles.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    if (!this.state.open) {
      document.addEventListener('click', this._handleClick, false);
    } else {
      document.removeEventListener('click', this._handleClick, false);
    }

    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  _renderDropdown() {
    const { dropdown } = this.props;

    return (
      <div className={s.dropdown}>
        {dropdown.map((item) => <div key={item.props.children} className={s.item}>{item}</div>)}
      </div>
    );
  }

  render() {
    const { button } = this.props;
    const { open } = this.state;

    return (
      <div className={s.wrapper}>
        <div onClick={this._handleClick}>{button}</div>
        {open ? this._renderDropdown() : null}
      </div>
    );
  }
}

export default Dropdown;
