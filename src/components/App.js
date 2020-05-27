import React from 'react';
import {Provider} from 'react-redux'
import store from '../store.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import Header from './Header'
import Landing from './Landing.js';
import Movie from './Movie'

//Styles
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
