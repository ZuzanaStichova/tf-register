import React, { useState, useEffect } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AstronautList = () => {
  const [astronautsList, setAstronautsList] = useState([]);

  const deleteAstronaut = async (id) => {
    await astronauts.delete(`/astronauts/${id}`)
  }

  useEffect(() => {
    try{
      async function fetchList() {
        const response = await astronauts.get('/astronauts/');
        setAstronautsList(response.data.data);
      }
      fetchList();
    } catch (error) {
      console.log('cannot get data')
    }
  }, [])

  const renderedList = astronautsList.map(astronaut => {
    return (
      <React.Fragment key={astronaut.id}>
        <tr>
          <td>{astronaut.name} {astronaut.surname}</td>
          <td>{moment(astronaut.birth_date).format("Do MMMM YYYY")}</td>
          <td>{astronaut.superpower}</td>
          <td>
            <Link to={`/astronauts/edit/${astronaut.id}`} >
              <button className="ui button primary">Edit</button>
            </Link>
            <Link to={`/astronauts/delete/${astronaut.id}`}>
              <button onClick={() => {deleteAstronaut(astronaut.id)}} className="ui button negative">Delete</button>
            </Link>
          </td>
        </tr>
      </React.Fragment>
    )
  })

  return (
    <div>
      <table className="ui table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Birth date
            </th>
            <th>
              Superpower
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {renderedList}
        </tbody>
      </table>
      <Link to="/astronauts/new" className="ui button positive">Add new astronaut</Link>
    </div>
  )
}

export default AstronautList;