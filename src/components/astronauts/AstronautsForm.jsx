export const AstronautForm = ({
  astronautInput,
  onSubmitForm,
  setAstronautInput,
}) => (
  <form className="ui form">
    <div className="field">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={astronautInput.name}
        onChange={(e) => {
          setAstronautInput({
            ...astronautInput,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </div>
    <div className="field">
      <label>Surname</label>
      <input
        type="text"
        name="surname"
        value={astronautInput.surname}
        onChange={(e) => {
          setAstronautInput({
            ...astronautInput,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </div>
    <div className="field">
      <label>Birth date</label>
      <input
        type="date"
        name="birth_date"
        value={astronautInput.birth_date}
        onChange={(e) => {
          setAstronautInput({
            ...astronautInput,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </div>
    <div className="field">
      <label>Superpower</label>
      <input
        type="text"
        name="superpower"
        value={astronautInput.superpower}
        onChange={(e) => {
          setAstronautInput({
            ...astronautInput,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </div>
    <button onClick={onSubmitForm} className="ui primary button">
      <i className="save icon"></i>
      Save
    </button>
  </form>
);
