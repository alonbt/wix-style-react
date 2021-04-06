export const short = `
  <Pagination currentPage={4} totalPages={7}/>
`;

export const long = `
  <Pagination  currentPage={8} totalPages={15}/>
`;

export const interactive = `
  () => {
    const [selected, setSelected] = React.useState(1);
    const handleChange = ({page, event}) => {
      event.preventDefault();
      setSelected(page);
    }
    return  <Pagination currentPage={selected} totalPages={15} onChange={handleChange}/>
  }
`;
