import React, { useRef } from 'react';
import {Card} from 'antd'
import { useDrag, useDrop } from 'react-dnd'

const Types = { // 设定类型，只有DragSource和DropTarget的类型相同时，才能完成拖拽和放置
    CARD: 'CARD'
};

const style = {
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'black',
    cursor: 'move',
    transition: '1s'
  }

const CardItem=(props:any)=> {
    const ref=useRef(null)
    const [, drop] = useDrop({
        //定义拖拽的类型
        accept: Types.CARD,    
        hover(item, monitor) {
          //异常处理判断
          if (!ref.current) { 
            return
          }
          //拖拽目标的Index
          const dragIndex = item.index;
          
          //放置目标Index
          const hoverIndex = props.index; 
          
          // 如果拖拽目标和放置目标相同的话，停止执行
          if (dragIndex === hoverIndex) { 
            return
          }
        
          props.handleDND(dragIndex, hoverIndex);  //调用方法完成交换
          console.log(item.index)
          item.index = hoverIndex;  //重新赋值index，否则会出现无限交换情况
          console.log(item.index)

        },
    })

    const [{ isDragging }, drag] = useDrag({
        item: { type: Types.CARD,index:props.index,id:props.title},
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    const backgroundColor=isDragging && 'black'

    drag(drop(ref))
        
    return(
        <div ref={ref} style={{ ...style,  opacity}} >
            <Card
                title={props.title}
                style={{ width:100 }}
            >
                <p>{props.content}</p>
            </Card>
        </div>
    )
}

export default CardItem