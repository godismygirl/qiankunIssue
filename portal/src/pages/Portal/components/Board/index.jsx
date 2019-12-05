import React, {useState, useEffect} from 'react'
import style from './board.less'
import GridLayout from 'react-grid-layout';
import Block from '../Block/'

let cacheLayout = [];

const renderBlock = layout =>{
    return layout.map(item => {
        return (
            <div key={item.i}>
                <Block keyVal={item.i} size={item.size} icon={item.icon} title={item.title} url={item.url}/>
            </div>
        )
    })
}

const saveLayout = item => {
    const theOne = cacheLayout.find(el => el.i === item.i)
    theOne.x = item.x;
    theOne.y = item.y;
    console.log(cacheLayout)
}

const onDragStop = (l, o, n) => {
    let theOne = l.find(el => el.i === n.i)
    if( n.y > 8 - n.h){
        theOne.y = 8 - n.h;
    }
    saveLayout(theOne)
}

const Board = props => {
    console.log('render board')
    const {layout} = props;
    cacheLayout = layout;

    return(
        <div className={style.board}>
            <GridLayout 
                layout={layout}
                cols={17} rowHeight={70} width={1360}
                isResizable={false} 
                compactType={null}
                preventCollision={true} //此模式要开启，否则移动一个block可能会把附近的block挤出桌面范围onDragStop就不好判断了
                onDragStop={onDragStop}
            >
                {renderBlock(layout)}
            </GridLayout>
        </div>
    )
}

export default Board