import './App.css';
//
// import Amplify from 'aws-amplify';
// import awsExports from './aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';
//
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Route, Switch } from 'wouter';

import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import RadioSpec from './pages/radio/RadioSpec';
import Overview from './pages/Overview';
import AboutRadio from './pages/radio/AboutRadio';
import Radio from './pages/radio/Radio';
import RadioTrouble from './pages/radio/RadioTrouble';

// Amplify.configure(awsExports);

function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/overview" component={Overview} />
				<Route path="/aboutradio" component={AboutRadio} />
				<Route path="/radio" component={Radio} />
				<Route path="/radiospec" component={RadioSpec} />
				<Route path="/radiotrouble" component={RadioTrouble} />
			</Switch>
		</Router>
	);
}

export default App;
