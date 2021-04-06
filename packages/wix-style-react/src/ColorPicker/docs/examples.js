export const simple = `
class MyComponent extends React.Component {

 state= {
   current: '#F1EA50',
 };

 render() {
   const { current } = this.state;

   return (
     <>
      <ColorPicker
        value={current}
        onChange={(color) => this.setState({current: color.hex()})}
        onConfirm={() => {
          alert('New color is confirmed: '+ current);
        }}
        onCancel={(prevColor) => {
          this.setState({current: prevColor})
        }}
        onAdd={() => {
          alert('New color is added: '+ current);
        }}
        showConverter={false}
      />
    </>
    );
  }
}
`;
export const withConverter = `
class MyComponent extends React.Component {

 state= {
   current: '#34b7eb',
   addTooltip: false,
 };

 render() {
   const { current, addTooltip } = this.state;

   return (
     <>
      <ColorPicker
        value={current}
        onChange={(color) => this.setState({current: color.hex()})}
        onConfirm={() => {
          alert('New color is confirmed: '+ current);
        }}
        onCancel={(prevColor) => {
          this.setState({current: prevColor})
        }}
        onAdd={() => {
          alert('New color is added: '+ current);
        }}
        addTooltipContent={addTooltip ? 'Add color' : ''}
      />
      <div style={{marginTop: '10px'}}>
        <Checkbox checked={addTooltip} onChange={() => this.setState({addTooltip: !addTooltip})}>
          With tooltip on 'Add' button
        </Checkbox>
      </div>
    </>
    );
  }
}
`;

export const withHistory = `
class MyComponent extends React.Component {

  state= {
    current: '#c479ed',
    previous: '#c479ed',
  };
 
  render() {
    const { current, previous} = this.state;
 
    return (
     <ColorPicker
       value={current}
       onChange={(color) => this.setState({current: color.hex()})}
       onConfirm={() => {
        this.setState({previous: current});
        alert('New color confirmed: '+ current);
       }}
       onCancel={(prevColor) => {
         this.setState({current: prevColor})
       }}
       onAdd={(color) => {
        alert('New color is added: '+ color);
       }}
       showHistory={true}
     />
     );
   }
 }
`;
export const withEmptyInput = `
class MyComponent extends React.Component {

  state= {
    current: '',
  };
 
  render() {
    const { current } = this.state;
 
    return (
     <ColorPicker
       value={current}
       onChange={(color) => this.setState({current: color.alpha() === 0 ? '' : color.hex()})}
       onConfirm={() => {
        this.setState({previous: current});
        alert( current ? 'New color confirmed: '+ current : 'Empty value confirmed');
       }}
       onCancel={(prevColor) => {
         this.setState({current: prevColor});
       }}
       onAdd={() => {
        alert('New color is added: '+ current);
       }}
       allowEmpty={true}
       emptyPlaceholder={'No color picked..'}
     />
     );
   }
 }
`;
export const withChildren = `
class MyComponent extends React.Component {
  state= {
    current: '#008000',
  };
 
  render() {
    const { current } = this.state;
 
    return (
       <ColorPicker
         value={current}
         onChange={(color) => this.setState({current: color.hex()})}
         onConfirm={() => {
           alert('New color is confirmed: '+ current);
         }}
         onCancel={(prevColor) => this.setState({current: prevColor})}
         onAdd={() => {
           alert('New color is added: '+ current);
         }}
       >
          {({ changeColor }) => (
            <>
              <span style={{marginBottom: '5px', display: 'flex'}}>Here can be some nice extra stuff like these color options</span>
              <Swatches
                colors={['red', 'green', 'blue']}
                onClick={_color => {
                  changeColor(_color);
                }}
              />
            </>
          )}
        </ColorPicker>
     );
   }
 }
`;
