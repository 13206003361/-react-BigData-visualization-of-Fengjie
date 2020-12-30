import React, { Component } from 'react'
import Homes from './Home.less'

export default class CenterLoop extends Component {
    constructor(props){
        super(props)
        this.state={
            today:0
        }
    }
    

    componentWillUnmount() {
        clearInterval(this.timer)
       
    }
    render() {
        return (
            <div className={'center-content'}>
                                {/* 地图跳转 */}{spotsStatistics[0] &&
                                <div style={{ float: 'left' }}>
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

                                            <li style={{ top: '108px', left: '113px', visibility: showNum == 1 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 1 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[1].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[1].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[1].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '126px', left: '104px', visibility: showNum == 2 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 2 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[2].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[2].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[2].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '119px', left: '109px', visibility: showNum == 3 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 3 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[3].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[3].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[3].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '85px', left: '82px', visibility: showNum == 4 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 4 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[4].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[4].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[4].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '127px', left: '40px', visibility: showNum == 5 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 5 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[5].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[5].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[5].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '144px', left: '49px', visibility: showNum == 6 ? 'visible' : 'hidden' }}>
                                                <div className={'tip'} style={{ visibility: showNum == 6 ? 'visible' : 'hidden' }}>
                                                    <p>{spotsStatistics[6].resourceName}</p>
                                                    <p>预约人数：{spotsStatistics[6].reportSum}</p>
                                                    <p>核销人数：{spotsStatistics[6].used_reportSum}</p>
                                                </div>
                                            </li>
                                            <li style={{ top: '115px', left: '83px', visibility: showNum == 7 ? 'visible' : 'hidden' }}>
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
                                        </ul>}
                                    </div>
                                </div>}
                                <div className={'sum-num'}>
                                    <CenterEchart />
                                </div>
                            </div>
        )
    }
}
