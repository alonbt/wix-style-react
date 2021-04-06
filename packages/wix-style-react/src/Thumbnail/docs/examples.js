import React from 'react';

export const getImageUrl = (w, h) =>
  `https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_${w},h_${h}/c78d05b79ede429fb77c9d8ec4443b93.jpg`;

export const image = <img src={getImageUrl(300, 200)} />;

export const exampleDefault = `
<Layout gap="12px">
  <Cell span={6}>
    <Thumbnail title="Thumbnail" />
  </Cell>

  <Cell span={6}>
    <Thumbnail
      title="Thumbnail"
      selected
    />
  </Cell>
</Layout>
`;

export const selectedWithImage = `
<Thumbnail
  title="Thumbnail Title"
  description="Description about this thumbnail option goes here"
  image="${getImageUrl(234, 72)}"
  width={270}
  />
`;

export const selectedWithBackgroundImage = `
<Thumbnail
  backgroundImage="${getImageUrl(270, 270)}"
  width={270}
  height={270}
  title="Thumbnail Title"
  />
`;

export const withCustomChildren = `
<Thumbnail title="Thumbnail Title" width="250px">
  <Box padding="3">
    <Layout gap="12px" cols={4} alignItems="center">
      <Cell span={1}>
        <Avatar size="size48" />
      </Cell>
      <Cell span={3}>
        <Text size="medium" weight="bold">Jon Doe</Text>
        <Box>
          <Text size="small" weight="thin">Description goes here</Text>
        </Box>
      </Cell>
    </Layout>
  </Box>
</Thumbnail>
`;

export const listOfSmall = `
<Layout gap="12px" cols={4}>
  { [1,2,3,4].map(n =>
    <Cell key={n} span={1}>
      <Thumbnail
        size="tiny"
        backgroundImage="${getImageUrl(64, 64)}"
        selected={n === 2}
        width={64}
        height={64}
        />
    </Cell>
  ) }
</Layout>
`;

export const disabledWithImage = `
<Layout>
  <Cell>
    <Text>Disabled: with image</Text>
    <Thumbnail
      disabled
      title="Thumbnail Title"
      description="Description about this thumbnail option goes here"
      image="${getImageUrl(234, 72)}"
      width={270}
    />
  </Cell>
  <Cell>
    <Text>Disabled: with background image</Text>
    <Thumbnail
      disabled
      backgroundImage="${getImageUrl(270, 270)}"
      width={270}
      height={270}
      title="Thumbnail Title"
    />
  </Cell>
</Layout>
`;

export const withDifferentAlignments = `
<Layout>
  <Cell>
    <Text>contentAlignment: center</Text>
    <Thumbnail
      title="Thumbnail Title"
      description="Description about this thumbnail option goes here"
      image="${getImageUrl(234, 72)}"
      contentAlignment="center"
      width={270}
      height={300}
    />
  </Cell>
  <Cell>
    <Text>contentAlignment: top</Text>
    <Thumbnail
      title="Thumbnail Title"
      description="Description about this thumbnail option goes here"
      image="${getImageUrl(234, 72)}"
      contentAlignment="top"
      width={270}
      height={300}
    />
  </Cell>
</Layout>
`;

export const controlled = `class ControlledThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      thumbnails: ['first', 'second', 'third'],
    };
  }

  setSelected = thumbnail => {
    this.setState(({ selected }) => ({
      selected: selected.includes(thumbnail)
        ? selected.filter(s => s !== thumbnail)
        : [...selected, thumbnail],
    }));
  };

  render() {
    const { selected, thumbnails } = this.state;

    return (
      <Box height="200px">
        <Layout gap="12px">
          {thumbnails.map(thumbnail => (
            <Cell key={thumbnail} span={4}>
              <Thumbnail
                selected={selected.includes(thumbnail)}
                title={thumbnail + ' thumbnail'}
                description={\`This thumbnail is \${
                  selected.includes(thumbnail) ? '' : 'not '
                }selected \`}
                onClick={() => this.setSelected(thumbnail)}
              />
            </Cell>
          ))}
        </Layout>
      </Box>
    );
  }
}
`;
