import React from 'react';
import { Text } from 'wix-style-react';

class App extends React.Component {
  state = {
    text: 'hey',
  };
  render() {
    return (
      <div data-name="App" style={{ width: 30 }}>
        <Text ellipsis data-name="ES-Named-Text">
          {this.state.text}
        </Text>
        <button
          data-name="button"
          onClick={() =>
            this.setState({
              text: 'heyheyheyheyheyheyheyheyheyheyheyheyheyhey',
            })
          }
        />
      </div>
    );
  }
}

export default App;
