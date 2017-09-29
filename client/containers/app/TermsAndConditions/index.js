import React from 'react';
import PDFViewer from '../../../components/resourses/PDFViewer';

const TermsAndConditions = () => {
  return (
    <PDFViewer>
      <embed src="https://s3.eu-west-2.amazonaws.com/jincor-ico/terms_conditions.pdf" type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

export default TermsAndConditions;
