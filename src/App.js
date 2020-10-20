import React, { useState } from 'react';
import Form from './components/Form';
import Tree from './components/Tree';

const App = () => {
  const [url, setUrl] = useState('');
  const [json, setJson] = useState({});

  const urlHandler = (url) => {
    setUrl(url);
  };

  const jsonHandler = (json) => {
    setJson(json);
  };

  return (
    <div className='App'>
      <Form jsonHandler={jsonHandler} />
      {json && <Tree json={json} />}
    </div>
  );
};

export default App;
