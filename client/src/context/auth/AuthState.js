import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGI_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';
import axios from 'axios';
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //register user
  const register = async (formData)=>{
    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    try {
      const res = await axios.post('/api/users',formData,config);
      console.log(res);
      dispatch({type:REGISTER_SUCCESS,payload:res.data})
      
      
    } catch (error) {
      console.log(error.response);
      dispatch({type:REGISTER_FAIL,payload:error.response.data.msg});
    }
  }

  //clear errors
  const clearErrors =()=> dispatch({type:CLEAR_ERRORS});

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors
      }}
    >
     {props.children};
    </AuthContext.Provider>
  );
};

export default AuthState;
