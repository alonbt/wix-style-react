import * as React from 'react';
import Ellipsis from '..';

function EllipsisWithMandatoryProps() {
  return <Ellipsis render={() => <div />} />;
}

function EllipsisWithAllProps() {
  return (
    <Ellipsis
      maxLines={2}
      ellipsis
      showTooltip
      wrapperClassName="test"
      fixed // A TooltipCommon prop
      render={({ ref, ellipsisClasses, ellipsisInlineStyle }) => (
        <div
          ref={ref}
          className={ellipsisClasses('another-class')}
          style={ellipsisInlineStyle}
        >
          hi
        </div>
      )}
    />
  );
}
