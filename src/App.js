import React from 'react';
import { Router, Route, Switch} from 'react-router';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';

function App() {
  const history = createBrowserHistory()
  return (
   <div>
     <Router history={history}>
       <Switch>
         <Route exact path='/' component={Home} />
       </Switch>
     </Router>
   </div>
  );
}

export default App;
