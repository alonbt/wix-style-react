/* eslint-disable */
import React from 'react';
import { Breadcrumbs, Layout, Cell } from 'wix-style-react';

class StandardBreadcrumbs extends React.Component {

  render(){
    const items = [
      { id: 1, value: 'first item' },
      { id: 2, value: 'second item' },
      { id: 3, value: 'third item' },
    ];

    const itemsWithLinks = [
      { id: 1, value: 'Wix', link: 'http://www.wix.com' },
      {
        id: 2,
        value: 'Google',
        customElement: (
          <a
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            href="http://www.google.com"
          >
            Google
          </a>
        ),
      },
      { id: 3, value: 'Yahoo', link: 'http://www.yahoo.com' },
    ];

    return <Layout>
      <Cell>
        <Breadcrumbs items={items}/>
      </Cell>
      <Cell>
        <Breadcrumbs items={itemsWithLinks} />
      </Cell>
    </Layout>
  }
}
export default StandardBreadcrumbs;