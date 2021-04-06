export const withPlaceholder = `
<NoBorderInput
  placeholder="this is a placeholder"
/>
`;

export const withLabel = `
<NoBorderInput
  label="First name"
/>
`;

export const controlled = `
() => {
  const [val, setVal] = React.useState("Moshe Kerbel");
  return <NoBorderInput label="First name" value={val} onChange={(e) => setVal(e.target.value)}/>
}
`;
