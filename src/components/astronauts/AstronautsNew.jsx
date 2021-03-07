import { useState } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';
import { AstronautForm } from './AstronautsForm';

export const AstronautsNew = () => {
  const [astronautInput, setAstronautInput] = useState({
    name: '',
    surname: '',
    birth_date: '',
    superpower: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [send, setSend] = useState(false);

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage('');
      if (
        astronautInput.name &&
        astronautInput.surname &&
        astronautInput.birth_date &&
        astronautInput.superpower
      ) {
        await astronauts.post('/astronauts/', astronautInput);
        setSend(true);
      } else {
        setErrorMessage('Please fill all fields.');
      }
    } catch (error) {
      setErrorMessage('Data were not sent', error);
    }
  };

  return (
    <>
      <h3>New astronaut</h3>
      {errorMessage && (
        <div className="ui negative message">{errorMessage}</div>
      )}
      {send && (
        <div className="ui positive message">Data were sent successfully</div>
      )}
      {!send && (
        <AstronautForm
          astronautInput={astronautInput}
          onSubmitForm={onSubmitForm}
          setAstronautInput={setAstronautInput}
        />
      )}
      <Link to="/" className="ui button" style={{ marginTop: '1em' }}>
        <i className="arrow circle left icon"></i>
        Go back to main page
      </Link>
    </>
  );
};
