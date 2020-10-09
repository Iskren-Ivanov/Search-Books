import React from 'react';

import MyRoute from './CustomRoute/Route';
import NavigationBar from './Components/NavigationBar/Navbar';
import { NotificationContainer } from 'react-notifications';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './App.css';

const App = (props) => {

  return (
    <div className="App">
      <NotificationContainer />
      <NavigationBar />
      <MyRoute />
    </div>
  );
}

export default App;
