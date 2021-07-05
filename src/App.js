import './App.css';
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/books' exact component={Book} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
