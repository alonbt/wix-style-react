/* eslint-disable */
import React from 'react';
import { Breadcrumbs, Layout, Cell } from 'wix-style-react';


class BreadcrumbsSizes extends React.Component {

  render(){
    const items = [
      { id: 1, value: 'first item' },
      { id: 2, value: 'second item' },
      { id: 3, value: 'third item' },
    ];

    return <Layout>
      <Cell>
        <Breadcrumbs items={items} />
      </Cell>
      <Cell>
        <Breadcrumbs
          items={items}
          size='large'
        />
      </Cell>
    </Layout>
  }
}
export default BreadcrumbsSizes;