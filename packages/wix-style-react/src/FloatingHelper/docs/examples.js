export const simpleExample = `
<Box height="100px" verticalAlign="middle" paddingRight="10px">
  <FloatingHelper
          target={<Text>I am a FloatingHelper target</Text>}
          content={
            <FloatingHelper.Content
              title="Don’t forget to setup payments"
              body="In order to sell your music you need to choose a payment method."
            />
          }
          placement="right"
   />
</Box>
`;

export const fullExample = `
<Box height="150px" verticalAlign="middle" paddingRight="10px">
  <FloatingHelper
        target={<Text>I am a FloatingHelper target</Text>}
        content={
            <FloatingHelper.Content
              title="Don’t forget to setup payments"
              body="In order to sell your music you need to choose a payment method."
              actionText="Ok, Take Me There"
              onActionClick={() => null}
              image={<Icons.Image width="102" height="102" viewBox="4 4 18 18" />}
            />
          }
         placement="right"
   />
</Box>
`;

export const programmaticExample = `
class ProgrammaticExample extends React.Component {
  helperRef;

  render() {
    return (
    <Box height="100px" verticalAlign="middle">
      <Button onClick={() => this.helperRef.open()}>Click to open</Button>
      <FloatingHelper
            ref={ref => this.helperRef = ref}
            initiallyOpened={false}
            target={<span/>}
            content={
              <FloatingHelper.Content
                title="Don’t forget to setup payments"
                body="In order to sell your music you need to choose a payment method."
              />
            }
            placement="right"
          />
    </Box>
    );
  }
}
`;

export const controlledExample = `
() =>  {

  const [ isHelperOpen, setOpenHelper ] = React.useState(true);

  return (
      <Box height="100px" verticalAlign="middle" >
        <Button onClick={() => setOpenHelper(!isHelperOpen) }>
            Click to {isHelperOpen? 'Close' : 'Open'}
        </Button>
        <FloatingHelper
          opened={isHelperOpen}
          target={<span/>}
          content={
            <FloatingHelper.Content
              title="Don’t forget to setup payments"
              body="In order to sell your music you need to choose a payment method."
            />
          }
          placement="right"
        />
      </Box>
    );
}
`;

export const appearance = `
  <Layout>
      <Cell>
          <Box height="150px" verticalAlign="middle">
            <FloatingHelper
                target={<Text>I am a FloatingHelper target</Text>}
                content={
                  <FloatingHelper.Content
                    title="Don’t forget to setup payments"
                    body="In order to sell your music you need to choose a payment method."
                  />
                }
                placement="right"
              />
            </Box>
       </Cell>
       <Cell>
           <Box height="150px" verticalAlign="middle">
              <FloatingHelper
                appearance="light"
                target={<Text>I am a FloatingHelper target</Text>}
                content={
                  <FloatingHelper.Content
                    title="Don’t forget to setup payments"
                    body="In order to sell your music you need to choose a payment method."
                  />
                }
                placement="right"
              />
            </Box>
       </Cell>
  </Layout>
`;
