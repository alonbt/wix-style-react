export const sizes = `
<React.Fragment>
      <Tag size="tiny" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag size="small" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag size="medium" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag size="large" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
</React.Fragment>
`;

export const themes = `
<React.Fragment>
      <Tag theme="standard" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="error" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="warning" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="dark" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="neutral" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="light" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
      <br/><br/>
      <Tag theme="lightOutlined" onClick={(x)=>{}} onRemove={()=>{}}>
          Hello World
      </Tag>
</React.Fragment>
`;

const thumb = `
<div
  style={{
    backgroundColor: 'pink',
    height: '100%',
    width: '100%',
  }}
/>
`;

export const thumbs = `
<React.Fragment>
  <Tag thumb={${thumb}} size="tiny" onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
  <br/><br/>
  <Tag thumb={${thumb}} size="small" onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
  <br/><br/>
  <Tag thumb={${thumb}} size="medium" onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
  <br/><br/>
  <Tag thumb={${thumb}} size="large" onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
</React.Fragment>
`;

export const removable = `
<React.Fragment>
  <p>Removable</p>
  <Tag onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
  <br/><br/>
  <p>Not removable</p>
  <Tag removable={false} onClick={(x)=>{}} onRemove={()=>{}}>
      Hello World
  </Tag>
</React.Fragment>
`;
