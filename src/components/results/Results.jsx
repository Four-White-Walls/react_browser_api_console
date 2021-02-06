import React, {useContext, useState} from 'react'
import './results.css'
import ReactJson from 'react-json-view'
import RequestContext from '../../context/request/RequestContext'

const Results = () => {

const requestContext = useContext(RequestContext);
const { response } = requestContext;

    return (
        <code id="results">
            {response.data ? <ReactJson src={response.data} theme="shapeshifter"/> : 'Please submit a new request'}
            <div id="statistics">
            <p>{response.data ? 'Response Time: ' +  `${response.time}ms Status: ${response.status}`: ''}</p>
            </div>

        </code>
    )
}

export default Results
