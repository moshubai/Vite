import { TabBar } from 'antd-mobile';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './index.module.less';

const tabStyle = {
  background: '#fff',
};

const PageFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(value);
  };

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },

    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div className={style.bottom}>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)} style={tabStyle}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default PageFooter;
