/* eslint-disable */
<Layout cols={1}>
  <Box backgroundColor="D80" padding="small">
    <Stepper
      type="circle"
      activeStep={0}
      steps={[
        { text: 'First step', type: 'completed' },
        { text: 'Second step' },
        { text: 'Third step', type: 'error' },
        { text: 'Fourth step' },
        { text: 'Fifth step', type: 'disabled' },
      ]}
      onClick={activeStep => console.log('activeStep', activeStep)}
    />
  </Box>
  <Box backgroundColor="D80" padding="small">
    <Stepper
      type="text"
      activeStep={0}
      steps={[
        { text: 'First step', type: 'completed' },
        { text: 'Second step' },
        { text: 'Third step', type: 'error' },
        { text: 'Fourth step' },
        { text: 'Fifth step', type: 'disabled' },
      ]}
      onClick={activeStep => console.log('activeStep', activeStep)}
    />
  </Box>
</Layout>
