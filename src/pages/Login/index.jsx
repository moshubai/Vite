import { setCookies } from '@/utils/cookie';
import { ToastModal } from '@/utils/toast';
import { Button, Form, Input } from 'antd-mobile';
import { EyeInvisibleOutline, EyeOutline, LockOutline, UserOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';

const Login = (props) => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [verCode, setVerCode] = useState('');

  const handleSubmit = (values) => {
    setLoading(true);
    setCookies('token', new Date());
    setLoading(false);
    ToastModal.show(
      'success',
      '登录成功',
      () => {
        navigate('/home');
      },
      1000,
      true,
      'center',
    );
  };
  const onFinish = (values) => {
    console.log('values', values); //log-xu
    const { userName, password, imageVerificationCode } = values;
    if (!userName) {
      ToastModal.show(null, '请输入用户名');
      return false;
    }
    if (!password) {
      ToastModal.show(null, '请输入密码');
      return false;
    }
    // if (!imageVerificationCode) {
    //   ToastModal.show(null, '请输入验证码');
    //   return false;
    // }
    handleSubmit(values);
  };

  return (
    <div className={style['login_warp_box']}>
      <div className={style['login_form_box']}>
        <h3>欢迎体验</h3>
        <Form
          form={form}
          className={style['login_form_content']}
          layout="horizontal"
          onFinish={onFinish}
          initialValues={{
            userName: 'admin',
            password: '123456',
          }}
          footer={
            <Button block type="submit" color="primary" loading={loading} className={style['login_btn']}>
              登录
            </Button>
          }
        >
          <Form.Item name="userName" label={<UserOutline fontSize={24} />} rules={[{ message: '请输入用户名' }]}>
            <Input onChange={console.log} placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label={<LockOutline fontSize={24} />}
            name="password"
            extra={
              <div className={style['form_eye']}>
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            }
          >
            <Input placeholder="请输入密码" clearable type={visible ? 'text' : 'password'} />
          </Form.Item>
          {/* <Form.Item name="imageVerificationId" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            label={<CheckShieldOutline fontSize={24} />}
            name="imageVerificationCode"
            extra={
              <div className={style['extraPart']} onClick={getVerCode}>
                <img src={verCode} alt="验证码" />
              </div>
            }
          >
            <Input placeholder="请输入验证码" clearable />
          </Form.Item> */}
        </Form>
      </div>
    </div>
  );
};

export default Login;
