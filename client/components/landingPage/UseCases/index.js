import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { changeTab } from '../../../redux/modules/landingPage/useCases';

const UseCases = (props) => {
  const { changeTab, activeTab } = props;

  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return '1 tab. Lack of proper legislative base in the field seems to be the most significant challenge preventing smart contracts and cryptocurrencies from wider adoption. According to the data from Bitlegal, which tracks evolving regulatory landscape of blockchain technologies around the world, at the moment there are only 62 countries explicitly allowing their usage, but even there smart contracts are not regulated by clear, widely-adopted and well-known rules. In practice, it means that if you have signed a smart contract with your business partner, and you are dissatisfied with some of his actions, there are virtually no means for you to uphold your rights, as the contract is performed automatically and there are no courts or some regulatory bodies at all. Jincor solves this problem by providing a decentralized arbitration system, where organizations will be able to file a claim related to smart contract performance and get an unbiased judgment of several arbitrators, randomly picked from the list of companies which have gained a good reputation while using the platform and dealing with other participants on similar matters.';
      case 2:
        return '2 tab. Lack of proper legislative base in the field seems to be the most significant challenge preventing smart contracts and cryptocurrencies from wider adoption. According to the data from Bitlegal, which tracks evolving regulatory landscape of blockchain technologies around the world, at the moment there are only 62 countries explicitly allowing their usage, but even there smart contracts are not regulated by clear, widely-adopted and well-known rules. In practice, it means that if you have signed a smart contract with your business partner, and you are dissatisfied with some of his actions, there are virtually no means for you to uphold your rights, as the contract is performed automatically and there are no courts or some regulatory bodies at all. Jincor solves this problem by providing a decentralized arbitration system, where organizations will be able to file a claim related to smart contract performance and get an unbiased judgment of several arbitrators, randomly picked from the list of companies which have gained a good reputation while using the platform and dealing with other participants on similar matters.';
      case 3:
        return '3 tab. Lack of proper legislative base in the field seems to be the most significant challenge preventing smart contracts and cryptocurrencies from wider adoption. According to the data from Bitlegal, which tracks evolving regulatory landscape of blockchain technologies around the world, at the moment there are only 62 countries explicitly allowing their usage, but even there smart contracts are not regulated by clear, widely-adopted and well-known rules. In practice, it means that if you have signed a smart contract with your business partner, and you are dissatisfied with some of his actions, there are virtually no means for you to uphold your rights, as the contract is performed automatically and there are no courts or some regulatory bodies at all. Jincor solves this problem by providing a decentralized arbitration system, where organizations will be able to file a claim related to smart contract performance and get an unbiased judgment of several arbitrators, randomly picked from the list of companies which have gained a good reputation while using the platform and dealing with other participants on similar matters.';
    }
  };

  return (
    <div className={s.cases}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Use Cases</h2>
          <h4 className={s.subtitle}>What does Jincor offer?</h4>
        </div>
        <div className={s.tabs}>
          <div className={activeTab === 1 ? s.active : s.tab} onClick={() => changeTab(1)}>
            Regulatory compliant crypto-asset<br/>transactions for business
          </div>
          <div className={activeTab === 2 ? s.active : s.tab} onClick={() => changeTab(2)}>
            Easy-to-use and legally<br/>binding smart contracts
          </div>
          <div className={activeTab === 3 ? s.active : s.tab} onClick={() => changeTab(3)}>
            Decentralised<br/>Arbitration system
          </div>
        </div>
        <div className={s.content}>
          <div className={s.text}>
            {renderTabContent(activeTab)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    activeTab: state.landingPage.useCases.activeTab
  }),
  {
    changeTab
  }
)(UseCases);
