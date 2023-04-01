import PageFooter from '@/components/PageFooter/index';
import { Grid } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';

const Dashboard = () => {
  const navigate = useNavigate();
  const goTo = (val) => {
    navigate(val);
  };
  return (
    <>
      <div className={style.home_content_box}>
        {/* <div className={style.home_content}></div> */}
        <h4>
          欢迎体验
          {/* Chat GTP */}
        </h4>
        <p>在这里你可以使用以下功能，进行对话</p>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className={style['grid-demo-item-block']}>A</div>
          </Grid.Item>
          <Grid.Item>
            <div className={style['grid-demo-item-block']}>B</div>
          </Grid.Item>
          <Grid.Item>
            <div className={style['grid-demo-item-block']}>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className={style['grid-demo-item-block']}>D</div>
          </Grid.Item>
          <Grid.Item>
            <div className={style['grid-demo-item-block']}>E</div>
          </Grid.Item>
        </Grid>
      </div>
      <PageFooter />
    </>
  );
};

export default Dashboard;
