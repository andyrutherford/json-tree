import React from 'react';
import SubNode from './SubNode';

import isImage from '../utils/isImage';

const TreeNode = ({ json }) => {
  const renderItems = (key, val) => {
    if (val !== null && typeof val === 'object') {
      return <SubNode key={key} label={key} val={val} />;
    }
    if (isImage(val)) {
      return (
        <li key={key}>
          {key}:{' '}
          <img
            src={val}
            alt=''
            style={{
              height: '125px',
              width: 'auto',
            }}
          />
        </li>
      );
    }
    return (
      <li key={key}>
        {key}: {val}
      </li>
    );
  };

  return <ul>{Object.entries(json).map((entry) => renderItems(...entry))}</ul>;
};

export default TreeNode;
