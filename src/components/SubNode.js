import React from 'react';
import TreeNode from './TreeNode';

const SubNode = ({ label, val }) => {
  return (
    <li key={label}>
      {label} <TreeNode json={val} />
    </li>
  );
};

export default SubNode;
