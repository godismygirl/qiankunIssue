import React, { useState, useEffect } from 'react';
import PageLoading from '@/components/PageLoading';
import Header from './components/Header'
import Board from './components/Board'
import { connect } from 'dva';
import style from './portal.less';

const Portal = props => {
  const [isReady, setIsReady] = useState(false);
  const { loading, currentUser} = props;
  
  useEffect(() => {
    setIsReady(true);
    const { dispatch } = props;
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const isLogin = currentUser && currentUser.userid;

  if ((!isLogin && loading) || !isReady) {
    return <PageLoading />;
  }

  if (!isLogin) {
    return <Redirect to='/login'></Redirect>;
  }

  return (
    <div className={style.desktop}>
      <Header />
      <Board layout={currentUser.layout}/>
    </div>
  );
};

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(Portal);
