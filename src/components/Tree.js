import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ json }) => {
  return (
    <div>
      <TreeNode json={json} />
    </div>
  );
};

export default Tree;
