import React, { useReducer } from 'react';
import RequestContext from './RequestContext';
import RequestReducer from './RequestReducer';
import GetRequest from '../../request_classes/GetRequest';
import PostRequest from '../../request_classes/PostRequest'

import {
  NEW_GET_REQUEST,
  UPDATE_REQUEST_STATE,
  NEW_POST_REQUEST
} from '../types';

const RequestState = (props) => {

  const initialState = {
    request: {},
    response: {}
  };

  const [state, dispatch] = useReducer(RequestReducer, initialState);

  const newGetRequest = async (req) => {
      try {
        new GetRequest(req).call()
            .then((data) => {
              dispatch({
                type: NEW_GET_REQUEST,
                payload: data,
              })
            })
      }
      catch(err) {
        console.error(err)
      }
    }

    const newPostRequest = async (req) => {
      console.log(req)
      try {
        new PostRequest(req).call()
            .then((data) => {
              dispatch({
                type: NEW_POST_REQUEST,
                payload: data,
              })
            })
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
        newPostRequest
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
};
export default RequestState;