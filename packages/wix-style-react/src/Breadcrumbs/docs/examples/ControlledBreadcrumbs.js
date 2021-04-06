/* eslint-disable */
import React from 'react';
import { Breadcrumbs } from 'wix-style-react';

class ControlledBreadcrumbs extends React.Component {

  state = { activeId: 1 };

  onClick = ({id }) => this.setState({ activeId: id });

  render() {
    const items = [
      { id: 1, value: 'first item' },
      { id: 2, value: 'second item' },
      { id: 3, value: 'third item' },
    ];

    const { activeId } = this.state;

    return (
      <Breadcrumbs
        items={items}
        activeId={activeId}
        onClick={this.onClick}
      />
    );
  }

}
export default ControlledBreadcrumbs;