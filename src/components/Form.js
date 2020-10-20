import React, { useState } from 'react';

import isUrl from '../utils/isUrl';

const Form = ({ jsonHandler }) => {
  const [url, setUrl] = useState('https://api.punkapi.com/v2/beers');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const json = await isUrl(url);
      setSuccess(true);
      setLoading(false);
      jsonHandler(json);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>JSON Tree</h1>
      <form onSubmit={submitHandler}>
        <input
          type='string'
          placeholder='enter a URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type='submit' value={loading ? 'Fetching...' : 'Submit'} />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{url}</p>}
    </>
  );
};

export default Form;
