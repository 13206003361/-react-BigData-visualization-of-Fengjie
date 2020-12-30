import React, { Component } from 'react'
import Homes from './Home.less'
import EchartPerson from '../echartPerson/echartPerson'
import BadiEchart from '../echartPerson/baidiEchart'
import CenterEchart from '../echartPerson/centerEchart'
import Vedio from '../Vedio/Vedio'
import NumStream from '../NumStream/Numstream'
import VedioMV from '../VedioMV/VedioMV'

import axios from 'axios'
import ShowTime from './ShowTime'
const img = require('../../assets/images/title1.png')
const vedioTitle = require('../../assets/images/title1.png')

interface test {
    selectTab: any,
    today: any,
    spotsStatistics: any,
    showNum: number
}
export default class Home extends Component<any, test> {
    constructor(props: any) {
        super(props)
        this.state = {
            selectTab: false,
            today: '',
            spotsStatistics: [{reportSum: 213, used_reportSum: 0, resourceName: "奉节夔州博物馆", id: 93},
             {reportSum: 0, used_reportSum: 0, resourceName: "亚源生态农业观光园", id: 94},
             {reportSum: 123, used_reportSum: 0, resourceName: "鑫鼎农业", id: 95},
             {reportSum: 23, used_reportSum: 0, resourceName: "茅草坝滑雪场", id: 96},
             {reportSum: 12, used_reportSum: 0, resourceName: "文昌田园", id: 97},
             {reportSum: 2, used_reportSum: 0, resourceName: "云顶苑", id: 98},
             {reportSum: 676, used_reportSum: 0, resourceName: "横塘山庄", id: 99},
             {reportSum: 213, used_reportSum: 0, resourceName: "大窝社区", id: 100},
             {reportSum: 23, used_reportSum: 0, resourceName: "箩筐岩生态园", id: 101}
            ],
            showNum: 0,
        }
        this.mapInterval=''
        const { changeBg } = this.props
    }


    handle = () => {
        const _this = this
        const { changeBg } = this.props
        this.setState({ selectTab: !this.state.selectTab }, function () {
            changeBg(_this.state.selectTab)
            if(this.state.selectTab){
                clearInterval(this.mapInterval)
            }
        })

    }
    

    componentWillUnmount() {
        
        clearInterval(this.mapInterval)
    }

    componentDidMount() {
        axios.request({
            url: 'http://yuyue.fjlypt.com/api/Bigdata/spotsStatistics',
            method: 'get'
        }).then((res) => {
            console.log(res.data)
            this.setState({ spotsStatistics: res.data }, () => {

                this.mapInterval=setInterval(()=>{
                    if(this.state.showNum==8){this.setState({showNum:0})}else{
                     this.setState({showNum:this.state.showNum+1})
                }
                },4000)
            })
        })
    }

    render() {
        const { selectTab, showNum, spotsStatistics } = this.state
        
        return (
            
            <div className={Homes.content} >
                <div className={Homes.title} 
                // style={{ backgroundImage: selectTab && `url(${vedioTitle})` }}
                >
                    <ShowTime/>
                    <ul>
                        <li onClick={this.handle} className={selectTab ? Homes.choose_notactive : Homes.choose_active}>数据统计</li>
                        <li onClick={this.handle} className={selectTab ? Homes.choose_active : Homes.choose_notactive}>视频监控</li>
                    </ul>
                </div>
                {
                    selectTab ? <div className={Homes.contentWrap}><VedioMV /></div>
                        : <div className={Homes.contentWrap}>
                            <div className={'left-content'}>
                                <div className={'num_item'}>
                                    <EchartPerson />
                                </div>
                                <div className={'num_item'}>
                                    <BadiEchart />
                                </div>
                            </div>

                            
                            <div className={'center-content'}>

                                {/* 地图跳转 */}{spotsStatistics[0] &&
                                <div style={{ float: 'left',height:'100%' }} >
                                    <NumStream rep_used={spotsStatistics} showNum={showNum} />
                                    <div className={'map'}>
                                         <ul>
                                            <li style={{ visibility: showNum == 0 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 0 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[0].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[0].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[0].used_reportSum}</p>
                                                </div>
                                            </li>

                                            <li style={{ top: '69px', left: '139px', visibility: showNum == 1 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 1 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[1].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[1].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[1].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '87px', left: '130px', visibility: showNum == 2 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 2 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[2].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[2].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[2].used_reportSum}</p>
                                                </div>
                                            </li>

                                            <li style={{ top: '105px', left: '109px', visibility: showNum == 3 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 3 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[3].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[3].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[3].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '130px', left: '50px', visibility: showNum == 4 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 4 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[4].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[4].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[4].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '140px', left: '70px', visibility: showNum == 5 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 5 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[5].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[5].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[5].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '144px', left: '102px', visibility: showNum == 6 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 6 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[6].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[6].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[6].used_reportSum}</p>
                                                </div>
                                            </li>


                                            <li style={{ top: '77px', left: '150px', visibility: showNum == 7 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 7 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[7].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[7].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[7].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '-5px', left: '126px', visibility: showNum == 8 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 8 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[8].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[8].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[8].used_reportSum}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>}


                                <div className={'sum-num'}>
                                    <CenterEchart />
                                </div>
                            </div>


                            <div className={'right-content'}>
                                视频监控
                                <Vedio />
                            </div>
                        </div>
                }

            </div>
        )
    }
}
