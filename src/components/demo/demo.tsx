import React, { Component } from 'react';
import CardItem from './CardItem'
import './App.css';
import { DndProvider } from 'react-dnd'

import {HTML5Backend }from 'react-dnd-html5-backend'

const CardList = [{ //定义卡片内容
    title: "first Card",
    id: 1,
    content: "this is first Card"
}, {
    title: "second Card",
    id: 2,
    content: "this is second Card3213213"
}, {
    title: "Third Card",
    id: 3,
    content: " Card"
}
];
class Demo extends Component {
    state = {
        CardList
    };
    handleCarlist=(CardList)=>{
        this.setState({CardList})
    }
    handleDND=(dragIndex, hoverIndex)=>{
        const {CardList}=this.state
        let tmp = CardList[dragIndex] //临时储存文件
        CardList.splice(dragIndex, 1) //移除拖拽项
        CardList.splice(hoverIndex, 0, tmp) //插入放置项
        this.handleCarlist(CardList)
      }
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <div className='card'>
                    {CardList.map((item, index) => {
                        return (
                            <CardItem //向次级界面传递参数
                                key={item.id}
                                title={item.title}
                                content={item.content}
                                index={index}
                                handleDND={this.handleDND}
                            />
                        )
                    })}
                </div>
            </DndProvider>
        );
    }
}

export default Demo;