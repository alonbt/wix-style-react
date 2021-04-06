/* eslint-disable */
import React from 'react';
import { Breadcrumbs } from 'wix-style-react';

class BreadcrumbsOnClickCallback extends React.Component {

  render(){
    const items = [
      { id: 1, value: 'first item' },
      { id: 2, value: 'second item' },
      { id: 3, value: 'third item' },
    ];

    return <Breadcrumbs
      items={items}
      onClick={item =>
        alert(`clicked element is: ${JSON.stringify(item)}`)
      }
    />
  }
}
export default BreadcrumbsOnClickCallback;