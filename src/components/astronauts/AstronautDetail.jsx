import moment from 'moment';
import { Link } from 'react-router-dom';

export const AstronautDetail = ({ astronaut, deleteAstronaut }) => (
  <div className="item">
    <i className="large user middle aligned icon"></i>
    <div className="content">
      <div className="ui left floated">
        <h4 className="ui left aligned header">
          {astronaut.name} {astronaut.surname},
        </h4>
        <div className="description">
          born on {moment(astronaut.birth_date).format('Do MMMM YYYY')},
          superpower in {astronaut.superpower}
        </div>
      </div>
      <div className="ui right floated">
        <Link
          className="ui button primary"
          to={`/astronauts/edit/${astronaut.id}`}
        >
          <i className="edit icon"></i>
          Edit
        </Link>
        <Link
          className="ui button negative"
          to={`/astronauts/delete/${astronaut.id}`}
          onClick={() => {
            if (window.confirm('Are you sure to delete this astronaut?'))
              deleteAstronaut(astronaut.id);
          }}
        >
          <i className="window close icon"></i>
          Delete
        </Link>
      </div>
    </div>
  </div>
);
