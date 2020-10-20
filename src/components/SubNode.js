import React, { useState } from 'react';
import TreeNode from './TreeNode';

const SubNode = ({ label, val }) => {
  const [expand, setExpand] = useState(true);
  return (
    <li key={label}>
      <button onClick={() => setExpand(!expand)}>{label}</button>
      {expand && <TreeNode json={val} />}
    </li>
  );
};

export default SubNode;
