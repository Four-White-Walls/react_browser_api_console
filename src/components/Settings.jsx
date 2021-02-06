import React, {useContext, useState} from 'react'
import './settings.css'
import RequestContext from '../context/request/RequestContext'
import JSONInput from 'react-json-editor-ajrm';
    import locale    from 'react-json-editor-ajrm/locale/en';

const Settings = () => {

const requestContext = useContext(RequestContext);

const [request, setRequest] = useState({
    url: '',
    reqtype: 'GET',
    headers: 'application/json'
});

const {newGetRequest, newPostRequest} = requestContext; 


const handleChange = (e) => {
    console.log(e)
    setRequest({
        ...request,
        [e.target.name]: e.target.value
    })
}

const handleJsonChange = (obj) => {
    setRequest({
        ...request,
        body: obj.json
    })
}

const handleRequest = () => {
    setRequest({...request})
    switch(request.reqtype) {
        case 'GET':
            newGetRequest(request);
            break;
        case 'POST':
            newPostRequest(request);
            break;
        default: 
            console.log('nada boy')
    }
}

const handleSubmit = () => {
    handleRequest();
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
                <JSONInput
                name="body"
                id          = 'body'
                locale      = { locale }
                onChange={handleJsonChange}
    />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Settings;
