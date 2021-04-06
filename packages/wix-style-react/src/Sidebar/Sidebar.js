import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Sidebar.st.css';
import { SidebarItem } from './SidebarItem';
import { SidebarPersistentHeader } from './SidebarPersistentHeader';
import { SidebarPersistentFooter } from './SidebarPersistentFooter';
import { SidebarBackButton } from './SidebarBackButton';
import { SidebarContext } from './SidebarAPI';
import { dataHooks, sidebarSkins } from './constants';
import { SidebarContentWrapper } from './SidebarContentWrapper';

/** A sidebar navigation component  */
class Sidebar extends Component {
  static displayName = 'Sidebar';

  static Item = SidebarItem;
  static PersistentHeader = SidebarPersistentHeader;
  static PersistentFooter = SidebarPersistentFooter;
  static BackButton = SidebarBackButton;

  static propTypes = {
    /** classNames overrides  */
    classNames: PropTypes.shape({
      sideBar: PropTypes.string,
      content: PropTypes.string,
      slider: PropTypes.string,
      sliderOutToLeft: PropTypes.string,
      sliderOutToRight: PropTypes.string,
      sliderInFromLeft: PropTypes.string,
      sliderInFromRight: PropTypes.string,
    }),

    /** The dataHook of the Sidebar */
    dataHook: PropTypes.string,

    /**  Sidebar menu children */
    children: PropTypes.node,

    /**  Sidebar indicator for animating out or in */
    isHidden: PropTypes.bool,

    /** Sets the skin of the Sidebar */
    skin: PropTypes.oneOf(['dark', 'light']),
  };

  static defaultProps = {
    skin: sidebarSkins.dark,
    isHidden: false,
  };

  constructor(props) {
    super(props);

    this.itemKey2Children = {};
    this.itemKey2ParentKey = {};
    this.state = {
      persistentTopChildren: [],
      drivenOutChildren: [],
      onScreenChildren: [],
      drivenInChildren: [],
      persistentBottomChildren: [],
      selectedKey: '',
      lastSelectedKey: '',
    };
  }

  _navigateTo = itemKey => {
    if (this.itemKey2ParentKey[itemKey]) {
      if (this.itemKey2ParentKey[itemKey] !== this.state.lastSelectedKey) {
        this.setState({
          drivenInChildren: this.itemKey2Children[
            this.itemKey2ParentKey[itemKey]
          ].children,
          selectedKey: itemKey,
          lastSelectedKey: this.itemKey2ParentKey[itemKey],
        });
      } else {
        this.setState({ selectedKey: itemKey });
      }
      this.sidebarContext = this._getSidebarContext();
      return;
    }

    if (this.itemKey2Children[itemKey]) {
      const { children, selectedKey } = this.itemKey2Children[itemKey];
      this.setState({
        drivenInChildren: children,
        selectedKey,
        lastSelectedKey: itemKey,
      });
    } else {
      this.setState({ selectedKey: itemKey });
    }

    this.sidebarContext = this._getSidebarContext();
  };

  _getSidebarContext = () => {
    return {
      itemClicked: this._navigateTo,
      backClicked: () => {
        this.setState({
          drivenInChildren: [],
          drivenOutChildren: this.state.drivenInChildren,
          selectedKey: this.state.lastSelectedKey,
          lastSelectedKey: '',
        });
        this.sidebarContext = this._getSidebarContext();
      },
      getSelectedKey: () => this.state.selectedKey,
      getSkin: () => this.props.skin,
    };
  };

  sidebarContext = this._getSidebarContext();

  UNSAFE_componentWillMount() {
    this._setInnerMenus(this.props);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this._setInnerMenus(props);
  }

  _setInnerMenus(props) {
    const persistentTopChildren = [];
    const persistentBottomChildren = [];
    const onScreenChildren = [];

    const findEnabledChild = item =>
      item.props.innerMenu &&
      item.props.innerMenu.find(
        c => c.type === SidebarItem && !c.props.disable,
      );
    const handleChild = child => {
      if (child.type === SidebarItem) {
        const enabledChild = findEnabledChild(child);
        this.itemKey2Children[child.props.itemKey] = {
          selectedKey: enabledChild
            ? enabledChild.props.itemKey
            : child.props.itemKey,
          children: child.props.innerMenu ? child.props.innerMenu : [],
        };
        if (child.props.innerMenu) {
          child.props.innerMenu.forEach(innerChild => {
            if (innerChild.type === SidebarItem) {
              this.itemKey2ParentKey[innerChild.props.itemKey] =
                child.props.itemKey;
            }
          });
        }
        onScreenChildren.push(child);
      } else if (child.type === SidebarPersistentHeader) {
        persistentTopChildren.push(child);
      } else if (child.type === SidebarPersistentFooter) {
        persistentBottomChildren.push(child);
      } else {
        onScreenChildren.push(child);
      }
    };

    if (props.children) {
      if (props.children.length) {
        props.children.forEach(child => {
          if (child.length > 0) {
            child.forEach(handleChild);
          } else {
            handleChild(child);
          }
        });
      } else {
        handleChild(props.children);
      }
    }

    const newState = {
      persistentTopChildren,
      persistentBottomChildren,
      onScreenChildren,
      selectedKey: props.selectedKey,
    };

    const selectedItemParentKey = this.itemKey2ParentKey[props.selectedKey];
    if (selectedItemParentKey) {
      this.setState({
        ...newState,
        drivenInChildren: this.itemKey2Children[selectedItemParentKey].children,
        drivenOutChildren: [],
      });
    } else {
      this.setState({
        ...newState,
        drivenInChildren: [],
        drivenOutChildren: this.state.drivenInChildren,
      });
    }
  }

  render() {
    const { isHidden, skin } = this.props;
    const css = { ...classes, ...this.props.classNames };

    const sliderClasses = st(
      css.slider,
      {
        skin,
      },
      this.state.drivenInChildren.length !== 0 && css.sliderOutToLeft,
      this.state.drivenInChildren.length === 0 &&
        this.state.drivenOutChildren.length !== 0 &&
        css.sliderInFromLeft,
    );

    const sliderOutToRightClasses = st(
      css.slider,
      {
        skin,
      },
      !this.props.isHidden && css.sliderOutToRight,
    );
    const sliderInFromRightClasses = st(
      css.slider,
      {
        skin,
      },
      !this.props.isHidden && css.sliderInFromRight,
    );

    const rootClasses = st(css.sideBar || classes.root, {
      hidden: isHidden,
      skin,
    });

    return (
      <SidebarContext.Provider value={this.sidebarContext}>
        <div className={rootClasses} data-hook={this.props.dataHook}>
          {this.state.persistentTopChildren}

          <div className={st(css.content)}>
            {this.state.drivenInChildren.length === 0 &&
              this.state.drivenOutChildren.length !== 0 && (
                <div
                  className={sliderOutToRightClasses}
                  data-hook={dataHooks.drivenOutChildren}
                >
                  {this.state.drivenOutChildren}
                </div>
              )}

            <SidebarContentWrapper
              containerClasses={sliderClasses}
              children={this.state.onScreenChildren}
              skin={skin}
            />

            {this.state.drivenInChildren.length !== 0 && (
              <SidebarContentWrapper
                containerClasses={sliderInFromRightClasses}
                containerDataHook={dataHooks.drivenInChildren}
                children={this.state.drivenInChildren}
                skin={skin}
              />
            )}
          </div>

          {this.state.persistentBottomChildren}
        </div>
      </SidebarContext.Provider>
    );
  }
}

export default Sidebar;
