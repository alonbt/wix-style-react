import React from 'react';
import RangeInputWithLabelComposite from './RangeInputWithLabelComposite/RangeInputWithLabelComposite';

const Range = props => <RangeInputWithLabelComposite {...props} />;

Range.displayName = 'Range';

Range.propTypes = {
  ...RangeInputWithLabelComposite.propTypes,
};

export default Range;
