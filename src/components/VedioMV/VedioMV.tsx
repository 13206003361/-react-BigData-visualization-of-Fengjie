import React, { Component } from 'react'
import RightMV from './rightMV'
import VedioMVs from './VedioMv.less'
import axios from 'axios'

export default class VedioMV extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            isActive:null,
            
        }
    }
    componentDidMount(){
        axios.request({
            url:"http://yuyue.fjlypt.com/api/Bigdata/spot",
            method:'get',
            
        }).then((res)=>{
            this.setState({ list:res.data , isActive:res.data[0].ID },()=>{
            })
        })
    }
    changeItem=(ID)=>{
        this.setState({isActive:ID},()=>{
            this.updata=true
        })
    }
    // shouldComponentUpdate(){
    //     if(this.state.list.length==0 || this.updata){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    renderLI=()=>{
       
        if(this.state.list){
           return this.state.list.map((item)=>{
                return <li key={item.ID} className={this.state.isActive==item.ID ? 'active-li':''} onClick={this.changeItem.bind(this,item.ID)}>{item.Name}</li>
            })
        }
    }
    render() {
        console.log('视频监控刷新，渲染')
        return (
            <div className={VedioMVs.containerMV}>
                <div className={'left-Meanu'}>
                    <ul>
                        {this.renderLI()}
                    </ul>
                </div>
                <RightMV ID={this.state.isActive}/>
            </div>
        )
    }
}
