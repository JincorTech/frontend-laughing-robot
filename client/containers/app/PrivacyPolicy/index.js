import React from 'react';
import { translate } from 'react-i18next';
import PDFViewer from '../../../components/resourses/PDFViewer';

const PrivacyPolicy = (props) => {
  const { t } = props;

  return (
    <PDFViewer download={t('links.resourses.privacy.href')} name={t('links.resourses.privacy.label')}>
      <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.privacy.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

const TranslatedComponent = translate()(PrivacyPolicy);
export default TranslatedComponent;
