import React from 'react';
import ReactDOM from 'react-dom';




class ClickLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      clickTimes: []
    };
    this.handleChange = this.handleChange.bind(this);
  }




  handleChange(event) {
    const currentTime = new Date().toLocaleTimeString();
    this.setState({
      clickCount: this.state.clickCount + 1,
      clickTimes: [...this.state.clickTimes, currentTime]
    });
  }




  render() {
    return (
      <div>
        <h1>Registro de horarios em cliques</h1>
        <div class="geral">
        <button onClick={this.handleChange}>Clique aqui</button>
        <div>Total de cliques: {this.state.clickCount}</div>
        <ul>
          {this.state.clickTimes.map((time, index) => (
           <div class="merda"> <li key={index}>{time}</li> </div>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}




ReactDOM.render(
  <ClickLogger />,
  document.getElementById('root')
);
