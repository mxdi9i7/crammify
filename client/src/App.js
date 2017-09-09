import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import SearchPage from './components/SearchPage'

class App extends Component {
  render() {
    return (
      	<Router history={createHistory}>
			<div>
				<Route exact path="/" component={SearchPage} />
				{/* <Route path="/term/:id" component={} />
				<Route path="/user/:id" component={} /> */}
			</div>
		</Router>
    );
  }
}

export default App;
