import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:type/:id'>
          <Navigation />
          <PetDetailsPage />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/pet-details-not-found'>
          <PetDetailsNotFound />
        </Route>
        <Route path='/:param?'>
          <Navigation />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
