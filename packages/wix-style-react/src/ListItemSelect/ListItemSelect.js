import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { st, classes } from './ListItemSelect.st.css';
import { FontUpgradeContext } from '../FontUpgrade/context';
import Checkbox from '../Checkbox';
import Box from '../Box';
import HighlightContext from '../InputWithOptions/HighlightContext';
import { dataHooks } from './constants';
import Highlighter from '../Highlighter/Highlighter';

export const SIZES = {
  small: 'small',
  medium: 'medium',
};

/** ListItemSelect description */
class ListItemSelect extends React.PureComponent {
  static displayName = 'ListItemSelect';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** If true, a checkbox will be shown */
    checkbox: PropTypes.bool,

    /** Any prefix */
    prefix: PropTypes.node,

    /** Title of the list item */
    title: PropTypes.node,

    /** Text of the list item subtitle */
    subtitle: PropTypes.node,

    /** Any suffix */
    suffix: PropTypes.node,

    /** If true, the item is selected */
    selected: PropTypes.bool,

    /** If true, the item is highlighted */
    highlighted: PropTypes.bool,

    /** If true, the item is disabled */
    disabled: PropTypes.bool,

    /** Callback function triggered when list item is clicked */
    onClick: PropTypes.func,

    /** Changing text size */
    size: PropTypes.oneOf(Object.keys(SIZES)),

    /** If true, long text won't break into more than one line and will be terminated with an ellipsis */
    ellipsis: PropTypes.bool,
  };

  static defaultProps = {
    checkbox: false,
    selected: false,
    highlighted: false,
    ellipsis: false,
    size: SIZES.medium,
    dataHook: 'list-item-select',
  };

  render() {
    const {
      dataHook,
      className,
      checkbox,
      selected,
      highlighted,
      disabled,
      onClick,
      size,
    } = this.props;

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div
            className={st(
              classes.root,
              { checkbox, selected, highlighted, disabled },
              className,
            )}
            data-hook={dataHook}
            data-selected={selected}
            onClick={disabled ? undefined : onClick}
          >
            {checkbox ? (
              <Checkbox
                dataHook={dataHooks.CHECKBOX}
                className={classes.fullWidthContent}
                size={size}
                checked={selected}
                disabled={disabled}
              >
                {this._renderContent({ isMadefor })}
              </Checkbox>
            ) : (
              this._renderContent({ isMadefor })
            )}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }

  _renderTitle(textProps) {
    const { title } = this.props;
    const titleElement = (
      <Text className={classes.title} dataHook={dataHooks.TITLE} {...textProps}>
        {title}
      </Text>
    );
    return (
      <HighlightContext.Consumer>
        {({ highlight, match }) =>
          highlight ? (
            <Highlighter match={match}>{titleElement}</Highlighter>
          ) : (
            titleElement
          )
        }
      </HighlightContext.Consumer>
    );
  }

  _renderContent({ isMadefor }) {
    const {
      checkbox,
      prefix,
      subtitle,
      suffix,
      selected,
      disabled,
      size,
      ellipsis,
    } = this.props;

    const textProps = {
      tagName: 'div',
      size,
      ellipsis,
      showDelay: 300,
      skin: disabled ? 'disabled' : 'standard',
      weight: isMadefor || checkbox ? 'thin' : 'normal',
      light: selected && !checkbox,
    };

    const secondaryTextProps = {
      ...textProps,
      light: !disabled,
      secondary: !selected || checkbox,
    };

    return (
      <Box width="100%" className={classes.textsWrapper}>
        {prefix && (
          <Text
            className={st(classes.prefix, {
              subtitle: Boolean(subtitle),
            })}
            dataHook={dataHooks.PREFIX}
            {...textProps}
            ellipsis={false}
          >
            {prefix}
          </Text>
        )}

        <div
          className={st(classes.titleWrapper, { subtitle: Boolean(subtitle) })}
        >
          {this._renderTitle(textProps)}
          {subtitle && (
            <Text
              className={classes.subtitle}
              dataHook={dataHooks.SUBTITLE}
              secondary
              {...secondaryTextProps}
              size={SIZES.small}
            >
              {subtitle}
            </Text>
          )}
        </div>
        {suffix && (
          <Text
            dataHook={dataHooks.SUFFIX}
            className={classes.suffix}
            {...secondaryTextProps}
          >
            {suffix}
          </Text>
        )}
      </Box>
    );
  }
}

export default ListItemSelect;

export const listItemSelectBuilder = ({
  id,
  className,
  checkbox,
  prefix,
  title,
  label,
  subtitle,
  suffix,
  disabled,
  size,
  ellipsis,
  dataHook,
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
  label,
  value: ({ selected, hovered, ...rest }) => (
    <ListItemSelect
      dataHook={dataHook}
      className={className}
      checkbox={checkbox}
      prefix={prefix}
      title={title}
      subtitle={subtitle}
      suffix={suffix}
      size={size}
      ellipsis={ellipsis}
      selected={selected}
      highlighted={hovered}
      {...rest}
    />
  ),
});
