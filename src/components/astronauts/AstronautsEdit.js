import React, { useState, useEffect } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AstronautsEdit = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [send, setSend] = useState(false);

  useEffect(() => {
    try{
      async function fetchData() {
        const response = await astronauts.get(`/astronauts/${props.match.params.id}`);
        setName(response.data.data[0].name);
        setSurname(response.data.data[0].surname);
        setBirthDate(moment(response.data.data[0].birth_date).format("yyyy-MM-DD"));
        setSuperpower(response.data.data[0].superpower);
      };
      fetchData();
    } catch (error) {
      console.log(error)
    }  
  }, [])

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage('');
      if(name && surname && birth_date && superpower) {
        await astronauts.put(`/astronauts/${props.match.params.id}`, {
          name,
          surname,
          birth_date,
          superpower
        });
        setSend(true);
      } else {
        setErrorMessage('Did you forget something to fill?');
      };
    } catch (error) {
      setErrorMessage('Something get wrong')
    } 
  }

  return (
    <div>
      <h3>Update details</h3>
      {errorMessage && <div className="ui negative message">{errorMessage}</div>}
      {send && <div className="ui positive message">Date were updated successfully</div>}
      {!send &&
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="field">
            <label>Surname</label>
            <input type="text" name="surname" defaultValue={surname} onChange={(e) => setSurname(e.target.value)}/>
          <div className="field">
          </div>
            <label>Birth date</label>
            <input type="date" name="birth_date" defaultValue={birth_date} onChange={(e) => setBirthDate(moment(e.target.value).format("yyyy-MM-DD")) } />
          <div className="field">
          </div>
            <label>Superpower</label>
            <input type="text" name="superpower" defaultValue={superpower} onChange={(e) => setSuperpower(e.target.value)} />
          </div>
          <button onClick={onSubmitForm} className="ui primary button">Save</button>
        </form>
      }
      <Link to="/" className="ui secondary button">Go back to main page</Link>
    </div>
  )
}

export default AstronautsEdit;