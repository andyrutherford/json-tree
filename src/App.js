import React, { useState } from 'react';
import Form from './components/Form';
import TreeNode from './components/TreeNode';

const App = () => {
  const [json, setJson] = useState({});

  const jsonHandler = (json) => {
    setJson(json);
  };

  return (
    <div className='App'>
      <Form jsonHandler={jsonHandler} />
      {json && (
        <div className='tree'>
          <TreeNode json={json} />
        </div>
      )}
    </div>
  );
};

export default App;
