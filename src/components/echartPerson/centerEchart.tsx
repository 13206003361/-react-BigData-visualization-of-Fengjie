import React, { Component } from 'react'
import echartPerson from './echartPerson.less'
import axios from 'axios'
interface test1 {
    Xdata: any,
    data: any
}
export default class CenterEchart extends Component<any, test1>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            Xdata: []

        }

    }

    componentDidMount() {
        var EchartsForReact = require('echarts');
        var myChart = EchartsForReact.init(document.getElementById('main3'));
        var markPoint = require('echarts/lib/component/markPoint')
        axios.request({
            url: 'http://yuyue.fjlypt.com/api/Bigdata/spotsStatistics',
            method: 'get'
        }).then((res) => {

            var data = []
            var Xdata = []
            res.data.forEach((item: any) => {
                data.push(item.reportSum)
                Xdata.push(item.resourceName)
            });
            this.setState({ data }, () => {
                var series =  [{
                            data: this.state.data,
                            type: 'line',
                            lineStyle: {
                                color: '#19D1FF'
                            },
                            markPoint:{
                              data:[
                                {
                                    name: '某个坐标',
                                    coord: [3, 0]
                                },
                              ],
                              symbol:'pin',
                              symbolSize:50
                            },
                            itemStyle: {
                                color: '#19D1FF',
                            },
                            symbolSize: 10,
                            smooth: true,
                            // symbol: 'none'
                        }]
                var option = {
                    xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false,
        
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#2E466D'
                                    }
                                },
                                date:this.state.Xdata
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2E466D',
                                width: '2'
                            }
                        },
                        axisLabel: {
                            color: '#CDD6E5',
                            fontSize: '17px',
                            margin: '18'
                        }
                    },
                    series: series
                };
                var effectScatterData = this.state.data
                    effectScatterData[0] ={ value: effectScatterData[0], symbolSize: 25,label:{show:true,position:'inside',fontWeight:'bold',color:'#0A0D35'} }
                var effectScatter = {
                    type: 'effectScatter',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 0,
                    data: effectScatterData, //2d坐标系
                    
                    showEffectOn: 'render',
                    rippleEffect: {
                        color: "#19D1FF",
                        period: 4.1,
                        scale: 2.5
                    },
                    
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                };
                option.series.push(effectScatter);

                myChart = EchartsForReact.init(document.getElementById('main3'));
                myChart.setOption(option)
                var i = 0
                setInterval(() => {
                    effectScatterData[i] = effectScatterData[i].value
                    i++
                    if (i == 9) {
                        i = 0
                    }
                    effectScatterData[i] = { value: effectScatterData[i], symbolSize: 25,label:{show:true,position:'inside',fontWeight:'bold',color:'#0A0D35'} }
                    myChart.setOption(option)
                }, 4000)
                
            })
            this.setState({ Xdata })
        })

        // setInterval(function () {
        //     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        //     myChart.setOption(option, true);
        // },4000);

    }

    li = () => {
        return this.state.Xdata.map((item: any) => {
            return <li key={item}>{item}</li>
        })

    }

    render() {
        return (
            <div className={echartPerson.main}>
                <div className={echartPerson.title}>景区数据汇总</div>

                <div id='main3' className={echartPerson.center}></div>

                <div className={echartPerson.centerBotom}>
                    <div style={{ width: '66px', height: '33px', border: '1px solid #439AFF', borderRadius: '4px' }}>
                        <span className={echartPerson.spanActive}>天</span>
                        <span></span>
                    </div>
                    <ul >
                        {this.li()}
                    </ul>
                </div>

            </div>

        )
    }
}
