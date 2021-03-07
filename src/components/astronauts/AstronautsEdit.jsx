import { useState, useEffect } from 'react';
import astronauts from '../../apis/astronauts';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AstronautForm } from './AstronautsForm';

export const AstronautsEdit = (props) => {
  const [astronautInput, setAstronautInput] = useState({
    name: '',
    surname: '',
    birth_date: '',
    superpower: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [send, setSend] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await astronauts.get(
          `/astronauts/${props.match.params.id}`
        );
        if (response.data.data.length === 0) {
          setErrorMessage('This astronaut was not found.');
          return;
        } else {
          setAstronautInput({
            name: response.data.data[0].name,
            surname: response.data.data[0].surname,
            birth_date: moment(response.data.data[0].birth_date).format(
              'yyyy-MM-DD'
            ),
            superpower: response.data.data[0].superpower,
          });
        }
      }
      fetchData();
    } catch (error) {
      console.log('Cannot get data');
    }
  }, [props.match.params.id]);

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
        await astronauts.put(
          `/astronauts/${props.match.params.id}`,
          astronautInput
        );
        setSend(true);
      } else {
        setErrorMessage('Did you forget something to fill?');
      }
    } catch (error) {
      setErrorMessage('Something get wrong');
    }
  };

  return (
    <>
      <h3>Update details</h3>
      {errorMessage && (
        <div className="ui negative message">{errorMessage}</div>
      )}
      {send && (
        <div className="ui positive message">
          Date were updated successfully
        </div>
      )}
      {!send && errorMessage !== 'This astronaut was not found.' && (
        <AstronautForm
          astronautInput={astronautInput}
          setAstronautInput={setAstronautInput}
          onSubmitForm={onSubmitForm}
        />
      )}
      <Link to="/" className="ui button" style={{ marginTop: '1em' }}>
        <i className="arrow circle left icon"></i>
        Go back to main page
      </Link>
    </>
  );
};
