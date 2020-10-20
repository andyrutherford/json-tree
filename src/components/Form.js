import React, { useState } from 'react';

import isUrl from '../utils/isUrl';

const Form = ({ jsonHandler }) => {
  const [url, setUrl] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      const json = await isUrl(url);
      setSuccess(true);
      jsonHandler(json);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type='string'
          placeholder='enter a URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type='submit' />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{url}</p>}
    </>
  );
};

export default Form;
