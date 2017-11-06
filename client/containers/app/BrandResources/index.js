import React from 'react';
import { translate } from 'react-i18next';
import PDFViewer from '../../../components/resourses/PDFViewer';

const BrandResources = (props) => {
  const { t } = props;

  return (
    <PDFViewer download={t('links.resourses.guidelines.href')} name={t('links.resourses.guidelines.label')}>
      <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.guidelines.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
    </PDFViewer>
  );
};

const TranslatedComponent = translate()(BrandResources);
export default TranslatedComponent;
