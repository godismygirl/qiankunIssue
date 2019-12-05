import React from 'react';
import style from './header.less'
import Date from './Date'
import Avatar from '@/components/GlobalHeader/AvatarDropdown';

const Header = props => {
    console.log('render header');
    return(
        <div className={style.header} >
            <h2 className={style.title}>企业管理平台</h2>
            <Date />
            <div className={style.avatar}>
                <Avatar/>
            </div>
        </div>
    )
};
export default Header;
