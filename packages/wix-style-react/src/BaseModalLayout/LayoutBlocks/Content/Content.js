import { st, classes } from './Content.st.css';
import React, { useState, useCallback } from 'react';
import Divider from '../../../Divider';
import PropTypes from 'prop-types';
import ScrollableContainer, {
  AreaY,
} from '../../../common/ScrollableContainer';
import { ScrollableContainerCommonProps } from '../../../common/PropTypes/ScrollableContainerCommon';
import { dataHooks } from '../../constants';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Content = ({
  dataHook,
  className,
  children,
  hideTopScrollDivider,
  hideBottomScrollDivider,
  scrollProps = {},
}) => {
  const { contentClassName, content = children } = useBaseModalLayoutContext();
  const [scrollAreaY, setScrollAreaY] = useState(AreaY.NONE);
  const { onScrollAreaChanged } = scrollProps;
  const hideContentDividers = hideTopScrollDivider && hideBottomScrollDivider;

  const handleScrollAreaChanged = useCallback(
    ({ area, target }) => {
      if (scrollAreaY !== area.y) {
        if (!hideContentDividers) {
          setScrollAreaY(area.y);
        }
        if (onScrollAreaChanged) {
          onScrollAreaChanged({ area, target });
        }
      }
    },
    [hideContentDividers, onScrollAreaChanged, scrollAreaY],
  );

  const isTopDividerHidden = useCallback(
    () =>
      hideTopScrollDivider ||
      scrollAreaY === AreaY.TOP ||
      scrollAreaY === AreaY.NONE,
    [hideTopScrollDivider, scrollAreaY],
  );

  const isBottomDividerHidden = useCallback(
    () =>
      hideBottomScrollDivider ||
      scrollAreaY === AreaY.BOTTOM ||
      scrollAreaY === AreaY.NONE,
    [hideBottomScrollDivider, scrollAreaY],
  );

  const registerToScrollAreaChanges =
    !hideContentDividers || !!onScrollAreaChanged;

  return (
    (content && (
      <div
        data-hook={dataHook}
        data-hidedividers={hideContentDividers}
        className={st(
          classes.root,
          {
            hideTopDivider: isTopDividerHidden(),
            hideBottomDivider: isBottomDividerHidden(),
          },
          contentClassName,
          className,
        )}
      >
        {!hideTopScrollDivider && <Divider className={classes.topDivider} />}
        <ScrollableContainer
          dataHook={dataHooks.contentWrapper}
          className={classes.innerContent}
          onScrollAreaChanged={
            (registerToScrollAreaChanges && handleScrollAreaChanged) || null
          }
        >
          {content}
        </ScrollableContainer>
        {!hideBottomScrollDivider && (
          <Divider className={classes.bottomDivider} />
        )}
      </div>
    )) ||
    null
  );
};

Content.displayName = 'BaseModalLayout.Content';

Content.propTypes = {
  /** additional css classes */
  className: PropTypes.string,

  /** data hook for testing */
  dataHook: PropTypes.string,

  /** the content you want to render in the modal, children passed directly will be treated as `content` as well */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** whether to show divider above content (default: false)
   * when set to true - top divider is never shown
   * when set to false - shows top divider when scroll position is greater than 0
   */
  hideTopScrollDivider: PropTypes.bool,

  /** whether to show divider below content (default: false)
   * when set to true - bottom divider is never shown
   * when set to false - shows bottom divider until content is scrolled to the boottom
   */
  hideBottomScrollDivider: PropTypes.bool,

  /** Props related to the scrollable content.
   *
   * **onScrollAreaChanged** - A Handler for scroll area changes, will be triggered only when the user scrolls to a
   * different area of the scrollable content, see signature for possible areas
   * ##### Signature:
   * `function({area: {y: AreaY, x: AreaX}, target: HTMLElement}) => void`
   *
   * `AreaY`: top | middle | bottom | none
   *
   * `AreaX`: start | middle | end | none (not implemented yet)
   *
   * **onScrollAreaChanged** - A Generic Handler for scroll changes with throttling (100ms)
   * ##### Signature:
   * `function({target: HTMLElement}) => void`
   * */
  scrollProps: PropTypes.shape(ScrollableContainerCommonProps),
};

Content.defaultProps = {
  hideTopScrollDivider: false,
  hideBottomScrollDivider: false,
};
