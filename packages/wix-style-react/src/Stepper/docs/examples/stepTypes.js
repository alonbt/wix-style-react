/* eslint-disable */
<Box backgroundColor="D80" padding="small">
  <Stepper
    activeStep={2}
    steps={[
      { text: 'Completed step', type: 'completed' },
      { text: 'Error step', type: 'error' },
      { text: 'Normal step' },
      { text: 'Disabled step', type: 'disabled' },
    ]}
    onClick={activeStep => console.log('activeStep', activeStep)}
  />
</Box>
