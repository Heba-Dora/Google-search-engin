import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Home/>
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
