import React,{useEffect} from 'react';
import { connect } from 'dva';
import { Link } from 'umi';
import { Breadcrumb, Layout, Menu } from 'antd';

const SlaveRoot = props => {
    const {apps, dispatch} = props;
    useEffect(()=>{
        dispatch({
            type: 'global/getApps',
          });
    },[])
    return (
        <Layout>
            <Menu>
                {apps.map(app => {
                    return (
                        <Menu.Item key={app.base}>
                            <Link to={app.base}>{app.name}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
            <div id="root-slave" style={{height:'90%'}}/>
        </Layout>
    )
}

export default connect(({global})=>({apps: global.apps}))(SlaveRoot)