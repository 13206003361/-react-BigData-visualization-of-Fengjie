import React, { Component } from 'react'
import Vedios from './Vedio.less'
import Videolayer from './VideoPlayer';  //先引入子组件
import axios from 'axios'


export default class Vedio extends Component {
  constructor(props){
    super(props)
    this.state={
      pathSrc:''
    }
  }
  componentDidMount(){
    axios.request({
      url:'http://yuyue.fjlypt.com/api/Bigdata/monitorRecommend',
      method:'get'
  }).then((res)=>{
    console.log(res)
    this.setState({pathSrc:res.data},()=>{
      console.log(this.state.pathSrc[0].FLV)
    })
  })



  }

    render() {
      let { pathSrc } =this.state
        return  (
            <div className={Vedios.container}>
               {pathSrc && <div className={'top'}>
                    <div className={'top-left'}>
                      <Videolayer IdNUM={0} pathSrc={pathSrc[0].FLV}/>
                    </div>
                    <div className={'top-right'}>
                        <div><Videolayer IdNUM={1} pathSrc={pathSrc[1].FLV}/></div>
                        <div><Videolayer IdNUM={2} pathSrc={pathSrc[2].FLV}/></div>
                    </div>
                </div>}

                {pathSrc &&<div className={'bottom'}>
                    <div><Videolayer IdNUM={3} pathSrc={pathSrc[3].FLV}/></div>
                    <div><Videolayer IdNUM={4} pathSrc={pathSrc[4].FLV}/></div>
                    <div><Videolayer IdNUM={5} pathSrc={pathSrc[5].FLV}/></div>
                </div>}
            </div>
        )
    }
}
