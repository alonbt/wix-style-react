/* eslint-disable */

class ControlledExample extends React.Component {
    state = {
      value: ''
    };
    
    handleClick = () => {
        const newValue = this.state.value ? '' : 'John Doe';
        this.setState({value: newValue})
    }

    render() {
      return (
        <div>
            <Button onClick={this.handleClick}>Toggle input value</Button>
            <LabelledElement label="Full Name" value={this.state.value}>
                <Input size="large" value={this.state.value} />
            </LabelledElement>
        </div>
      );
    }
  }