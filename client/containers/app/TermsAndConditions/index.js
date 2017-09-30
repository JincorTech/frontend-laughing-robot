import React from 'react';
import { translate } from 'react-i18next';
import PDFViewer from '../../../components/resourses/PDFViewer';

const TermsAndConditions = (props) => {
  const { t } = props;

  return (
    <PDFViewer download={t('links.resourses.t&c.href')} name={t('links.resourses.t&c.label')}>
      <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.whitepaper.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

const TranslatedComponent = translate()(TermsAndConditions);
export default TranslatedComponent;
