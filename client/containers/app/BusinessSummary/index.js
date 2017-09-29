import React from 'react';
import PDFViewer from '../../../components/resourses/PDFViewer';

import i18next from '../../../utils/i18next/client';

const BusinessSummary = () => {
  const getPDF = () => {
    switch (i18next.language) {
      case 'en':
        return 'https://s3.eu-west-2.amazonaws.com/jincor-ico/summary_eng.pdf';
      case 'ru':
        return 'https://s3.eu-west-2.amazonaws.com/jincor-ico/summary_ru.pdf';
      default:
        return 'https://s3.eu-west-2.amazonaws.com/jincor-ico/summary_eng.pdf';
    }
  };

  return (
    <PDFViewer>
      <embed src={getPDF()} type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

export default BusinessSummary;
