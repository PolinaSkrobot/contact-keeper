import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Ted Dream",
        email: "tdream@gmail.com",
        phone: "111-111-2222",
        type: "personal",
      },
      {
        id: "2",
        name: "Sarah Smith",
        email: "ssmith@gmail.com",
        phone: "111-111-1111",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact

  //Delete contact

  // Set current contacr

  //Clear current contact

  //Update contace

  //Filter contact

  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
