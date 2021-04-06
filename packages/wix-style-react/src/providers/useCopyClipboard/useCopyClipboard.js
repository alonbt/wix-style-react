import { useState, useCallback, useRef, useEffect } from 'react';
import { createToggleSelection } from './createToggleSelection';

/**
 * @typedef {Object} Clipboard
 * @prop {boolean} isCopied - a return boolean with status of clipboard action
 * @prop {function} copyToClipboard - a return function that allows to initiate copying
 * @prop {function} resetState - an optional return function
 */

/**
 * A custom hook for copying to clipboard. Returns copying to clipboard status and function to initiate copying to clipboard
 * @param {Object} props -  an object for value, onCopy, and resetTimeout props
 * @param {string} props.value -  a string that should be copied to clipboard
 * @param {function} [props.onCopy] - an optional parameter to apply additional logic when copying to clipboard
 * @param {number} [props.resetTimeout] - an optional parameter to set interval which after copying to clipboard will reset status
 * @return {Clipboard}
 */

function useCopyClipboard({ value, onCopy, resetTimeout }) {
  const [isCopied, setCopied] = useState(null);

  const copyToClipboard = useCallback(() => {
    const range = document.createRange();
    const copyElement = createCopyElement(value);
    const selection = window.getSelection();

    const _onCopy = event => {
      event.stopPropagation();
      if (onCopy) {
        onCopy();
      }
    };

    const registerCopyEvent = () => {
      copyElement.addEventListener('copy', _onCopy);
      document.body.appendChild(copyElement);
    };

    const copy = () => {
      const { unselectCurrent, selectPrevious } = createToggleSelection();
      unselectCurrent();
      range.selectNodeContents(copyElement);
      selection.addRange(range);
      setCopied(document.execCommand('copy'));
      selectPrevious();
    };

    const cleanup = () => {
      if (selection) {
        if (typeof selection.removeRange === 'function') {
          selection.removeRange(range);
        } else {
          selection.removeAllRanges();
        }
        if (copyElement) {
          copyElement.removeEventListener('copy', _onCopy);
          document.body.removeChild(copyElement);
        }
      }
    };
    registerCopyEvent();
    copy();
    cleanup();
  }, [value, onCopy]);

  const reset = useCallback(() => {
    setCopied(null);
  }, [setCopied]);

  useEffect(() => {
    let timeout;
    if (isCopied && resetTimeout) {
      timeout = setTimeout(reset, resetTimeout);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, reset, resetTimeout]);

  useEffect(reset, [value, reset]);

  return { isCopied, copyToClipboard, reset };
}

const createCopyElement = value => {
  const copyElement = document.createElement('span');
  copyElement.textContent = value;
  copyElement.style = {
    // reset browser defaults
    all: 'unset',
    // make content copyable
    whiteSpace: 'pre',
    MozUserSelect: 'text',
    msUserSelect: 'text',
    userSelect: 'text',
    // hide element above screen
    position: 'fixed',
    top: '-100%',
    opacity: 0,
  };

  return copyElement;
};

export default useCopyClipboard;
