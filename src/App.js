import React from 'react';
import Clock from "./clock";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    deadline: "20 april, 2017",
    new_deadline: ""
  }
}
changeDeadline() {
  this.setState({
    deadline: this.state.new_deadline
  })
}
  render() {
    return (
      <div className="app">
        <div className="deadline">Countdown: {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}/>
        <div> 
            <input type="text"
                   placeholder="date Month, year"
                   onChange={e => this.setState({deadline: e.target.value})} 
            />
            <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
