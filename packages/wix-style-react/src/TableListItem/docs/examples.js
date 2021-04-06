export const columnAlignmentExample = `
<TableListItem
      showDivider
      options={[
        { value: 'Personal Finance', align: 'right' },
        { value: '7 posts', align: 'center' },
        { value: 'Last update on 27 April 2020', align: 'left' },
      ]}
/>`;

export const columnsExample = `
<Layout cols={1}>
<TableListItem showDivider options={[{ value: 'Personal Finance' }]} />
      <TableListItem
        showDivider
        options={[
          { value: 'Personal Finance', width: '1fr' },
          { value: '7 posts', width: '2fr' },
        ]}
      />
      <TableListItem
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '7 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
</Layout>`;

export const dividerExample = `
<Layout cols={1}>
<TableListItem
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
</Layout>`;

export const draggableExample = `
<Layout cols={1}>
      <TableListItem
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        draggable
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        draggable
        dragDisabled
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
</Layout>`;

export const verticalPaddingExample = `
<Layout cols={1}>
      <TableListItem
        verticalPadding="tiny"
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '7 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        verticalPadding="small"
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '7 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        verticalPadding="medium"
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '7 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
</Layout>`;

export const selectionExample = `
<Layout cols={1}>
      <TableListItem
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
      <TableListItem
        checkbox
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '12 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
      />
</Layout>
`;

export const structureExample = `
    <TableListItem
      checkbox
      draggable
      showDivider
      options={[{ value: 'Personal Finance' }]}
    />
`;

export const tableActionCellExample = `
<TableListItem
      onClick={() => window.alert('onClick')}
      checkbox
      draggable
      showDivider
      options={[
        { value: 'Personal Finance' },
        { value: '12 posts' },
        { value: 'Last update on 27 April 2020' },
        {
          value: (
            <TableActionCell
              primaryAction={{
                text: 'Edit',
                skin: 'standard',
                onClick: () => window.alert('Primary action was triggered!'),
              }}
              secondaryActions={[
                {
                  text: 'Star',
                  icon: <Icons.Star />,
                  onClick: () => window.alert('Star action was triggered.'),
                },
                {
                  text: 'Download',
                  icon: <Icons.Download />,
                  onClick: () => window.alert('Download action was triggered.'),
                },
                {
                  text: 'Duplicate',
                  icon: <Icons.Duplicate />,
                  onClick: () =>
                    window.alert('Duplicate action was triggered.'),
                },
                {
                  text: 'Print',
                  icon: <Icons.Print />,
                  onClick: () => window.alert('Print action was triggered.'),
                },
              ]}
              numOfVisibleSecondaryActions={0}
            />
          ),
        },
      ]}
    />
`;
