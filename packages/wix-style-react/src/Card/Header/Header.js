import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Header.st.css';
import Heading from '../../Heading';
import Text from '../../Text';
import { DataHooks } from './hooks';
import { isString } from '../../utils/StringUtils';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';

class Header extends React.PureComponent {
  static displayName = 'Card.Header';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** required card title */
    title: PropTypes.node.isRequired,

    /** any string to be rendered below title */
    subtitle: PropTypes.node,

    suffix: PropTypes.node,
  };

  static defaultProps = {
    subtitle: null,
    suffix: null,
  };

  render() {
    const { dataHook, title, subtitle, suffix, className } = this.props;

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            data-hook={dataHook}
            className={st(
              classes.root,
              { reducedSpacingAndImprovedLayout },
              className,
            )}
          >
            <div className={classes.titleWrapper}>
              {isString(title) ? (
                <Heading
                  dataHook={DataHooks.title}
                  appearance="H3"
                  children={title}
                  className={classes.title}
                />
              ) : (
                <span data-hook={DataHooks.title}>{title}</span>
              )}

              {subtitle && isString(subtitle) ? (
                <Text
                  dataHook={DataHooks.subtitle}
                  children={subtitle}
                  secondary
                />
              ) : (
                <span data-hook={DataHooks.subtitle}>{subtitle}</span>
              )}
            </div>

            {suffix && (
              <div
                data-hook={DataHooks.suffix}
                className={classes.suffix}
                children={suffix}
              />
            )}
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}

export default Header;
