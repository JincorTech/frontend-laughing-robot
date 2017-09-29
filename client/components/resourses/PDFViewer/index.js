import React from 'react';
import s from './styles.scss';

const PDFViewer = (props) => {
  const { children } = props;

  return (
    <div className={s.viewer}>
      {children}
    </div>
  );
};

export default PDFViewer;
