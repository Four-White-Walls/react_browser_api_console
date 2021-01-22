import React, { useReducer } from 'react';
import RequestContext from './RequestContext';
import RequestReducer from './RequestReducer';

import {
  NEW_GET_REQUEST,
  UPDATE_REQUEST_STATE
} from '../types';

const RequestState = (props) => {

  const initialState = {
    request: {},
    response: {}
  };

  const [state, dispatch] = useReducer(RequestReducer, initialState);

  const newGetRequest = async (req) => {
      try {
        let start_time = new Date().getTime();
        fetch(req.url, {
            ...req.options
        })
        .then(
          async response => {
            let end_time = new Date().getTime();
            return{
              res: await response.json(),
              time: end_time - start_time
            } 
          })
        .then(data => {
            dispatch({
                type: NEW_GET_REQUEST,
                payload: {data}
            })

        });
      }
      catch(err) {
        console.error(err)
      }
    }
 
  return (
    <RequestContext.Provider
      value={{
        request: state.request,
        response: state.response,
        newGetRequest,
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
};
export default RequestState;