import PageFooter from '@/components/PageFooter/index';
import Nav from '@/components/PageNav/index.jsx';
import { removeCookies } from '@/utils/cookie';
import { ToastModal } from '@/utils/toast';
import { Avatar, Dialog, List } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';

const Mine = () => {
  const navigate = useNavigate();
  const goLoginOut = () => {
    removeCookies('userInfo');
    removeCookies('token');
    ToastModal.show(
      'success',
      '登出成功',
      () => {
        navigate('/login');
      },
      1000,
      true,
      'center',
    );
  };
  const goSign = async () => {
    const result = await Dialog.confirm({
      content: '是否确认退出？',
    });
    if (result) {
      goLoginOut();
    } else {
    }
  };
  const goPage = (path) => {
    if (path) {
      navigate(path);
    } else {
      ToastModal.show(null, '功能开发中...');
    }
  };
  return (
    <>
      <div className={style['mine_warp_box']}>
        <Nav title="个人中心" backArrow={false} />
        <ul className={style.headerIcon}>
          <li>
            <Avatar src="" style={{ '--border-radius': '50px', '--size': '50px' }} />
          </li>
          <li>
            <h4>墨书白</h4>
            <p>余额：$30</p>
          </li>
        </ul>
        {/* <div className={style.mineMenu}>
          <h4>
            菜单
            <span>
              全部 <RightOutline />
            </span>
          </h4>
          <ul>
            <li>
              <span>
                <img src={IconOne} alt="" />
              </span>
              <span>订单确认</span>
            </li>
            <li>
              <span>
                <img src={IconTwo} alt="" />
              </span>
              <span>等待付款</span>
            </li>
            <li>
              <span>
                <img src={IconThree} alt="" />
              </span>
              <span>订单发货</span>
            </li>
            <li>
              <span>
                <img src={IconFour} alt="" />
              </span>
              <span>已推送订单</span>
            </li>
          </ul>
        </div> */}

        <div className={style.mineMenuList}>
          <List
            style={{
              '--border-top': 'none',
              '--border-bottom': 'none',
            }}
          >
            <List.Item
              onClick={() => {
                goPage();
              }}
            >
              客户管理
            </List.Item>
          </List>
          <div className={style.mineHight}></div>
          <List
            style={{
              '--border-top': 'none',
              '--border-bottom': 'none',
            }}
          >
            <List.Item
              onClick={() => {
                goPage();
              }}
            >
              安全管理
            </List.Item>
            <List.Item onClick={() => {}}>我的消息</List.Item>
          </List>
          <div className={style.mineHight}></div>
          <List
            style={{
              '--border-top': 'none',
              '--border-bottom': 'none',
            }}
          >
            <List.Item
              onClick={() => {
                goPage();
              }}
            >
              关于
            </List.Item>
          </List>
          <div className={style.mineHight}></div>
          <div className={style.mineBtn} onClick={goSign}>
            退出登录
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default Mine;
