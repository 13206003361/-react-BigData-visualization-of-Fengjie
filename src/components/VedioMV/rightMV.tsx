import React, { Component } from 'react'
import Videolayer from './VideoPlayer'
import axios from 'axios'

export default class RightMV extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            arryVideo:[],
            ID:this.props.ID
        }
    }
    componentWillUpdate(nextProps){

        console.log('将更新，组件',nextProps)
        console.log('将更新，组件',this.props.ID)


        if(nextProps.ID!==this.props.ID){
        console.log(this.props.ID,'接受props')
        axios.request({
            url:`http://yuyue.fjlypt.com/api/Bigdata/monitor?serial=${nextProps.ID}`,
            method:'get'
        }).then((res)=>{
            console.log(res)
            this.setState({arryVideo:res.data})
        })
        }
    }
    
    // componentDidMount(){
    //     console.log(this.props.ID,'right的didmoun')
    //     axios.request({
    //         url:`http://yuyue.fjlypt.com/api/Bigdata/monitor?serial=${this.props.ID}`,
    //         method:'get'
    //     }).then((res)=>{
    //         console.log(res)
    //         this.setState({arryVideo:res.data})
    //     })
    // }
    
    // shouldComponentUpdate(nextProps){
        
    //     if (nextProps.ID ==this.props.ID ){
    //         return false
    //     }else{
            
    //         return true
    //     }
    // }
    
    render() {
        console.log(this.props.ID,'Right渲染,render中函数',this.state.arryVideo)
        
        return (
             <div className={'right-MV'}>
                <div className={'MV-item'}>
                     {this.state.arryVideo.length!=0 && <Videolayer IdNUM={0} pathSrc={this.state.arryVideo[0].FLV}/>}
                </div>
                <div className={'MV-item'}>
                     {this.state.arryVideo.length!=0 && <Videolayer IdNUM={1} pathSrc={this.state.arryVideo[1].FLV}/>}
                </div>
                <div className={'MV-item'}>
                     {this.state.arryVideo.length!=0 && <Videolayer IdNUM={2} pathSrc={this.state.arryVideo[2].FLV}/>}
                </div>
                <div className={'MV-item'}>
                    {this.state.arryVideo.length!=0 && <Videolayer IdNUM={3} pathSrc={this.state.arryVideo[3].FLV}/>}   
                </div>
                <div className={'MV-item'}>
                    {this.state.arryVideo.length!=0 && <Videolayer IdNUM={4} pathSrc={this.state.arryVideo[4].FLV}/>}
                </div>
            </div>
        )
    }
}
