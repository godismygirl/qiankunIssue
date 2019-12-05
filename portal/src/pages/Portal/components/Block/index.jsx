import React from 'react';
import style from './block.less'
import {Icon} from 'antd'

const goTo = () => {
    
}

const Block = props => {
    const {size, icon, title, url, msgUrl} = props;
    return(
        <div className={`${style.block} ${style[size]}`} onClick={goTo}>
            <Icon type={icon}/>
            <h3 className="block-title">{title}</h3>
        </div>
    )
};

export default Block ;
