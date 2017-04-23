import React from "react";
import "./App.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getClock(this.props.deadline);
    }
    getClock(deadline) {
        var time = Date.parse(deadline) - Date.parse(new Date);
        var seconds = Math.floor((time/1000) % 60);
        var minutes = Math.floor((time/1000/60) % 60);
        var hours = Math.floor(time/(1000*60*60) % 24);
        var days = Math.floor(time/(1000*60*60*24));
        this.setState({days,hours,minutes,seconds})
    }
      componentDidMount() {
          setInterval( () => this.getClock(this.props.deadline), 1000);
      }
    render() {
        return(
            <div>
                <div className="days">{this.state.days} Days</div>
                <div className="hours">{this.state.hours} Hours</div>
                <div className="minutes">{this.state.minutes} Minutes</div>
                <div className="seconds">{this.state.seconds} Seconds</div>
            </div>
        );
    }
}

export default Clock;