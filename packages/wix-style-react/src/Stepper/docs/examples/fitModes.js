/* eslint-disable */
<Layout cols={1}>
  <Box backgroundColor="D80" padding="small">
    <Stepper
      fit="normal"
      activeStep={0}
      steps={[
        { text: 'First step', type: 'completed' },
        { text: 'Second step' },
        { text: 'Third step', type: 'error' },
        { text: 'Fourth step' },
      ]}
      onClick={activeStep => console.log('activeStep', activeStep)}
    />
  </Box>
  <Box backgroundColor="D80" padding="small">
    <Stepper
      fit="stretched"
      activeStep={0}
      steps={[
        { text: 'First step', type: 'completed' },
        { text: 'Second step' },
        { text: 'Third step', type: 'error' },
        { text: 'Fourth step' },
      ]}
      onClick={activeStep => console.log('activeStep', activeStep)}
    />
  </Box>
</Layout>
