import React from 'react';

export default (props) => {
  // delete currentSlide and slideCount from props
  const { currentSlide, slideCount, children, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <div {...restProps}>
      {children}
    </div>
  );
};
