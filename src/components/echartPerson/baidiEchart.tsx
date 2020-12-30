import React, { Component } from 'react'
import EchartsForReact from 'echarts';
import echartPerson from './echartPerson.less'
import axios from 'axios'



interface test1 {
    Xdata: any,
    data: any
}
export default class BaidiEchart extends Component<{}, test1>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            Xdata: ['09.09', '09.09', '09.09', '09.09', '09.09', '09.09', '09.09', '09.09', '09.09', '09.09']
        }

    }
    componentDidMount() {
        var EchartsForReact = require('echarts');
        var myChart = EchartsForReact.init(document.getElementById('main2'));

        axios.request({
            url: 'http://yuyue.fjlypt.com/api/Bigdata/appointment',
            method: 'get',
        }).then(res => {
            var data = []
            var Xdata = []

            res.data.used.forEach((item: any) => {
                data.push(item.reportSum)
                Xdata.push(
                    item.time.substring(5).replace('-', '.')
                )
            })
            this.setState({ data, Xdata }, () => {
                const { data, Xdata } = this.state

                myChart.setOption({
                    title: {
                        text: '白帝城核销总人数',
                        textStyle: {
                            color: '#fff',
                            fontSize: '21.5px',
                            fontWeight: 'normal'
                        }
                    },

                    legend: {
                        data: ['最多人数'],
                        bottom: '0px',
                        textStyle: {
                            color: '#fff',
                            fontSize: '15px'
                        },
                        icon: 'pin'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#fff',
                            show: true,

                            showMinLabel: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: { color: '#439AFF', fontSize: '15px' }
                        },

                        data: Xdata,
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: { color: '#152956', fontSize: '15px' }
                        },
                        axisLabel: {
                            color: '#fff'
                        }
                    },
                    series: [{
                        name: '最多人数',
                        data: this.state.data,
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top',
                            fontStyle: 'normal',
                            fontSize: '12px',
                            color: '#fff'
                        },
                        symbol: 'none',
                        legendHoverLink: true,

                        showBackground: false,
                        barWidth: 14,
                        itemStyle: {
                            color: function (params: any) {
                                var color = new EchartsForReact.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#28B1FF' },

                                        { offset: 1, color: '#0C1336' }
                                    ]
                                )
                                var emColor = new EchartsForReact.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#E93CA7' },
                                        { offset: 0.5, color: '#964F62' },
                                        { offset: 1, color: '#0C1336' }
                                    ]
                                )
                                var max = Math.max.apply(null, data)

                                return params.data == max ? emColor : color
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                color: new EchartsForReact.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#E93CA7' },
                                        { offset: 0.5, color: '#964F62' },
                                        { offset: 1, color: '#0C1336' }
                                    ]
                                )
                            }
                        },
                    }]
                });
            })
        })

    }
    render() {
        return (
            <div id='main2' className={echartPerson.main}>

            </div>
        )
    }
}
