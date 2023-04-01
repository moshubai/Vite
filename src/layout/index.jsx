// import { css } from '@emotion/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './index.module.less';

// const styleContent = css({
//   padding: 20,
//   overflow: 'auto',
//   background: '#fff',
//   borderRadius: '4px',
// });

const PageLayout = () => {
  return (
    <div className={style.warpPage}>
      <Outlet />
    </div>
  );
};

export default PageLayout;
