import Image from '../images/astronaut.png';

export const Header = () => (
  <>
    <img
      src={Image}
      alt="astronaut logo"
      style={{ width: '10em', height: 'auto' }}
    />
    <h2 style={{ padding: '1em', color: '#363636' }}>Astronaut register</h2>
  </>
);
