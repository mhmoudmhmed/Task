import React from 'react';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../ContextProvider/StateProvider';
import { actionTypes } from '../../ContextProvider/Reducer';

import './Login.css';

const Login = () => {

  const [state, dispatch] = useStateValue();

  const SignIn = (e) => {
    // login
    auth.signInWithPopup(provider)
    .then(res => {

      dispatch({
        type: actionTypes.SET_USER,
        user: res.user
      })
    }).catch(error => {
      console.log(error);
    });
  }

  return(
    <div className="login">
      <div className="login_button">
        <Button variant="contained" color="primary" type="submit" onClick={SignIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;