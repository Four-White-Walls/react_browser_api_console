import React, {useContext, useState} from 'react'
import './settings.css'
import RequestContext from '../context/request/RequestContext'

const Settings = () => {

const requestContext = useContext(RequestContext);

const [request, setRequest] = useState({
    url: ''
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
            <label htmlFor="url">
                <input type="text" name="url" onChange={handleChange} value={request.url} id=""/>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Settings;
