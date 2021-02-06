export default class GetRequest {

    constructor(req) {
        let {url, headers} = req;
        this.url = url;
        this.headers = headers;      
    }

    call = async () => {
        this.startTime = new Date().getTime();
        let response = await fetch(this.url, {
            method: 'GET', 
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',  
            }
        });
        let data = await response.json()
        let status = await response.status
        return {
            data,
            status,
            time: new Date().getTime() - this.startTime
        }
    }
}