import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World!</h1>;

function SayHello(props) {
  return <h1>Hello {props.name}</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), interval: null };
  }

  tick() {
    this.setState({ date: new Date() });
    // this.state.date = new Date();
  }

  componentDidMount() {
    const interval = setInterval(() => this.tick(), 1000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <h1>
        Hello {this.props.name}, it's {this.state.date.toLocaleTimeString()}
      </h1>
    );
  }
}

class DisplayTextAndInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sayHello: "World!" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({ sayHello: inputValue });
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.sayHello}</h1>
        <input
          type="text"
          onChange={(event) => this.handleInputChange(event)}
        />
      </>
    );
  }
}

const app = (
  <>
    <DisplayTextAndInput />
  </>
);

ReactDOM.render(app, document.getElementById("root"));
