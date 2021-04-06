import { st, classes } from './PageHeader.st.css';
import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import Breadcrumbs from '../Breadcrumbs';
import Text from '../Text';
import Heading from '../Heading';
import { Animator } from 'wix-animations';
import IconButton from '../IconButton';
import { dataHooks } from './constants';

const isDarkTheme = (hasBackgroundImage, minimized) =>
  !minimized && hasBackgroundImage;

const getBreadcrumbsTheme = (hasBackgroundImage, minimized) =>
  isDarkTheme(hasBackgroundImage, minimized)
    ? 'onDarkBackground'
    : 'onGrayBackground';

const getTitle = (title, minimized) =>
  typeof title === 'function' ? title(minimized) : title;

const generateDefaultBreadcrumbs = (title, hasBackgroundImage, minimized) => (
  <Breadcrumbs
    items={[{ id: '1', value: getTitle(title, minimized) }]}
    activeId="1"
    size="medium"
    theme={getBreadcrumbsTheme(hasBackgroundImage, minimized)}
    onClick={() => {}}
  />
);

const getBreadcrumbs = (breadcrumbs, minimized) =>
  typeof breadcrumbs === 'function' ? breadcrumbs(minimized) : breadcrumbs;

const generateThemedBreadcrumbs = (
  breadcrumbs,
  title,
  hasBackgroundImage,
  minimized,
) => {
  if (breadcrumbs) {
    return React.cloneElement(getBreadcrumbs(breadcrumbs, minimized), {
      theme: getBreadcrumbsTheme(hasBackgroundImage, minimized),
    });
  }

  return generateDefaultBreadcrumbs(title, hasBackgroundImage, minimized);
};

/**
 * A header that sticks at the top of the container which minimizes on scroll
 */
export default class PageHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    const { breadcrumbs, title, hasBackgroundImage, minimized } = props;
    this.state = {
      themedBreadcrumbs: generateThemedBreadcrumbs(
        breadcrumbs,
        title,
        hasBackgroundImage,
        minimized,
      ),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { breadcrumbs, title, hasBackgroundImage, minimized } = this.props;
    const newBreadcrumbs = nextProps.breadcrumbs;
    const newTitle = nextProps.title;
    const newHasBackgroundImage = nextProps.hasBackgroundImage;
    const newMinimized = nextProps.minimized;

    if (
      breadcrumbs !== newBreadcrumbs ||
      title !== newTitle ||
      hasBackgroundImage !== newHasBackgroundImage ||
      minimized !== newMinimized
    ) {
      const themedBreadcrumbs = generateThemedBreadcrumbs(
        newBreadcrumbs,
        newTitle,
        newHasBackgroundImage,
        newMinimized,
      );
      this.setState({ themedBreadcrumbs });
    }
  }

  _animateComponent = (show, useEnterDelay, content) => {
    if (show) {
      return content;
    }

    return useEnterDelay ? (
      <Animator show={show} opacity timing="medium" delay={{ enter: 100 }}>
        {content}
      </Animator>
    ) : (
      <Animator show={show} opacity timing="medium">
        {content}
      </Animator>
    );
  };

  render() {
    const {
      dataHook,
      breadcrumbs,
      onBackClicked,
      title,
      subtitle,
      minimized,
      actionsBar,
      showBackButton,
      hasBackgroundImage,
      className,
    } = this.props;

    const breadcrumbsExists = !!breadcrumbs;
    const { themedBreadcrumbs } = this.state;
    const _title = getTitle(title, minimized);

    return (
      <div className={st(classes.root, {}, className)} data-hook={dataHook}>
        <div className={classes.header}>
          <div>
            {this._animateComponent(
              breadcrumbsExists || minimized,
              !breadcrumbsExists,
              <div
                className={st(classes.breadcrumbsContainer, {
                  withoutBreadcrumbs: !breadcrumbsExists,
                })}
                data-hook={dataHooks.breadcrumbs}
              >
                {themedBreadcrumbs}
              </div>,
            )}
          </div>
          <div className={st(classes.titleContainer, { minimized })}>
            {showBackButton &&
              onBackClicked &&
              this._animateComponent(
                !minimized,
                !breadcrumbsExists,
                <IconButton
                  className={st(classes.titleBackButton, {
                    darkTheme: isDarkTheme(hasBackgroundImage, minimized),
                  })}
                  dataHook={dataHooks.backButton}
                  onClick={onBackClicked}
                >
                  <ChevronLeft className={classes.titleBackButtonIcon} />
                </IconButton>,
              )}
            <div className={classes.titleColumn}>
              {title &&
                this._animateComponent(
                  !minimized,
                  !breadcrumbsExists,
                  <Heading
                    appearance={'H1'}
                    className={classes.title}
                    dataHook={dataHooks.title}
                    ellipsis={typeof _title === 'string'}
                    light={isDarkTheme(hasBackgroundImage, minimized)}
                  >
                    {_title}
                  </Heading>,
                )}
              {subtitle &&
                this._animateComponent(
                  !minimized,
                  !breadcrumbsExists,
                  <div data-hook={dataHooks.subtitle}>
                    <Text
                      ellipsis={typeof subtitle === 'string'}
                      light={isDarkTheme(hasBackgroundImage, minimized)}
                      secondary={!isDarkTheme(hasBackgroundImage, minimized)}
                      maxLines={2}
                      maxWidth="288px"
                    >
                      {subtitle}
                    </Text>
                  </div>,
                )}
            </div>
          </div>
        </div>
        {actionsBar && (
          <div
            className={st(classes.actionsBar, {
              minimized,
              withBreadcrumbs: breadcrumbsExists,
            })}
            data-hook={dataHooks.actionBar}
          >
            {typeof actionsBar === 'function'
              ? actionsBar({ minimized, hasBackgroundImage })
              : actionsBar}
          </div>
        )}
      </div>
    );
  }
}
PageHeader.displayName = 'Page.Header';
PageHeader.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** This property is being supplied by the Page component, it's value changes by the state of the scrolled content */
  minimized: PropTypes.bool,
  /** This property is being supplied by the Page component, it's value reflects if the Page has a background image or not */
  hasBackgroundImage: PropTypes.bool,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** Wix-Style-React Breadcrumbs component */
  breadcrumbs: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The main title text */
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The subtitle text */
  subtitle: PropTypes.node,
  /** Should show a back button */
  showBackButton: PropTypes.bool,
  /** The callback when back button is clicked */
  onBackClicked: PropTypes.func,
  /** A placeholder for a component that can contain actions / anything else. It should be a React component that receives `minimized` and `hasBackgroundImage` props. */
  actionsBar: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

PageHeader.defaultProps = {
  minimized: false,
};
