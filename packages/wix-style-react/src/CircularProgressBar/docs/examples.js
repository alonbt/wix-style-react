export const sizes = `<Layout>
  <Cell>
    <CircularProgressBar size="small" value={45} />
  </Cell>
  <Cell>
    <CircularProgressBar size="medium" value={45} />
  </Cell>
    <Cell>
    <CircularProgressBar size="large" value={45} />
  </Cell>
</Layout>`;

export const progressIndication = `<Layout>
  <Cell>
    <CircularProgressBar showProgressIndication value={0} />
  </Cell>
  <Cell>
    <CircularProgressBar showProgressIndication value={50} />
  </Cell>
  <Cell>
    <CircularProgressBar showProgressIndication value={100} />
  </Cell>
</Layout>`;

export const themes = `<Layout>
  <Cell>
    <CircularProgressBar value={20} />
  </Cell>
    <Cell>
    <Box height={54} width={54} backgroundColor="D10">
        <CircularProgressBar light value={20} />
    </Box>
  </Cell>
</Layout>`;

export const errors = `<Layout>
  <Cell>
    <CircularProgressBar error value={20} />
  </Cell>
  <Cell>
    <Box height={54} width={54} backgroundColor="D10">
       <CircularProgressBar light error value={20} />
    </Box>
  </Cell>
    <Cell>
    <CircularProgressBar showProgressIndication error errorMessage="some error" value={20} />
  </Cell>
</Layout>`;

export const label = `<Layout>
<Cell>
  <CircularProgressBar error value={20} />
</Cell>
<Cell>
  <Box height={54} width={54} backgroundColor="D10">
     <CircularProgressBar light error value={20} />
  </Box>
</Cell>
  <Cell>
  <CircularProgressBar label="1/5" showProgressIndication error errorMessage="some error" value={20} />
</Cell>
</Layout>`;
