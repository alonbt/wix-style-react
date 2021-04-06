import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class AutoComplete extends InputWithOptions {
  static displayName = 'AutoComplete';

  static propTypes = {
    ...InputWithOptions.propTypes,

    /** Callback predicate for the filtering options function */
    predicate: PropTypes.func,

    /** The message to be displayed instead of options, when no options exist, or no options pass the predicate filter function */
    emptyStateMessage: PropTypes.node,
  };

  static defaultProps = {
    ...InputWithOptions.defaultProps,
    predicate: () => true,
  };

  dropdownAdditionalProps() {
    const { options, predicate, emptyStateMessage } = this.props;
    const filterFunc = this.state.isEditing ? predicate : () => true;
    const filtered = options.filter(filterFunc);

    if (emptyStateMessage && filtered.length === 0) {
      return {
        options: [
          {
            id: 'empty-state-message',
            value: emptyStateMessage,
            disabled: true,
          },
        ],
      };
    } else {
      return { options: filtered };
    }
  }
}

export default AutoComplete;
