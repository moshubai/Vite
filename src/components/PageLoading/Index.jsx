import { SpinLoading } from 'antd-mobile';
import React from 'react';

import style from './index.module.less';

const PageLoading = () => {
  return (
    <div className={style.pageLoading}>
      <SpinLoading color="primary" />
    </div>
  );
};

export default PageLoading;
