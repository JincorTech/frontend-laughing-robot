import React from 'react';
import s from './styles.scss';

const ProductCarousel = () => {
  return (
    <div className={s.product}>
      <div className={s.images}>
        <div className={s.left}>
          <img src={require('./images/employees.png')}/>
        </div>
        <div className={s.center}>
          <img src={require('./images/company-card.png')}/>
        </div>
        <div className={s.right}>
          <img src={require('./images/search.png')}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
