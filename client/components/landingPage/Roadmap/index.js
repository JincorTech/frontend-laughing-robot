import React from 'react';
import s from './styles.scss';

const Roadmap = () => {
  return (
    <div className={s.roadmap}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Roadmap</h2>
          <h4 className={s.subtitle}>So what’s ahead of us?</h4>
        </div>

        <div className={s.content}>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.active}/>
            </div>
            <div className={s.date}>July 2017</div>
            <div className={s.what}>
              Performing closed beta testing, launching an ICO campaign
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.active}/>
            </div>
            <div className={s.date}>August 2017</div>
            <div className={s.what}>
              Issuing JCR tokens on the Ethereum blockchain
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>September 2017</div>
            <div className={s.what}>
              Final touches on the product, public beta launch
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>November 2017</div>
            <div className={s.what}>
              Invoicing & billing system implementation. Channel partner program launch
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>December 2017</div>
            <div className={s.what}>
              Finishing up the crowdfunding campaign and distributing JCR tokens among supporters. Listing on exchange platforms
            </div>
          </div>

          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>January 2017</div>
            <div className={s.what}>
              Performing closed beta testing, launching an ICO campaign
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>April 2017</div>
            <div className={s.what}>
              Issuing JCR tokens on the Ethereum blockchain
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>June 2017</div>
            <div className={s.what}>
              Final touches on the product, public beta launch
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>Q3 2017</div>
            <div className={s.what}>
              Invoicing & billing system implementation. Channel partner program launch
            </div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>Q4 2017</div>
            <div className={s.what}>
              Finishing up the crowdfunding campaign and distributing JCR tokens among supporters. Listing on exchange platforms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
