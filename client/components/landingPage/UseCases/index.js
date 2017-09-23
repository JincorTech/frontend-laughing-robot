import React from 'react';
import s from './styles.scss';

const UseCases = () => {
  return (
    <div className={s.cases}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Use Cases</h2>
          <h4 className={s.subtitle}>What does Jincor offer?</h4>
        </div>
        <div className={s.tabs}>
          <div className={s.tab}>Regulatory compliant crypto-asset<br/>transactions for business</div>
          <div className={s.tab}>Easy-to-use and legally<br/>binding smart contracts</div>
          <div className={s.tab}>Decentralised<br/>Arbitration system</div>
        </div>
        <div className={s.content}>
          <div className={s.text}>
            Lack of proper legislative base in the field seems to be the most significant challenge preventing smart contracts and cryptocurrencies from wider adoption. According to the data from Bitlegal, which tracks evolving regulatory landscape of blockchain technologies around the world, at the moment there are only 62 countries explicitly allowing their usage, but even there smart contracts are not regulated by clear, widely-adopted and well-known rules. In practice, it means that if you have signed a smart contract with your business partner, and you are dissatisfied with some of his actions, there are virtually no means for you to uphold your rights, as the contract is performed automatically and there are no courts or some regulatory bodies at all. Jincor solves this problem by providing a decentralized arbitration system, where organizations will be able to file a claim related to smart contract performance and get an unbiased judgment of several arbitrators, randomly picked from the list of companies which have gained a good reputation while using the platform and dealing with other participants on similar matters.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
