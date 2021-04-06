import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import Page from '..';
import Box from '../../Box';
import Notification from '../../Notification';
import PopoverMenu from '../../PopoverMenu';
import IconButton from '../../IconButton';
import Card from '../../Card';
import More from 'wix-ui-icons-common/More';

import { classes } from './examples/testExamples.st.css';
import classNames from 'classnames';
import { header, tail, fixedContent, content } from './examples/PageChildren';
import { storySettings } from '../docs/storySettings';
import { LongTextContent } from './examples/SomeContentComponent2';
import Button from '../../Button';
import PageFooter from '../../PageFooter';

const PageContainer = props => {
  return (
    <div
      className={classNames(classes.pageContainer, {
        [classes.withFixedScrollBar]: props.withFixedScrollBar,
      })}
      {...props}
    >
      {props.children}
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.any,
  withFixedScrollBar: PropTypes.bool,
};

const kind = getTestStoryKind(storySettings);

const defaultPageProps = {
  dataHook: storySettings.dataHook,
  gradientClassName: classes.backgroundGradient,
  children: [header(), content()],
};

const PageTestStories = storiesOf(kind, module);

PageTestStories.add('7. Default [min/max]-width', () => (
  <PageContainer>
    <Page {...defaultPageProps} />
  </PageContainer>
));

PageTestStories.add('8. Custom [min/max]-width', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      minWidth={504} // With padding: 504 + 48*2 = 600px
      maxWidth={1304} // With padding: 1304 + 48*2 = 1400px
    />
  </PageContainer>
));

PageTestStories.add('11. With Notification', () => (
  <PageContainer>
    <Page {...defaultPageProps}>
      {header()}
      <Page.Content>
        <Card>
          <Card.Header title="Hello" />
          <Card.Divider />
          <Card.Content>
            <LongTextContent />
          </Card.Content>
        </Card>
        <Notification type="sticky" show>
          <Notification.TextLabel>Hello Notification</Notification.TextLabel>
          <Notification.CloseButton />
        </Notification>
      </Page.Content>
    </Page>
  </PageContainer>
));

PageTestStories.add('12. PopoverMenus', () => (
  <PageContainer>
    <Page {...defaultPageProps}>
      {header()}
      <Page.Content>
        <Page.Sticky>
          <div style={{ background: 'grey' }}>Sticky</div>
        </Page.Sticky>
        <Card>
          <Card.Content>
            <Box align="right">
              <PopoverMenu
                zIndex={5000}
                dataHook="popovermenu-in-content"
                triggerElement={
                  <IconButton
                    skin="inverted"
                    dataHook="popovermenu-in-content-button"
                  >
                    <More />
                  </IconButton>
                }
                placement="top"
                textSize="medium"
                appendTo="parent"
              >
                <PopoverMenu.MenuItem onClick={() => {}} text="Refresh" />
                <PopoverMenu.MenuItem onClick={() => {}} text="Trash" />
                <PopoverMenu.MenuItem onClick={() => {}} text="Edit" />
              </PopoverMenu>
            </Box>
            <LongTextContent />
          </Card.Content>
        </Card>
      </Page.Content>
    </Page>
  </PageContainer>
));

/*
 *  Vertical Test Stories
 */

class PageWithScroll extends React.Component {
  state = { fixedContainerHeight: null };
  static Constants = storySettings.PageWithScrollConstants;

  static propTypes = {
    extraScroll: PropTypes.number,
    contentHeight: PropTypes.number,
    stretchVertically: PropTypes.bool,
    withFixedContent: PropTypes.bool,
    withFixedScrollBar: PropTypes.bool,
  };

  static defaultProps = {
    extraScroll: 0,
  };
  componentDidMount = () => {};

  render() {
    let heightProps;
    const {
      stretchVertically,
      contentHeight,
      withFixedContent,
      withFixedScrollBar,
      withFooter,
    } = this.props;

    if (stretchVertically) {
      heightProps = {
        minHeight: 'inherit',
      };
    } else if (contentHeight) {
      heightProps = { height: contentHeight };
    } else {
      const extraScroll = this.props.extraScroll;

      const noScrollHeight =
        PageWithScroll.Constants.pageHeight -
        PageWithScroll.Constants.headerContainerHeight -
        PageWithScroll.Constants.pageBottomPadding;
      heightProps = { height: noScrollHeight + extraScroll };
    }

    return (
      <PageContainer
        style={{ height: `${PageWithScroll.Constants.pageHeight}px` }}
        withFixedScrollBar={withFixedScrollBar}
      >
        <Page {...defaultPageProps} ref={ref => (this.pageInstance = ref)}>
          {header()}
          {withFixedContent && fixedContent}
          <Page.Content>
            <div
              ref={ref => (this.contentRef = ref)}
              style={{
                backgroundColor: 'white',
                ...heightProps,
              }}
            />
          </Page.Content>
          {withFooter && (
            <Page.FixedFooter>
              <PageFooter divider>
                <PageFooter.Start>
                  <Button size="medium" skin="inverted">
                    Go Back
                  </Button>
                </PageFooter.Start>
                <PageFooter.End>
                  <Box marginRight="SP2">
                    <Button size="medium" priority="secondary">
                      Skip
                    </Button>
                  </Box>
                  <Button size="medium">Go Next</Button>
                </PageFooter.End>
              </PageFooter>
            </Page.FixedFooter>
          )}
        </Page>
      </PageContainer>
    );
  }
}

[false, true].forEach(withFixedContent => {
  const Stories = storiesOf(
    `${kind}/Scroll${withFixedContent ? '_FC' : ''}`,
    module,
  );

  const prefix = testNumber => `${testNumber}. `;
  // withFixedContent ? `2${testNumber}. FC - ` : `1${testNumber}. `;
  const defaultProps = withFixedContent ? { withFixedContent } : {};

  Stories.add(`${prefix(1)}Short Content`, () => (
    <PageWithScroll {...defaultProps} contentHeight={200} />
  ));

  Stories.add(`${prefix(2)}With Footer`, () => {
    return <PageWithScroll {...defaultProps} contentHeight={200} withFooter />;
  });

  Stories.add(`${prefix(2)}With Footer - scroll`, () => {
    const arbitraryLong = PageWithScroll.Constants.pageHeight;
    return (
      <PageWithScroll
        {...defaultProps}
        extraScroll={arbitraryLong}
        withFooter
      />
    );
  });

  Stories.add(`${prefix(3)}Max Height No Scroll`, () => (
    // Small scroll - lower than the threshold that triggers minimization
    <PageWithScroll {...defaultProps} extraScroll={0} />
  ));

  Stories.add(`${prefix(4)}Scroll - No Mini Header`, () => (
    // Small scroll - lower than the threshold that triggers minimization
    <PageWithScroll
      {...defaultProps}
      extraScroll={PageWithScroll.Constants.maxScrollNoTrigger}
    />
  ));

  Stories.add(`${prefix(5)}Scroll - Trigger Mini Header`, () => {
    return (
      // Small scroll - lower than the threshold that triggers minimization
      <PageWithScroll
        {...defaultProps}
        extraScroll={PageWithScroll.Constants.scrollTrigger}
      />
    );
  });

  Stories.add(`${prefix(6)}Long`, () => {
    const arbitraryLong = PageWithScroll.Constants.pageHeight;
    return (
      // Small scroll - lower than the threshold that triggers minimization
      <PageWithScroll {...defaultProps} extraScroll={arbitraryLong} />
    );
  });

  Stories.add(`${prefix(7)}Multiple Stickies`, () => {
    return (
      <PageContainer>
        <Page {...defaultPageProps}>
          {header()}
          <Page.Content>
            {[1, 2, 3, 4, 5, 6].map(i => {
              return (
                <div>
                  <Page.Sticky style={{ height: '50px', background: 'grey' }}>
                    Sticky {i}
                  </Page.Sticky>
                  <div style={{ height: '200px', background: 'white' }}>
                    Gap {i}
                  </div>
                </div>
              );
            })}
          </Page.Content>
        </Page>
      </PageContainer>
    );
  });
  Stories.add(`${prefix(8)}Multiple Stickies + Tail`, () => {
    return (
      <PageContainer>
        <Page {...defaultPageProps}>
          {header()}
          {tail}
          <Page.Content>
            {[1, 2, 3, 4, 5, 6].map(i => {
              return (
                <div>
                  <Page.Sticky style={{ height: '50px', background: 'grey' }}>
                    Sticky {i}
                  </Page.Sticky>
                  <div style={{ height: '200px', background: 'white' }}>
                    Gap {i}
                  </div>
                </div>
              );
            })}
          </Page.Content>
        </Page>
      </PageContainer>
    );
  });

  Stories.add(`${prefix(9)}Long With Fixed ScrollBar`, () => {
    const arbitraryLong = PageWithScroll.Constants.pageHeight;
    return (
      <PageWithScroll
        {...defaultProps}
        extraScroll={arbitraryLong}
        withFixedScrollBar
      />
    );
  });

  Stories.add(`${prefix(10)}Multiple Stickies Without a Header`, () => {
    return (
      <PageContainer>
        <Page {...defaultPageProps}>
          <Page.Content>
            {[1, 2, 3, 4, 5, 6].map(i => {
              return (
                <div>
                  <Page.Sticky style={{ height: '50px', background: 'grey' }}>
                    Sticky {i}
                  </Page.Sticky>
                  <div style={{ height: '200px', background: 'white' }}>
                    Gap {i}
                  </div>
                </div>
              );
            })}
          </Page.Content>
        </Page>
      </PageContainer>
    );
  });
});
