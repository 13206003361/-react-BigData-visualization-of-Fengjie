import React, { Component } from 'react'
import Homes from './Home.less'
import moment from 'moment'

export default class ShowTime extends Component {
    constructor(props){
        super(props)
        this.state={
            today:0
        }
    }
    timer = setInterval(() => {
        var today = moment().format('YYYY 年 M月 D日    H:mm:ss ')// 2020/12/19 11:08:30
        this.setState({ today })
    }, 1000)
    componentWillUnmount() {
        clearInterval(this.timer)
       
    }
    render() {
        return (
            <p className={Homes.sweather}>{this.state.today}</p>
        )
    }
}
