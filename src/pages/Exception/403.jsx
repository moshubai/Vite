import { Button, ErrorBlock } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exception403 = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/login');
  };

  return (
    <ErrorBlock status="busy" fullPage title="403" description={<span>该用户无此页面权限，请联系管理员</span>}>
      <Button onClick={goHome} color="primary" size="mini">
        返回登录
      </Button>
    </ErrorBlock>
  );
};
export default Exception403;
