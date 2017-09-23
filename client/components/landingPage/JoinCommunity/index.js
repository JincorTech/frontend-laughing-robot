import React from 'react';
import s from './styles.scss';

import TextInput from '../../common/TextInput';
import Button from '../../common/Button';

const JoinCommunity = () => {
  return (
    <div className={s.community}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <h2 className={s.title}>Join our growing community!</h2>
        <h4 className={s.subtitle}>Follow us and subscribe for the latest updates on the upcoming ICO</h4>

        <form className={s.form}>
          <div className={s.input}>
            <TextInput placeholder="e-mail"/>
          </div>
          <div className={s.button}>
            <Button type="button" style="primary">Subscribe</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCommunity;
