import React from 'react';
import { translate } from 'react-i18next';
import PDFViewer from '../../../components/resourses/PDFViewer';

const WhitePaper = (props) => {
  const { t } = props;

  return (
    <PDFViewer download={t('links.resourses.whitepaper.href')} name={t('links.resourses.whitepaper.label')}>
      <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.whitepaper.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

const TranslatedComponent = translate()(WhitePaper);
export default TranslatedComponent;
