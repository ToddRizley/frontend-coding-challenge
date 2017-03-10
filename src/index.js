import React from 'react';
import ReactDOM from 'react-dom';
import EventableAppContainer from './components/EventableAppContainer';
import '../public/assets/index.css';

ReactDOM.render(
  <div className="container">
    <h1 id="title" className="col-xs-12">Eventable Calendar App</h1>
    <h3 id="subtitle" className="col-xs-12">View, organize, and add to your upcoming events!</h3>
    <EventableAppContainer />
  </div>,
  document.getElementById('root'),
);
