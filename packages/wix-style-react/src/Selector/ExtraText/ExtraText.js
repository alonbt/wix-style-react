import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';

class ExtraText extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { dataHook, text } = this.props;
    return (
      <Text secondary dataHook={dataHook}>
        {text}
      </Text>
    );
  }
}

export default ExtraText;
