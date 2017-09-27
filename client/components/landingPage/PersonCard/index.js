import React from 'react';
import s from './styles.scss';

const PersonCard = (props) => {
  const {
    name,
    role,
    about,
    photoElement,
    socialNetworks
  } = props;

  return (
    <div className={s.card}>
      <div className={s.photo}>
        <div className={s.shadow}/>
        {socialNetworks && <div className={s.socialNetworks}>
          {socialNetworks.map(({ href, icon }) => <a href={href} key={href} target="_blank">{icon}</a>)}
        </div>}
        {photoElement}
      </div>

      <div className={s.name}>{name}</div>
      <div className={s.role}>{role}</div>
      <div className={s.about}>{about}</div>
    </div>
  );
};

export default PersonCard;
