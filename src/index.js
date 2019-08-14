import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ExtendedComponent from './Components/ExtendedComponent';
import MyComponent from './Components/MyComponent';

const history = createBrowserHistory();
ReactDOM.render(<Router history={history} >
    <App />
</Router>, document.getElementById('root'));
// const history = createBrowserHistory();
// ReactDOM.render(
//     <Router history={history} >
//       <Route path="/" component={App} />
//       <Route path="/chart" component={ExtendedComponent} />
  
//     </Router>,
//     document.getElementById('root')
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
