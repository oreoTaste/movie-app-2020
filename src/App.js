import React from 'react';

// regarding the React.Component
// 1. Mounting : constructor > render > componentDidMount
// 2. Updating : reder > componentDidUpdate
// 3. UnMounting : componentWillUnmount
class App extends React.Component {
  // 1. Mounting (constructor) : it is actually from JS
  constructor(props) {
    super(props);
    console.log("constructor")
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  // 3. Unmounting (componentWillUnmount)
  componentWillUnmount(){
    console.log("component will unmount")
  }
  // 2. Updating (componentDidUpdate)
  componentDidUpdate() {
    console.log("component did update")
  }
  // 1. Mounting (componentDidMount)
  componentDidMount(){
    console.log("conponent rendered")
  }
  // 1. Mounting + Updating (render)
  render() {
    console.log("i'm rendering")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
