import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Box from '../../Box';
import { st, classes } from './Subheader.st.css';
import { isString } from '../../utils/StringUtils';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';

class Subheader extends React.PureComponent {
  static displayName = 'Card.Subheader';

  static defaultProps = {
    skin: 'standard',
  };

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** card title */
    title: PropTypes.node.isRequired,

    /** suffix node that will be rendered on the right side */
    suffix: PropTypes.node,

    /** skin  */
    skin: PropTypes.oneOf(['standard', 'neutral']),
  };

  render() {
    const { dataHook, title, suffix, skin } = this.props;

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            data-hook={dataHook}
            className={st(classes.root, {
              skin,
              reducedSpacingAndImprovedLayout,
            })}
          >
            <Box verticalAlign="middle" flexGrow={1} overflow="hidden">
              {isString(title) ? (
                <Text ellipsis weight="normal" size="medium" dataHook="title">
                  {title}
                </Text>
              ) : (
                <div data-hook="title-node">{title}</div>
              )}
            </Box>

            {suffix && (
              <div className={classes.suffix} data-hook="suffix-node">
                {suffix}
              </div>
            )}
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}

export default Subheader;
