//promise + async/await

class FastHttp{
    async send(method,url,body){
        let response = await fetch(url,{
            method : method,
            headers : {"Content-Type":"application/json"},
            body : body ? JSON.stringify(body) : null,
        })
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText);
        }
    }
    //get
    get(url){
        return this.send("GET",url,null);
    }

    //post
    post(url,body){
        return this.send("POST", url,body);
    }

    //PUT
    put(url,body){
        return this.send("PUT", url,body);
    }

    //delete
    delete(url){
        return this.send("DELETE", url,null);
    }
}
const baseURL = "https://6335aa43ea0de5318a188bd3.mockapi.io/users"
//dung thu get
let http = new FastHttp()
(async() => {
    try{
        const value = http.get(baseURL);
        console.log("lay du lieu la ", value);
    }catch(error){
        console.log(("lỗi vì", error));
    }
})();

