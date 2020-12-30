import React, { Component } from 'react'
import NumStreams from './Numstream.less'
import CountUp from "react-countup";
import axios from 'axios'
interface test{
    ticketAllendNUm:any,
    usedNUM:any
    startNUm: number,
    endNUm:number, 
    
}
interface test1{
    timer:any,
    
}
export default class NumStream  extends Component <any,test>{
    constructor(props: any) {
        super(props)
        
        this.state = {
            ticketAllendNUm:0,
            startNUm: 0,
            usedNUM:0,
            endNUm:100,
        }

        this.timer=''
    }
    componentDidMount() {
        this.timer=setInterval(()=>{
            axios.request({
                url:'http://yuyue.fjlypt.com/api/Bigdata/spotsTime',
                method:'get'
            }).then((res)=>{
                    //预约人数
                    this.setState({ticketAllendNUm: 0})
                    this.setState({ticketAllendNUm: res.data.ticketNum},()=>{
                        // this.ticket.start()不知道为啥不起作用
                    })
                    //核销人数
                    this.setState({usedNUM: 0})
                    this.setState({usedNUM: res.data.used},()=>{
                        // this.used.start()
                    })
                    
                })
        },4000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    
    
    render() {
        const { ticketAllendNUm,startNUm,endNUm,usedNUM } = this.state
        const { rep_used,showNum }=this.props
       
        return (
            <div className={NumStreams.test}>
                { rep_used &&<ul>
                    <li>
                        <span className={'wrap'}>全部景区</span>
                        <span className={'wrap mar-righrt'}></span>
                    </li>
                    <li>
                        <span className={'wrap'}>
                            <span className={'whiteF'}>景区当天预约</span>
                            {/* 全部景区 */}
                            <CountUp className={'num-stream'} start={0} end={ticketAllendNUm} duration={2} ref={ref=>this.ticket=ref}/>
                            <span className={'ren'}>人</span>
                        </span>
                        <span className={'wrap'}>
                            <span className={'whiteF'}>景区当天预约</span>
                            <CountUp className={'num-stream'} start={showNum==0?0:rep_used[showNum-1].reportSum} end={rep_used[showNum].reportSum} duration={2} />
                            <span className={'ren'}>人</span>
                        </span>
                    </li>
                    <li>
                        <span className={'wrap'}>白帝城</span>
                        <span className={'wrap mar-righrt'}></span>
                    </li>
                    <li>
                        <span className={'wrap'}>
                            <span className={'whiteF'}>景区当天核销</span>
                            {/* 全部景区 */}
                            <CountUp className={'num-stream'} start={0} end={usedNUM} duration={2} ref={ref=>this.used=ref}/>
                            <span className={'ren'}>人</span>
                        </span>
                        <span className={'wrap'}>
                            <span className={'whiteF'}>景区当天核销</span>
                            <CountUp className={'num-stream'} start={showNum==0?0:rep_used[showNum-1].used_reportSum} end={rep_used[showNum].used_reportSum} duration={2} />
                            <span className={'ren'}>人</span>
                        </span>
                    </li>
                </ul>}
                
            </div>
        )
    }
}
