import React, { Component } from 'react';
import s from './styles.scss';

import { isBrowser } from '../../../utils/common';

import Button from '../../common/Button';

class FixedMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 500,
      scrollY: 0,
      visible: false
    };

    this._handleScrollY = this._handleScrollY.bind(this);
  }

  componentDidMount() {
    // exit if server
    if (!isBrowser()) return;

    const windowHeight = window.innerHeight;
    this.setState({ windowHeight });
    window.addEventListener('scroll', this._handleScrollY);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScrollY);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.scrollY !== nextState.scrollY) {
      const { windowHeight, scrollY } = this.state;

      if (scrollY > windowHeight) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    }
  }

  _handleScrollY() {
    const scrollY = window.scrollY;
    this.setState({ scrollY });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className={visible ? s.menu : s.hidden}>
        <div className={s.inner}>
          <div className={s.logo}>
            <img src={require('../../../assets/images/logo.svg')}/>
          </div>

          <div className={s.buttons}>
            <div className={s.contrib}>
              <Button style="blue" size="small">Contribute</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixedMenu;
