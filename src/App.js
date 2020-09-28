import React, { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from './About';
import { Home } from './Home';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import DifferentTest from './DifferentTest/DifferentTest';
import ContextPage from './DifferentTest/Function/ContextPage';
import ContextPageClass from './DifferentTest/class/ContextPage';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/test' component={DifferentTest} />
          <Route path='/contexttest' component={ContextPage} />
          <Route path='/contextclass' component={ContextPageClass} />
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      </Layout>

    </Fragment>
  );
}

export default App;
