'use client';

import React, { useState } from 'react';
import Joke from '../components/Joke';
import getAJoke from '../api/jokeDate';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getSingleJoke = () => {
    getAJoke().then((jokeObj) => {
      setJoke({
        setup: jokeObj.setup,
        delivery: jokeObj.delivery,
      });
      setBtnText('Get Punchline!');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <button type="button" onClick={getSingleJoke}>
          {btnText}
        </button>
      ) : (
        <button type="button" onClick={() => setBtnText('Get A New Joke')}>
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Home;
