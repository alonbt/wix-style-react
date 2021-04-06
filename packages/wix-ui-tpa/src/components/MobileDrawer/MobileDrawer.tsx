import * as React from 'react';
import { st, classes } from './MobileDrawer.st.css';
import { Modal } from '../internal/Modal';
import { TPAComponentProps } from 'src/types';

export interface MobileDrawerProps extends TPAComponentProps {
  /** Whether the modal is opened */
  isOpen?: boolean;
  /** Callback for when clicking outside. */
  onRequestClose?(): void;
  /** Children to render inside dialog */
  children?: React.ReactNode;
  /** Defines a string value that labels the drawer element. Optional. */
  'aria-label'?: string;
  /** Identifies the element that labels the drawer element. Optional. */
  'aria-labelledby'?: string;
  /** Gives the drawer an accessible description by referring to the drawer content that describes the primary message or purpose of the drawer. Optional. */
  'aria-describedby'?: string;
}

interface DefaultProps {
  isOpen: boolean;
  onRequestClose(): void;
}

interface State {
  visible;
}

/** MobileDrawers provide access to destinations and functionality menus, such as Action Menus, Filter Dropdown etc. This component should be used on mobile only. */
export class MobileDrawer extends React.Component<MobileDrawerProps, State> {
  state = {
    visible: false,
  };

  static displayName = 'MobileDrawer';
  static defaultProps: DefaultProps = {
    isOpen: false,
    onRequestClose: () => {},
  };

  _onRequestClose() {
    this.setState({ visible: false });
    this.props.onRequestClose();
  }

  componentDidMount() {
    if (this.props.isOpen && !this.state.visible) {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 0);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !this.state.visible) {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 0);
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.setState({ visible: false });
    }
  }

  render() {
    const {
      isOpen,
      children,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ['aria-describedby']: ariaDescribedBy,
      className,
    } = this.props;
    const { visible } = this.state;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        <Modal isOpen={isOpen} onRequestClose={() => this._onRequestClose()}>
          <div
            className={st(classes.contentWrapper, { visible })}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          >
            {children}
          </div>
        </Modal>
      </div>
    );
  }
}
