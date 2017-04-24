import React from 'react';
import Button from '../Button';
import * as styles from './FooterLayout.scss';

const FooterLayout = ({children, theme, cancelText, onCancel, onOk, confirmText, buttonsHeight}) => {

  return (
    <div className={styles.footer} data-hook="message-box-footer">
      {children}
      <div className={styles.footerbuttons}>
        {cancelText ?
          <Button height={buttonsHeight} theme={'empty' + theme} onClick={onCancel} dataHook="cancellation-button" >
            {cancelText}
          </Button> : null
        }
        <Button height={buttonsHeight} theme={'full' + theme} onClick={onOk} dataHook="confirmation-button">
          {confirmText}
        </Button>
      </div>
    </div>
  );
};

FooterLayout.propTypes = {
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  onCancel: React.PropTypes.func,
  onOk: React.PropTypes.func,
  theme: React.PropTypes.string,
  buttonsHeight: React.PropTypes.string,
  children: React.PropTypes.any
};

FooterLayout.defaultProps = {
  theme: 'blue',
  buttonsHeight: 'small'
};

export default FooterLayout;
