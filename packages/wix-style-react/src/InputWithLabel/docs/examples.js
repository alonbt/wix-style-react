export const suffix = `
<Layout>
  <Cell>
    <InputWithLabel label="No icons"/>
  </Cell>
  <Cell>
    <InputWithLabel label="One icon" suffix={[<Icons.InfoCircle />]} />
  </Cell>
  <Cell>
    <InputWithLabel label="Two icons" suffix={[<Icons.Hidden/>, <Icons.InfoCircle />]} />
  </Cell>
  <Cell>
    <InputWithLabel label="Clickable icon" suffix={[<Icons.InfoCircle style={{cursor: "pointer"}} />]} />
  </Cell>
</Layout>
`;

export const error = `
<Layout>
  <Cell>
    <InputWithLabel label="Important field" status={Input.StatusError} statusMessage="This field is required"/>
  </Cell>
</Layout>
`;
