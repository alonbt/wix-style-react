export const structure = `
    <EmptyState
        theme={'page'}
        image={<div style={{ height: 120, width: 120, backgroundColor: '#dfe5eb', borderRadius: '50%' }}/>}
        title="You don't have any items yet"
        subtitle='Create your product item in an easy & fast way to display it on your site'
    />
`;
export const pageTheme = `
    <EmptyState
        theme={'page'}
        title="Page Theme"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
export const pageNoBorderTheme = `
    <EmptyState
        theme={'page-no-border'}
        title="Page-No-Border Theme"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
export const sectionTheme = `
    <EmptyState
        theme={'section'}
        title="Section Theme"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
export const children = `
    <EmptyState
        theme={'page'}
        title="You don't have any items yet"
    >
        {<TextButton prefixIcon={<Icons.Add />}>New Item</TextButton>}
    </EmptyState>
`;
export const alignStart = `
    <EmptyState
        theme={'page'}
        align={'start'}
        title="You don't have any items yet"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
export const alignCenter = `
    <EmptyState
        theme={'page'}
        align={'center'}
        title="You don't have any items yet"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
export const alignEnd = `
    <EmptyState
        theme={'page'}
        align={'end'}
        title="You don't have any items yet"
        subtitle='Create your product item in an easy & fast way to display it on your site' />
`;
