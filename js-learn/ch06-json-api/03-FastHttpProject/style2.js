//lam lai cac chuc nang api
//nhung ma fetch(promise) + class
class FastHttp{
    send(method,url,body){
        return fetch(url,{
            method : method,
            headers : {"Content-Type":"application/json"},
            body : body ? JSON.stringify(body) : null,
        }).then(response => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error(response.statusText);
            }
        });
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
let http = new FastHttp();
// http.get(baseURL)
//     .then((value) => {
//         console.log("lay data la ", value);
//     }).catch((error) => {
//         console.log("lay data that bai vi ", error);
//     })

// http.post(baseURL, {name: "CuongTrinh", age: 18})
//     .then((value) => {
//         console.log("da them data la ", value);
//     }).catch((error) => {
//         console.log("them data that bai vi ", error);
//     })

// http.put(`${baseURL}/5`, {name: "Kuongvipprokt"})
//     .then((value) => {
//         console.log("sua thanh cong ", value);
//     }).catch((error) => {
//         console.log("sua ko duoc vi ", error);
//     })

