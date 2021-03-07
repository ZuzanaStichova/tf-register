import { Link } from 'react-router-dom';

export const AstronautsDelete = () => (
  <>
    <p className="ui positive message">Astronaut was deleted successfuly</p>
    <Link to="/" className="ui button">
      Go to the list
    </Link>
  </>
);
