import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import ColorPickerConverterHex from './ColorPickerConverterHex';
import ColorPickerConverterRGB from './ColorPickerConverterRGB';
import ColorPickerConverterHsb from './ColorPickerConverterHsb';
import { WixStyleReactContext } from '../WixStyleReactProvider/context';

const HEX = 'HEX';
const RGB = 'RGB';
const HSB = 'HSB';

const tabs = [
  { id: HEX, title: HEX },
  { id: RGB, title: RGB },
  { id: HSB, title: HSB },
];

export default class ColorPickerConverter extends React.PureComponent {
  static propTypes = {
    current: PropTypes.object.isRequired,
    showConverter: PropTypes.bool.isRequired,
    showInput: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
    allowEmpty: PropTypes.bool,
    hexPlaceholder: PropTypes.string,
  };

  state = {
    activeTab: HEX,
  };

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
  }

  render() {
    const {
      dataHook,
      current,
      showConverter,
      showInput,
      addTooltipContent,
      allowEmpty,
      hexPlaceholder,
    } = this.props;
    const dataHooks = {
      hex: 'color-picker-hex-input',
      rgb: 'color-picker-rgb-inputs',
      hsb: 'color-picker-hsb-inputs',
    };

    if (!showConverter && !showInput) {
      return null;
    }

    if (!showConverter) {
      return (
        <ColorPickerConverterHex
          placeholder={hexPlaceholder}
          dataHook={dataHooks.hex}
          current={current}
          onChange={this.props.onChange}
          onEnter={this.props.onEnter}
          onAdd={this.props.onAdd}
          addTooltipContent={addTooltipContent}
          allowEmpty={allowEmpty}
        />
      );
    }

    const { activeTab } = this.state;

    return (
      <div data-hook={dataHook}>
        <WixStyleReactContext.Consumer>
          {({ reducedSpacingAndImprovedLayout }) => (
            <Tabs
              minWidth={0}
              items={tabs}
              activeId={activeTab}
              type="uniformFull"
              onClick={this.changeTab}
              size={reducedSpacingAndImprovedLayout ? 'small' : undefined}
            />
          )}
        </WixStyleReactContext.Consumer>
        {activeTab === HEX && (
          <ColorPickerConverterHex
            placeholder={hexPlaceholder}
            dataHook={dataHooks.hex}
            current={current}
            onChange={this.props.onChange}
            onAdd={this.props.onAdd}
            onEnter={this.props.onEnter}
            addTooltipContent={addTooltipContent}
            allowEmpty={allowEmpty}
          />
        )}
        {activeTab === RGB && (
          <ColorPickerConverterRGB
            dataHook={dataHooks.rgb}
            current={current}
            onChange={this.props.onChange}
            onAdd={this.props.onAdd}
            addTooltipContent={addTooltipContent}
            allowEmpty={allowEmpty}
          />
        )}
        {activeTab === HSB && (
          <ColorPickerConverterHsb
            dataHook={dataHooks.hsb}
            current={current}
            onChange={this.props.onChange}
            onAdd={this.props.onAdd}
            addTooltipContent={addTooltipContent}
            allowEmpty={allowEmpty}
          />
        )}
      </div>
    );
  }

  changeTab({ id }) {
    this.setState({ activeTab: id });
  }
}
