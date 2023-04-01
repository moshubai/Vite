import { Button, ErrorBlock } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exception500 = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  return (
    <ErrorBlock status="disconnected" fullPage title="500" description={<span>抱歉，系统异常～</span>}>
      <Button onClick={goHome} color="primary" size="mini">
        返回首页
      </Button>
    </ErrorBlock>
  );
};
export default Exception500;
