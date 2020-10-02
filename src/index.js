import { red } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './ContextProvider/StateProvider';
import reducer, { initialState } from './ContextProvider/Reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);