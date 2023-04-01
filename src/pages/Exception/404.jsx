import { Button, ErrorBlock } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exception404 = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };
  return (
    <ErrorBlock fullPage title="404" description={<span>页面一不小心走失了</span>}>
      <Button onClick={goHome} color="primary" size="mini">
        返回首页
      </Button>
    </ErrorBlock>
  );
};
export default Exception404;
