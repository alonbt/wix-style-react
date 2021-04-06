import React from 'react';
import PropTypes from 'prop-types';

import FluidColumns from '../common/FluidColumns';
import Text from '../Text';

import { st, classes } from './TestimonialList.st.css';
import { dataHooks } from './constants';

/** TestimonialList is a group of layouts that display avatar, description and name. It's used in a footer of a marketing page layout. */
class TestimonialList extends React.Component {
  render() {
    const { className, dataHook, testimonials, cols } = this.props;

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        <FluidColumns cols={cols}>
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonialItem
                dataHook={dataHooks.testimonial}
                key={index}
                index={index}
                avatar={testimonial.avatar}
                text={testimonial.text}
                authorName={testimonial.authorName}
              />
            );
          })}
        </FluidColumns>
      </div>
    );
  }
}

const TestimonialItem = ({ index, avatar, text, authorName, dataHook }) => (
  <div className={classes.testimonialItem} data-hook={dataHook}>
    {avatar && (
      <div
        className={classes.testimonialItemAvatar}
        data-hook={`${dataHooks.testimonialAvatar}${index}`}
      >
        {avatar}
      </div>
    )}
    <div className={classes.testimonialItemTextArea}>
      {text && (
        <div className={classes.testimonialItemText}>
          <Text dataHook={`${dataHooks.testimonialText}${index}`} size="small">
            {text}
          </Text>
        </div>
      )}
      {authorName && (
        <Text
          dataHook={`${dataHooks.testimonialAuthorName}${index}`}
          size="small"
          weight="bold"
        >
          {authorName}
        </Text>
      )}
    </div>
  </div>
);

TestimonialList.displayName = 'TestimonialList';

TestimonialList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Define the number of columns. It is used for the grid in order to define how many testimonials will be displayed in a row. The default value is 3. */
  cols: PropTypes.number,

  /**
   * Array of testimonials
   *  * `avatar` - the testimonial avatar image.
   *  * `text` - the testimonial content.
   *  * `authorName` - the testimonial author name.
   */
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.node,
      text: PropTypes.string,
      authorName: PropTypes.string,
    }),
  ),
};

TestimonialList.defaultProps = {
  cols: 3,
  testimonials: [],
};

export default TestimonialList;
