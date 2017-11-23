import React from 'react';
import { translate } from 'react-i18next';
import HelmetBase from '../../../components/common/HelmetBase';
import PDFViewer from '../../../components/resourses/PDFViewer';

const TokenAgreement = (props) => {
  const { t } = props;

  return (
    <div>
      <HelmetBase>
        <title>Jincor Token Sale Agreement</title>
        <meta name="description" content={t('head.description')} />
      </HelmetBase>
      <PDFViewer download={t('links.resourses.agreement.href')} name={t('links.resourses.agreement.label')}>
        <iframe src={`https://drive.google.com/viewerng/viewer?url=${t('links.resourses.agreement.href')}?pid=explorer&efh=false&a=v&chrome=false&embedded=true`} type="application/pdf" width="100%"/>
      </PDFViewer>
    </div>
  );
};

const TranslatedComponent = translate()(TokenAgreement);
export default TranslatedComponent;
