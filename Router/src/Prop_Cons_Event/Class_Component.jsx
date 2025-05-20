// import React, { Component } from 'react';

// class ClickCounter extends Component {
//   state = {
//     count: 0
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <p>Current Count: {this.state.count}</p>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </div>
//     );
//   }
// }

// export default ClickCounter;

import React, { Component } from 'react';

class ToggleText extends Component {
  state = {
    visible: false
  };

  handleToggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && (
            
          <div>
            <p>This is the toggled text.</p>
          </div>
        )}
      </div>
    );
  }
}

export default ToggleText;
