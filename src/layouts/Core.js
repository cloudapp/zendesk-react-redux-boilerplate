import React from 'react';

function CoreLayout ({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
};

export default CoreLayout;
