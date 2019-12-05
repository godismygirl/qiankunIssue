import { Alert, Checkbox } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { useState } from 'react';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './login.less';
import { getCookie, setCookie, delCookie } from '@/utils/cookie';
const { UserName, Password, Submit } = LoginComponents;

const renderMessage = content => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const getAutoLoginUser = () => {
  const username = getCookie('REMEMBER_USERNAME');
  const password = getCookie('REMEMBER_PASSWORD');
  return [username, password];
};

const setAutoLoginUser = (username, password) => {
  setCookie('REMEMBER_USERNAME', username);
  setCookie('REMEMBER_PASSWORD', password);
};

const delAutoLoginUser = () => {
  delCookie('REMEMBER_USERNAME');
  delCookie('REMEMBER_PASSWORD');
};

const Login = props => {
  let loginForm = undefined;
  const { userLogin, submitting } = props;
  const { status } = userLogin;

  const [autoLogin, setAutoLogin] = useState(true);

  const changeAutoLogin = e => {
    setAutoLogin(e.target.checked);
  };

  const handleSubmit = (err, values) => {
    if (!err) {
      autoLogin ? setAutoLoginUser(values.username, values.password) :  delAutoLoginUser()
      const { dispatch } = props;

      dispatch({
        type: 'login/login',
        payload: { ...values },
      });
    }
  };

  const onLoginCreate = form => {
    loginForm = form;
    const [rUsername, rPassword] = getAutoLoginUser();
    if (rUsername && rPassword) {
      form.setFieldsValue({
        username: rUsername,
        password: rPassword,
      });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.banner}></div>
      <div className={styles.login}>
        <h3 className={styles.title}>你好，欢迎登录</h3>
        <LoginComponents onSubmit={handleSubmit} onCreate={onLoginCreate}>
          {status === 'error' &&
            !submitting &&
            renderMessage(
              formatMessage({
                id: 'user-login.login.message-invalid-credentials',
              }),
            )}
          <UserName
            name="username"
            placeholder={`${formatMessage({
              id: 'user-login.login.userName',
            })}`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.userName.required',
                }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder={`${formatMessage({
              id: 'user-login.login.password',
            })}`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.password.required',
                }),
              },
            ]}
            onPressEnter={e => {
              e.preventDefault();

              if (loginForm) {
                loginForm.validateFields(handleSubmit);
              }
            }}
          />

          <div>
            <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
              <FormattedMessage id="user-login.login.remember-me" />
            </Checkbox>
            <a
              style={{
                float: 'right',
              }}
              href=""
            >
              <FormattedMessage id="user-login.login.forgot-password" />
            </a>
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="user-login.login.login" />
          </Submit>
        </LoginComponents>
      </div>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
