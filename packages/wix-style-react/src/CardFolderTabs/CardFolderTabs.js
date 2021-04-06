import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { dataHooks } from './constants';
import Tab from './Tab';
import { st, classes, vars } from './CardFolderTabs.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable';

const tabButton = ({
  className,
  id,
  name,
  disabled,
  selected,
  maxTabWidth,
  onTabChange,
  focusableOnFocus,
  focusableOnBlur,
}) => (
  <button
    data-hook={dataHooks.tabButton(id)}
    className={st(classes.button, { selected, disabled }, className)}
    style={{ [vars['maxWidth']]: maxTabWidth }}
    onClick={() => onTabChange(id)}
    disabled={disabled}
    key={id}
    onFocus={focusableOnFocus}
    onBlur={focusableOnBlur}
  >
    <Text ellipsis className={classes.buttonText}>
      {name}
    </Text>
  </button>
);

const TabButton = withFocusable(tabButton);

class CardFolderTabs extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      children,
      activeId,
      maxTabWidth,
      onTabChange,
    } = this.props;
    const cardFolderTabs = Array.isArray(children) ? children : [children];

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        <div data-hook={dataHooks.header} className={classes.headerWrapper}>
          {cardFolderTabs.map(({ props }) => (
            <TabButton
              key={props.id}
              {...props}
              selected={activeId === props.id}
              maxTabWidth={maxTabWidth}
              onTabChange={
                typeof onTabChange === 'function' ? onTabChange : undefined
              }
            />
          ))}
        </div>
        <div
          data-hook={dataHooks.content}
          className={classes.tabContentWrapper}
        >
          {cardFolderTabs.filter(tab => activeId === tab.props.id)}
        </div>
      </div>
    );
  }
}

CardFolderTabs.displayName = 'CardFolderTabs';

CardFolderTabs.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Id of currently visible tab  */
  activeId: PropTypes.string.isRequired,

  /** Callback which is called on tab change. Id of newly selected tab is passed as a parameter  */
  onTabChange: PropTypes.func,

  /** Max width of tab buttons */
  maxTabWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CardFolderTabs.defaultProps = {
  maxTabWidth: '138px',
};

CardFolderTabs.Tab = Tab;

export default CardFolderTabs;
