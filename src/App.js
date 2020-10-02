import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/App Body/Sidebar/Sidebar';
import Feed from './Components/App Body/Feed/Feed';
import Widgets from './Components/App Body/Widget/Widgets';
import Login from './Components/Login/Login';
import { useStateValue } from './ContextProvider/StateProvider';

import "./App.css"

const App = () => {

  const [ { user }, dispatch ] = useStateValue();

  return(

    <div className="app">
      
      { !user ? <Login /> : (
        <>
          {/* header */}
          <Header />

          <div className="app_body">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />
            {/* Widget */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;