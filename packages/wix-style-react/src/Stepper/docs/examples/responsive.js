/* eslint-disable */
class StepperWithState extends React.PureComponent {
  state = {
    activeStep: 1,
  };

  render() {
    return (
      <Box backgroundColor="D80" padding="small">
        <Stepper
          activeStep={this.state.activeStep}
          steps={[
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name', type: 'disabled' },
          ]}
          onClick={activeStep => this.setState({ activeStep })}
        />
      </Box>
    );
  }
}
