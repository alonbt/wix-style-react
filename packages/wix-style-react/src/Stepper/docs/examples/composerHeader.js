/* eslint-disable */
class StepperWithComposerHeader extends React.PureComponent {
  state = {
    activeStep: 1,
  };

  render() {
    return (
      <ComposerHeader backButtonValue="Back to Social Posts">
        <ComposerHeader.Actions justifyContent="flex-start">
          <Stepper
            type="text"
            activeStep={this.state.activeStep}
            steps={[
              { text: 'First step', type: 'completed' },
              { text: 'Second step', type: 'completed' },
              { text: 'Third step', type: 'disabled' },
            ]}
            onClick={activeStep => this.setState({ activeStep })}
          />
        </ComposerHeader.Actions>
      </ComposerHeader>
    );
  }
}
