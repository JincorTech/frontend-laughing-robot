import React from 'react';
import s from './styles.scss';

const AboutSection = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <div className={s.what}>
          <h2 className={s.title}>What is Jincor?</h2>
          <h4 className={s.subtitle}>The Grand Vision</h4>
          <div className={s.content}>
            <div className={s.text}>
              Jincor is a platform, which will allow any business easily transition into accepting cryptocurrencies with no legal, technical or operational complications in a cost-efficient and user-friendly manner. With Jincor, companies will be able to execute cryptocurrency transactions in a legal and fully transparent way, as well as to carry out contractual and legal relations without any middlemen — by creating self-executing corporate smart contracts, which will be written to a permissioned ledger based on Hyperledger technologies. Jincor’s mission is to integrate companies, employees and business assets into a unified blockchain ecosystem, which will make business relations truly transparent, effective and reliable.
            </div>
          </div>
        </div>
        <div className={s.resourses}>
          <h2 className={s.title}>Resources</h2>
          <h4 className={s.subtitle}>Find out more about Jincor</h4>
          <div className={s.content}>
            <div className={s.links}>
              <div><a>Whitepaper</a></div>
              <div><a>Yellowpaper</a></div>
              <div><a>Business Summary</a></div>
              <div><a>Terms & Conditions</a></div>
              <div><a>Disclaimer</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
