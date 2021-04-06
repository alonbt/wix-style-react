export const simple = `
class myComponent extends React.Component {
  
    state = {
      open: true
    };
  
    render() {
        const { open } = this.state;
        return (
            <>
                <div style={{display: 'flex', marginBottom: '15px', alignItems: 'center'}}>
                    <ToggleSwitch checked={open} onChange={() => this.setState({ open: !open})} size={'small'}/>
                    <span style={{ marginLeft: '10px'}}>Toggle collapse</span>
                </div>
                <Collapse open={open}>
                    <FormField label="Some collapsible content">
                        <Input />
                    </FormField>
                </Collapse>
            </>
      );
    }
  }
`;
