import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Test from './TestApp';
import registerServiceWorker from './registerServiceWorker';

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(<Test/>, document.getElementById('root'));
registerServiceWorker();
