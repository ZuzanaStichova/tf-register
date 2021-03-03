import React,{ useState } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';

const AstronautsNew = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [send, setSend] = useState(false);

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage('');
      if (name && surname && birth_date && superpower) {
        await astronauts.post('/astronauts/new', {
          name,
          surname,
          birth_date,
          superpower
        }); 
        setSend(true);   
      } else {
        setErrorMessage('Please fill all fields.');
      }
    } catch (error) {
      setErrorMessage('Data were not sent')
    } 
  }

  return (
    <div>
      <h3>New astronaut</h3>
      {errorMessage && <div className="ui negative message">{errorMessage}</div>}
      {send && <div className="ui positive message">Data were sent successfully</div>}
      {!send &&
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="field">
            <label>Surname</label>
            <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)}/>
          </div>  
          <div className="field">  
            <label>Birth date</label>
            <input type="date" name="birth_date" onChange={(e) => setBirthDate(e.target.value)} />
            </div> 
          <div className="field"> 
            <label>Superpower</label>
            <input type="text" name="superpower" onChange={(e) => setSuperpower(e.target.value)} />
            </div>
          <button onClick={onSubmitForm} className="ui primary button">Submit</button>
        </form>
      }
      <Link to="/" className="ui success button">Go back to main page</Link>
    </div>
  )
}

export default AstronautsNew;