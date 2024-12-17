import Logo from '@/assets/images/logo.jpeg';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm<{ username: string; password: string }>();
  const username = Form.useWatch('username', form);
  const password = Form.useWatch('password', form);

  const disabled = useMemo(() => {
    return !username || !password;
  }, [username, password]);

  const initData = {
    username: 'admin',
    password: 'b6-ZhqfynceUJ7c',
  };

  const login = async () => {
    setLoading(true);
    const values = await form.validateFields();
    // TODO set store
    if (
      values.username === initData.username &&
      values.password === initData.password
    ) {
      setLoading(false);
      message.success('登录成功');
      navigate('/');
      localStorage.setItem('loginInfo', JSON.stringify(values.username));
    } else {
      message.error('用户名或密码不正确，请重新输入');
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-1 justify-center">
      <div className="mt-[10%] w-[360px]">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="" className="w-[110px]" />
          <p className="pb-[48px] pt-[16px] text-center text-[40px] font-bold">
            小刷子后台管理系统
          </p>
        </div>
        <Form form={form} name="login-form" initialValues={initData}>
          <Form.Item
            name="username"
            required
            rules={[
              {
                required: true,
                message: 'Please input your email',
              },
            ]}
          >
            <Input
              size="large"
              allow-clear="true"
              placeholder="username"
              data-test="username"
              autoComplete="username"
              addonBefore={<UserOutlined className="ite-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            required
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Form>

        <Button
          size="large"
          type="primary"
          htmlType="submit"
          disabled={disabled}
          className="mt-5px rounded-5px tracking-2px w-full"
          loading={isLoading}
          onClick={login}
        >
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
