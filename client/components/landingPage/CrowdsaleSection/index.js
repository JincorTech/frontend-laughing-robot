import React from 'react';
import s from './styles.scss';

const CrowdsaleSection = () => {
  return (
    <div className={s.crowdsale}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Crowdsale</h2>
          <h4 className={s.subtitle}>Jincor’s ICO at a glance</h4>
        </div>

        <div className={s.content}>
          <div className={s.text}>
            In order to fully exploit the potential of Jincor ecosystem, reach a critical mass of industry players participating and get to the global market as soon as possible, we are going to raise extra funding by running an ICO campaign. Jincor will issue 35 000 000 JCR tokens, 76% of which will be put on sale in November during the ICO at a starting price of $0,5, and another 4% — during the pre-ICO in August with a discount of 50%. Thus, the total amount of money we are planning to raise comes to $27M. JCR tokens will play an integral role in Jincor’s business model and act as a native currency for all the services provided by the platform.
          </div>
          <div className={s.table}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr className={s.row}><td>Token</td><td>JCR (ERC20)</td></tr>
                <tr className={s.row}><td>Platform</td><td>Ethereum</td></tr>
                <tr className={s.row}><td>Total supply</td><td>35 000 000 JCR</td></tr>
                <tr className={s.row}><td>Hard cap</td><td>26 600 000 USD</td></tr>
                <tr className={s.row}><td>Soft cap</td><td>2 500 000 USD</td></tr>
                <tr className={s.row}><td>ICO timeframe</td><td>01.11.-15.12.2017</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={s.distribution}>
          <h4 className={s.distTitle}>Token distribution</h4>
          <div className={s.distArea}>
            <div className={s.item}>
              <div className={s.number}>4%</div>
              <div className={s.description}>Presale</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>8%</div>
              <div className={s.description}>Incentives</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>12%</div>
              <div className={s.description}>Jincor team</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>76%</div>
              <div className={s.description}>Crowdsale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdsaleSection;
