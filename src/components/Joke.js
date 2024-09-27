import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ btnText, joke }) {
  return (
    <div>
      <h1>{joke.setup}</h1>
      {btnText !== 'Get Punchline!' ? <h2>{joke.delivery}</h2> : ''}
    </div>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
