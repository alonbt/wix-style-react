import React from 'react';
import PropTypes from 'prop-types';

import useCopyClipboard from '../providers/useCopyClipboard';

const CopyClipboard = props => {
  const { dataHook, className, children, value, onCopy, resetTimeout } = props;
  const { isCopied, copyToClipboard, reset } = useCopyClipboard({
    value,
    onCopy,
    resetTimeout,
  });

  return (
    <div className={className} data-hook={dataHook}>
      {children({
        isCopied,
        copyToClipboard,
        reset,
      })}
    </div>
  );
};

CopyClipboard.displayName = 'CopyClipboard';

CopyClipboard.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Children render prop provides handlers to invoke copying to the clipboard
   * ##### Signature
   * `function({ isCopied, copyToClipboard, reset }: ReactElement`
   * * `isCopied` - A boolean which contains state of copying to clipboard. Default - `null`, `true`/`false` depending if copying was successful
   * * `copyToClipboard` - A function which can be used to invoke copying to clipboard, must be trigerred by the user
   * * `reset` - A function to reset `isCopied` status to `null`. In case component is provided with `resetTimeout` prop, reset is invoked after a specific timeout
   * * returns `React Element`
   */
  children: PropTypes.func,

  /** onCopy callback */
  onCopy: PropTypes.func,

  /** Text to be added to clipboard */
  value: PropTypes.string,

  /** Interval after which state of whether value was copied is reset */
  resetTimeout: PropTypes.number,
};

CopyClipboard.defaultProps = {
  value: '',
  children: () => {},
};

export default CopyClipboard;
