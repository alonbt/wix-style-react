import React from 'react';
import {
  Rename,
  CropRotate,
  MagicWand,
  Adjust,
  CutOut,
} from 'wix-ui-icons-common';

export const items = [
  {
    id: 0,
    label: 'Crop & Rotate',
    icon: <CropRotate />,
  },
  {
    id: 1,
    label: 'Enhance',
    icon: <MagicWand />,
  },
  {
    id: 2,
    label: 'Adjust',
    icon: <Adjust />,
  },
  {
    id: 3,
    label: 'Cut Out',
    icon: <CutOut />,
  },
  {
    id: 4,
    label: 'Text',
    icon: <Rename />,
  },
];

export const disabledItems = [
  {
    id: 0,
    label: 'Crop & Rotate',
    icon: <CropRotate />,
  },
  {
    id: 1,
    label: 'Enhance',
    icon: <MagicWand />,
    disabled: true,
  },
  {
    id: 2,
    label: 'Adjust',
    icon: <Adjust />,
  },
  {
    id: 3,
    label: 'Cut Out',
    icon: <CutOut />,
    disabled: true,
  },
  {
    id: 4,
    label: 'Text',
    icon: <Rename />,
  },
];

export const fullInteractive = `
class ComposerSidebarExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedId: null,
    };
    this.items = [
      {
        id: 0,
        label: 'Crop & Rotate',
        icon: <Icons.CropRotate />,
      },
      {
        id: 1,
        label: 'Enhance',
        icon: <Icons.MagicWand />,
      },
      {
        id: 2,
        label: 'Adjust',
        icon: <Icons.Adjust />,
      },
      {
        id: 3,
        label: 'Cut Out',
        icon: <Icons.CutOut />,
      },
      {
        id: 4,
        label: 'Text',
        icon: <Icons.Rename />,
      },
    ];
  }

  onItemClick(id) {
    if (this.state.selectedId === id) {
      this.setState({
        selectedId: null
      });
      return;
    }

    const selectedItem = this.items.find(item => item.id === id);
    this.setState({
      selectedId: selectedItem.id
    });
  }

  render() {
    const { selectedId } = this.state;
    return (
      <Layout>
        <Cell>
          <ComposerSidebar
            onClick={(e, { id }) => this.onItemClick(id)}
            items={this.items}
            selectedId={selectedId}
          />
        </Cell>
      </Layout>
    );
  }
}
`;

export const disabled = `() => {
  const items = [
    {
      id: 0,
      label: 'Crop & Rotate',
      icon: <Icons.CropRotate />,
    },
    {
      id: 1,
      label: 'Enhance',
      icon: <Icons.MagicWand />,
      disabled: true,
    },
    {
      id: 2,
      label: 'Adjust',
      icon: <Icons.Adjust />,
      disabled: true,
    },
    {
      id: 3,
      label: 'Cut Out',
      icon: <Icons.CutOut />,
    },
    {
      id: 4,
      label: 'Text',
      icon: <Icons.Rename />,
    },
  ];

  return (
    <Layout>
      <Cell>
        <ComposerSidebar items={items} selectedId={1} />
      </Cell>
    </Layout>
  );
}
`;

export const sizes = `() => {
  const items = [
    {
      id: 0,
      label: 'Crop & Rotate',
      icon: <Icons.CropRotate />,
    },
    {
      id: 1,
      label: 'Enhance',
      icon: <Icons.MagicWand />,
    },
    {
      id: 2,
      label: 'Adjust',
      icon: <Icons.Adjust />,
    },
    {
      id: 3,
      label: 'Cut Out',
      icon: <Icons.CutOut />,
    },
    {
      id: 4,
      label: 'Text',
      icon: <Icons.Rename />,
    },
  ];

  return (
    <Layout cols={2} gap={0} justifyItems="center" alignItems="center">
    <Cell span={1}>
      <ComposerSidebar size="medium" items={items} selectedId={1} />
    </Cell>
    <Cell span={1}>
      <ComposerSidebar size="large" items={items} selectedId={1} />
    </Cell>
  </Layout>
  );
}
`;

export const labelPlacement = `() => {
  const items = [
    {
      id: 0,
      label: 'Crop & Rotate',
      icon: <Icons.CropRotate />,
    },
    {
      id: 1,
      label: 'Enhance',
      icon: <Icons.MagicWand />,
    },
    {
      id: 2,
      label: 'Adjust',
      icon: <Icons.Adjust />,
    },
    {
      id: 3,
      label: 'Cut Out',
      icon: <Icons.CutOut />,
    },
    {
      id: 4,
      label: 'Text',
      icon: <Icons.Rename />,
    },
  ];

  return (
    <Layout cols={2} gap={0} justifyItems="center" alignItems="center">
    <Cell span={1}>
      <ComposerSidebar labelPlacement="end" items={items} selectedId={1} />
    </Cell>
    <Cell span={1}>
      <ComposerSidebar labelPlacement="bottom" items={items} selectedId={1} />
    </Cell>
  </Layout>
  );
}
`;
