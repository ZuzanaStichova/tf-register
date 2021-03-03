import React from 'react';
import { Link } from 'react-router-dom';

const AstronautsDelete = () => {
  return (
    <div>
      <div className="ui positive message">Astronaut was deleted successfuly</div>
      <Link to="/" className="ui button">Go to the list</Link>
    </div>
  )
}

export default AstronautsDelete;