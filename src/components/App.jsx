import { Header } from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { AstronautsNew } from './astronauts/AstronautsNew';
import { AstronautsList } from './astronauts/AstronautsList';
import { AstronautsEdit } from './astronauts/AstronautsEdit';
import { AstronautsDelete } from './astronauts/AstronautsDelete';

export const App = () => (
  <div
    className="ui container center aligned"
    style={{
      padding: '5em 0',
      width: '70%',
    }}
  >
    <Header />
    <BrowserRouter>
      <Route path="/" exact component={AstronautsList} />
      <Route path="/astronauts/new" exact component={AstronautsNew} />
      <Route path="/astronauts/edit/:id" exact component={AstronautsEdit} />
      <Route path="/astronauts/delete/:id" exact component={AstronautsDelete} />
    </BrowserRouter>
  </div>
);
