import React, { useState } from 'react';
import TreeNode from './TreeNode';

const SubNode = ({ label, val }) => {
  const [expand, setExpand] = useState(true);
  return (
    <li key={label}>
      <button
        onClick={() => setExpand(!expand)}
        style={{ fontSize: '1.25rem' }}
      >
        {label}
      </button>
      {expand && <TreeNode json={val} />}
    </li>
  );
};

export default SubNode;
