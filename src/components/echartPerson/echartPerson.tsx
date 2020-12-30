import React, { Component } from 'react'
import EchartsForReact from 'echarts';
import echartPerson from './echartPerson.less'
import axios from 'axios'

interface test{
    data:any,
    Xdata:any
}
interface test1{
    echartsRef:any
}
export default class EchartPerson  extends Component <{},test>{
    constructor(props:any){
        super(props);
        this.state={
            data:[],
            Xdata:[]
        }
        
    }
    componentDidMount(){
        var EchartsForReact = require('echarts');
        var myChart = EchartsForReact.init(document.getElementById('main'));
        axios.request({
            url: 'http://yuyue.fjlypt.com/api/Bigdata/appointment',
            method: 'get',
        }).then(res => {
            var data = []
            var Xdata = []

            res.data.book.forEach((item: any) => {
                data.push(item.reportSum)
                Xdata.push(
                    item.time.substring(5).replace('-', '.')
                )
            })
            this.setState({ data, Xdata }, () => {
                const { data, Xdata } = this.state

                myChart.setOption({
                    title: {
                        text: '白帝城预约总人数',
                        textStyle:{
                            color:'#fff',
                            fontSize:'21.5px',
                            fontWeight:'normal'
                        }
                    },
                   
                    legend:{
                        data:['最多人数'],
                        bottom:'0px',
                        textStyle:{
                            color:'#fff',
                            fontSize:'15px'
                        },  
                        icon:'pin'
        
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            show: false
                        },
                        axisLabel:{
                            color:'#fff',
                            top:40
                        },
                        axisLine: {
                            show: false,
                            lineStyle:{color:'#fff'},
                        },
                        
                        data: Xdata
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{
                            show:false
                        },
                        axisLabel:{
                            color:'#fff'
                        }
                    },
                    series: [{
                        name:'最多人数',
                        data: data,
                        type: 'line',
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                            ],
                        },
                        
                        symbol: 'none',
                        lineStyle:{
                            color:{
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#0B1132' // 0% 处的颜色
                                },{
                                    offset: 0.4, color: '#E93CA7' // 100% 处的颜色
                                },{
                                    offset: 0.6, color: '#E93CA7' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#0B1132' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        itemStyle:{
                            color:'#E93CA7',
                            
                        },
                        areaStyle: {
                            color:{
                                type: 'radial',
                                x: 0.4,
                                y: 0.2,
                                r: 1,
                                colorStops: [{
                                    offset: 0, color: '#1C1337' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#0B1132' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                            
                        },
                        smooth: true,
                        
                    }]
                });
            })
        })
        
    }
    
    render() {
        return (
            <div id='main' className={echartPerson.main}  >
                
            </div>
        )
    }
}
