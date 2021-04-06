import React from 'react';
import PropTypes from 'prop-types';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';
import Checkbox from '../../Checkbox';
import ToggleSwitch from '../../ToggleSwitch';
import Radio from '../../Radio';
import Heading from '../../Heading';
import Text from '../../Text';
import Collapse from '../../Collapse';
import Divider from '../../Divider';
import { dataHooks, TYPES } from '../constants';
import { isString } from '../../utils/StringUtils';
import { st, classes } from './Item.st.css';

export default class SelectableAccordionItem extends React.PureComponent {
  static propTypes = {
    /** A title of the item */
    title: PropTypes.node,

    /** An optional second row of the header */
    subtitle: PropTypes.node,

    /** A content of the item */
    content: PropTypes.node,

    /** A type can be ether radio, checkbox, or toggle, which will effect the way an accordion item is selected */
    type: PropTypes.oneOf(['radio', 'checkbox', 'toggle']),

    /** A flag that indicates a open state */
    open: PropTypes.bool,

    /** An index of the item in the items list */
    idx: PropTypes.number,

    /** A callback which is invoked every time the selection of the item is changed */
    onChange: PropTypes.func,

    /** Extra space on top and bottom of selectable accordion item */
    verticalPadding: PropTypes.oneOf(['medium', 'small', 'tiny']),

    /** Is item disabled */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: 'toggle',
    onChange: () => {},
  };

  static displayName = 'SelectableAccordionItem';

  state = { hovered: false };

  _onChange = () => {
    const { idx, type, open, onChange, disabled } = this.props;

    if (disabled) {
      return;
    }

    if (type === 'radio' && open) {
      return;
    }

    onChange(idx, !open);
  };

  _onMouseEnter = () => this.setState({ hovered: true });

  _onMouseLeave = () => this.setState({ hovered: false });

  _renderSelector() {
    const { type, open, disabled } = this.props;
    let selector = null;

    switch (type) {
      case TYPES.CHECKBOX:
        selector = (
          <Checkbox
            checked={open}
            onChange={this._onChange}
            disabled={disabled}
          />
        );
        break;
      case TYPES.RADIO:
        selector = (
          <Radio checked={open} onChange={this._onChange} disabled={disabled} />
        );
        break;
      case TYPES.TOGGLE:
        selector = (
          <ToggleSwitch
            checked={open}
            onChange={this._onChange}
            size="small"
            disabled={disabled}
          />
        );
        break;
    }

    return selector;
  }

  _renderTitle({ reducedSpacingAndImprovedLayout }) {
    const { title } = this.props;

    if (isString(title)) {
      if (reducedSpacingAndImprovedLayout) {
        return (
          <Text weight="normal" size="medium">
            {title}
          </Text>
        );
      } else {
        return (
          <Heading ellipsis appearance="H4">
            {title}
          </Heading>
        );
      }
    } else {
      return title;
    }
  }

  _renderContent() {
    const { content } = this.props;

    return isString(content) ? (
      <Text className={classes.text} size="small" weight="thin">
        {content}
      </Text>
    ) : (
      content
    );
  }

  _renderSubtitle() {
    const { subtitle } = this.props;

    return isString(subtitle) ? (
      <Text ellipsis size="small" weight="thin">
        {subtitle}
      </Text>
    ) : (
      subtitle
    );
  }

  render() {
    const { hovered } = this.state;
    const { open, verticalPadding, disabled } = this.props;

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            data-hook={dataHooks.item}
            data-state={open ? 'open' : 'collapsed'}
            data-disabled={disabled}
            className={st(classes.item, {
              hovered: !open && hovered,
              verticalPadding,
              reducedSpacingAndImprovedLayout,
              disabled,
            })}
          >
            <div
              onMouseEnter={this._onMouseEnter}
              onMouseLeave={this._onMouseLeave}
              onClick={this._onChange}
              className={classes.selector}
            >
              {this._renderSelector()}
            </div>
            <div
              data-hook={dataHooks.itemHeader}
              onMouseEnter={this._onMouseEnter}
              onMouseLeave={this._onMouseLeave}
              onClick={this._onChange}
              className={classes.header}
            >
              {this._renderTitle({ reducedSpacingAndImprovedLayout })}
              {this._renderSubtitle()}
            </div>
            <div className={classes.content}>
              <Collapse open={open}>
                <div className={classes.inner}>{this._renderContent()}</div>
              </Collapse>
              <Divider className={classes.divider} />
            </div>
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}
