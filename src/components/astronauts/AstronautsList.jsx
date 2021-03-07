import { useState, useEffect } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';
import { AstronautDetail } from './AstronautDetail';

export const AstronautsList = () => {
  const [astronautsList, setAstronautsList] = useState([]);

  const deleteAstronaut = async (id) => {
    try {
      await astronauts.delete(`/astronauts/${id}`);
    } catch (error) {
      console.log('Delete failed', error);
    }
  };

  useEffect(() => {
    try {
      async function fetchList() {
        const response = await astronauts.get('/astronauts/');
        setAstronautsList(response.data.data);
      }
      fetchList();
    } catch (error) {
      console.log('Cannot get data', error);
    }
  }, []);

  return (
    <>
      <div className="ui relaxed divided list segment">
        <h3>Registered astronauts</h3>
        {astronautsList.map((astronaut) => (
          <AstronautDetail
            key={astronaut.id}
            astronaut={astronaut}
            deleteAstronaut={deleteAstronaut}
          />
        ))}
      </div>
      <Link
        to="/astronauts/new"
        className="ui button positive"
        style={{ margin: '1em' }}
      >
        <i className="user plus icon"></i>
        Add new astronaut
      </Link>
    </>
  );
};
