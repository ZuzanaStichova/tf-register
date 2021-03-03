import React from 'react';
import styles from './App.module.css';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import AstronautsNew from './astronauts/AstronautsNew';
import AstronautsList from './astronauts/AstronautsList'
import AstronautsEdit from './astronauts/AstronautsEdit';
import AstronautsDelete from './astronauts/AstronautsDelete';

const App = () => {
  return (
    <div className={styles.container} >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={AstronautsList} />
          <Route path="/astronauts/new" exact component={AstronautsNew} />
          <Route path="/astronauts/edit/:id" exact component={AstronautsEdit} />
          <Route path="/astronauts/delete/:id" exact component={AstronautsDelete} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;