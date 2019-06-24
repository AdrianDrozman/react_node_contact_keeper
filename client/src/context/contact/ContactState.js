import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'ady drozman',
        email: 'adytestare@gmail.com',
        type: 'personal',
        phone: '111-111-1111'
      },
      {
        id: 2,
        name: 'ady drozman2',
        email: 'adytestare2@gmail.com',
        type: 'personal',
        phone: '111-111-1111'
      },
      {
        id: 3,
        name: 'ady drozman3',
        email: 'adytestare3@gmail.com',
        type: 'professional',
        phone: '111-111-1111'
      }
    ]
  };
  const [state,dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
