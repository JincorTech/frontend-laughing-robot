import React from 'react';
import { translate } from 'react-i18next';
import HelmetBase from '../../../components/common/HelmetBase';
import PDFViewer from '../../../components/resourses/PDFViewer';

const BrandResources = (props) => {
  const { t } = props;

  return (
    <div>
      <HelmetBase>
        <title>Jincor Brand Resources</title>
        <meta name="description" content={t('head.description')} />
      </HelmetBase>
      <PDFViewer download={t('links.resourses.guidelines.href')} name={t('links.resourses.guidelines.label')}>
        <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.guidelines.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
      </PDFViewer>
    </div>
  );
};

const TranslatedComponent = translate()(BrandResources);
export default TranslatedComponent;
