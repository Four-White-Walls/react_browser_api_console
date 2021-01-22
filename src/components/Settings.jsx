import React, {useContext, useState} from 'react'
import './settings.css'
import RequestContext from '../context/request/RequestContext'

const Settings = () => {

const requestContext = useContext(RequestContext);

const [request, setRequest] = useState({
    url: '',
    reqtype: 'GET',
    headers: 'application/json'
});

const {newGetRequest} = requestContext; 


const handleChange = (e) => {
    setRequest({
        ...request,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = () => {
    newGetRequest(request);
}

    return (
        <div id="settings">
            <select name="reqtype" onChange={handleChange} id="">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
            </select>
            <select name="headers" onChange={handleChange} id="">
                <option value="application/json">application/json</option>
            </select>
                <input type="text" name="url" onChange={handleChange} value={request.url} id="" placeholder="url"/>
                <textarea name="body" value={request.data} id="" rows="10" onChange={handleChange}></textarea>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Settings;
