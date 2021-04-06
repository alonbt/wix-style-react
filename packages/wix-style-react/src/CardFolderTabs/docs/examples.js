export const simple = `
class CollapsableCard extends React.Component {
  state = { activeTabId: '1' };
  render() {
    return (
      <CardFolderTabs
        activeId={this.state.activeTabId}
        onTabChange={activeTabId => this.setState({ activeTabId })}
      >
        <CardFolderTabs.Tab id="1" name="Selected Tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is a nice tab"
                subtitle="Create your own tabs and try them!"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="2" name="Second Tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is a nice tab"
                subtitle="Create your own tabs and try them!"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
          <div>This tab has no real content, it's disabled anyway</div>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="4" name="Fourth Tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is a nice tab"
                subtitle="Create your own tabs and try them!"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
      </CardFolderTabs>
    );
  }
}
`;

export const maxTabWidth = `
class CollapsableCard extends React.Component {
  state = { activeTabId: '1' };
  render() {
    return (
      <CardFolderTabs
        maxTabWidth="200px"
        activeId={this.state.activeTabId}
        onTabChange={activeTabId => this.setState({ activeTabId })}
      >
        <CardFolderTabs.Tab id="1" name="Short Tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is a nice tab"
                subtitle="Create your own tabs and try them!"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="2" name="A very Long Tab name">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is also a nice tab"
                subtitle="It has a very long title that will eventually be truncated by ellipsis"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
      </CardFolderTabs>
    );
  }
}
`;
