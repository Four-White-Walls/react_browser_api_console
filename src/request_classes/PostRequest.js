export default class PostRequest {

    constructor(req) {
        console.log(req)
        let {url, headers, body} = req;
        this.url = url;
        this.headers = headers;
        if(body) {
            this.body = body
        }    
    }

    call = async function(){
        this.startTime = new Date().getTime();
        console.log(this.body)
        let response = await fetch(this.url, {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',  
            },
            body: this.body ? this.body : JSON.stringify({})
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