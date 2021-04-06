/* eslint-disable */
import React from 'react';
import { Breadcrumbs, Box, Layout, Cell } from 'wix-style-react';

class BreadcrumbsThemes extends React.Component {

  render(){
    const items = [
      { id: 1, value: 'first item' },
      { id: 2, value: 'second item' },
      { id: 3, value: 'third item' },
    ];

    return <Layout>
      <Cell>
        <Box padding='10px'>
          <Breadcrumbs items={items}/>
        </Box>
      </Cell>
      <Cell>
        <Box padding='10px' backgroundColor='D80'>
          <Breadcrumbs items={items} theme='onWhiteBackground' />
        </Box>
      </Cell>
      <Cell>
        <Box padding='10px' backgroundColor='D10'>
          <Breadcrumbs items={items} theme='onDarkBackground' />
        </Box>
      </Cell>
    </Layout>
  }
}
export default BreadcrumbsThemes;