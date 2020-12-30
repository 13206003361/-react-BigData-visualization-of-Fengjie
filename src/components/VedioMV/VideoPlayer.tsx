import React, { Component } from 'react';
import videojs from 'video.js'
import videozhCN from 'video.js/dist/lang/zh-CN.json'; //播放器中文，不能使用.js文件
import 'video.js/dist/video-js.css';  //样式文件注意要加上
import 'videojs-flash';  //如果要播放RTMP要使用flash 需要先npm i videojs-flash
import flvjs from "flv.js";

export default class Videolayer extends Component {
    constructor(props:any) {
    super(props);
    this.state = {};
    this.flvPlayer=''
  }
  
  componentDidMount(){

    if (flvjs.isSupported()) {
      var videoElement = document.getElementById(`videoElement${this.props.IdNUM}`);
       this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.props.pathSrc,
          config:{
              enableWorker: true,
              enableStashBuffer: false,
              stashInitialSize: 128,
          },
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
      //this.flvPlayer.play();
      this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
      console.log(errType, errDetail)
    })
    
    }
  }

  shouldComponentUpdate(nextProps){
    
    if(nextProps.pathSrc === this.props.pathSrc ) {
        return false;
    }else{
    this.flvPlayer.pause()
    this.flvPlayer.unload()
    return true;
    }
  }  
 
  componentDidUpdate(){
    console.log('VideoPlayer已更新')
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById(`videoElement${this.props.IdNUM}`);
       this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.props.pathSrc,
          config:{
              isLive:true,
              lazyLoad:true,
              lazyLoadMaxDuration:1

          },
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
      //this.flvPlayer.play();
      this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
      console.log(errType, errDetail)
    })
   
    }
  }
  
  componentWillUnmount() {
    if (this.flvPlayer) {
      this.flvPlayer.pause()
      this.flvPlayer.unload()
    }
  }
  render() {
    return (
        <video id={`videoElement${this.props.IdNUM}`} controls muted style={{width:'100%',height:'100%'}}></video>
    )
  }
}