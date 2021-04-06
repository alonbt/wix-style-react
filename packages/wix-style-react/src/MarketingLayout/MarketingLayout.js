import React from 'react';
import PropTypes from 'prop-types';
import { WixStyleReactContext } from '../WixStyleReactProvider/context';
import Content from './components/Content';
import { Layout, Cell } from '../Layout';
import Proportion from '../Proportion';
import { SIZES, DIRECTIONS } from './constants';
import { st, classes } from './MarketingLayout.st.css';
import { stVars as colorsStVars } from '../Foundation/stylable/colors.st.css';
import deprecationLog from '../utils/deprecationLog';

const cellSpansBySize = {
  [SIZES.tiny]: {
    image: 4,
    content: 8,
  },
  [SIZES.small]: {
    image: 3,
    spacer: 1,
    content: 8,
  },
  [SIZES.medium]: {
    image: 4,
    spacer: 1,
    content: 7,
  },
  [SIZES.large]: {
    image: 5,
    spacer: 1,
    content: 6,
  },
};

const imagePlaceholderAspectRatioBySize = {
  [SIZES.tiny]: 1,
  [SIZES.small]: 1,
  [SIZES.medium]: 282 / 188,
  [SIZES.large]: 360 / 240,
};

/** Marketing layout is a layout designed to promote new features or display first time visit.
 * Component has title, description, action and illustration areas. */
class MarketingLayout extends React.PureComponent {
  static displayName = 'MarketingLayout';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,
    /** Image URL or custom element. */
    image: PropTypes.node,
    /** Image area background color. Can be a keyword from color palette or any supported CSS color value (Hex, RGB, etc.) */
    imageBackgroundColor: PropTypes.string,
    /** Size of the marketing layout. Large size will be deprecated in the next major version. */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    /** Direction of the parts of the marketing layout (top to bottom or left to right). */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Alignment of the content of the marketing layout. */
    alignItems: PropTypes.oneOf(['center', 'stretch']),
    /** Invert marketing layout (with image displayed on the left). */
    inverted: PropTypes.bool,
    /** Marketing layout actions. */
    actions: PropTypes.node,
    /** Title as a string or custom element. */
    title: PropTypes.node,
    /** Description as a string or custom element. */
    description: PropTypes.node,
    /** Add a badge to the layout. */
    badge: PropTypes.node,
    /** Show spacing of a badge in the layout. If a badge was given it will be hidden,
     * if no badge was given there will be spacing as if there is a hidden badge. */
    hiddenBadge: PropTypes.bool,
  };

  static defaultProps = {
    size: 'small',
    alignItems: 'center',
    inverted: false,
    direction: 'horizontal',
    hiddenBadge: false,
  };

  _renderSpacerCell = span => <Cell key="spacer" span={span} />;

  _renderImagePlaceholder = () => {
    const { size } = this.props;
    return (
      <Proportion aspectRatio={imagePlaceholderAspectRatioBySize[size]}>
        <div className={classes.imagePlaceholder} />
      </Proportion>
    );
  };

  _renderImageCell = span => {
    const { image, imageBackgroundColor } = this.props;

    return (
      <Cell key="image" span={span}>
        <div className={classes.imageWrapper}>
          {imageBackgroundColor && (
            <div
              className={classes.imageBackground}
              style={{
                backgroundColor:
                  colorsStVars[imageBackgroundColor] || imageBackgroundColor,
              }}
            />
          )}
          <div className={classes.imageContainer}>
            {typeof image === 'string' ? (
              <img src={image} width="100%" />
            ) : (
              image || this._renderImagePlaceholder()
            )}
          </div>
        </div>
      </Cell>
    );
  };

  _renderContentCell = span => {
    const {
      size,
      actions,
      title,
      description,
      badge,
      hiddenBadge,
    } = this.props;
    return (
      <Cell key="content" span={span}>
        {badge && !hiddenBadge && <div className={classes.badge}>{badge}</div>}
        <Content
          size={size}
          actions={actions}
          title={title}
          description={description}
          badge={badge}
        />
      </Cell>
    );
  };

  _renderContent = () => {
    const { direction, size } = this.props;
    const { content } = cellSpansBySize[size];
    const isVertical = direction === DIRECTIONS.vertical;

    const contentCell = this._renderContentCell(content);

    return (
      <Layout gap={size === SIZES.tiny ? '24px' : '30px'}>
        {isVertical
          ? this._renderVerticalCells({ contentCell })
          : this._renderHorizontalCells({ contentCell })}
      </Layout>
    );
  };

  _renderHorizontalCells({ contentCell }) {
    const { inverted, size } = this.props;
    const { image, spacer } = cellSpansBySize[size];

    const spacerCell = size !== SIZES.tiny && this._renderSpacerCell(spacer);
    const imageCell = this._renderImageCell(image);

    return inverted
      ? [imageCell, contentCell, spacerCell]
      : [contentCell, spacerCell, imageCell];
  }

  _renderVerticalCells({ contentCell }) {
    const { inverted, image } = this.props;
    const imageCell = image && this._renderImageCell(12);
    return inverted ? [contentCell, imageCell] : [imageCell, contentCell];
  }

  render() {
    const {
      size,
      badge,
      hiddenBadge,
      alignItems,
      inverted,
      actions,
      dataHook,
      imageBackgroundColor,
    } = this.props;

    if (size === SIZES.large) {
      deprecationLog(
        `<MarketingLayout/> size large wil be deprecated in the next major version`,
      );
    }

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            className={st(classes.root, {
              size,
              badge: !!badge,
              hiddenBadge,
              alignItems,
              inverted,
              withActions: !!actions,
              withImageBackground: !!imageBackgroundColor,
              reducedSpacingAndImprovedLayout,
            })}
            data-hook={dataHook}
          >
            {this._renderContent()}
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}

export default MarketingLayout;
