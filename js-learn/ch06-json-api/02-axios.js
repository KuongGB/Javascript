//Axios: 1 HTTP client hoaajt động trong NodeJs, trình duyệt
//       1 thư viện giúp tương tác API như get | post | put | delete
// cần cài đặt: nodejs, browser, cdn
// axios({
//     method: "get",
//     url: "https://6335aa43ea0de5318a188bd3.mockapi.io/users",
// }).then(response => {
//     if(response.status == 200 || response.status == 201){
//         return response.data
//     }else{
//         throw new Error(response.statusText)
//     }
// }).then(value => {
//     console.log("Lấy thành công: ", value);
// }).catch(error => {
//     console.log("Lấy dữ liệu thất bại vì ", error);
// })

//demo: thêm 1 user vào users trên server bằng axios
// axios.post("https://6335aa43ea0de5318a188bd3.mockapi.io/users",{
//         name: "Cuong de quy",
//         age: 21,
//     }
// ).then(response => {
//     if(response.status == 200 || response.status == 201){
//         return response.data
//     }else{
//         throw new Error(response.statusText)
//     }
// }).then(value => {
//     console.log("Thêm thành công: ", value);
// }).catch(error => {
//     console.log("Thêm dữ liệu thất bại vì ", error);
// })

//instance: giúp code axios ko lặp đi lặp lại nhiều lần
// const instance = axios.create({
//     baseURL: 'https://6335aa43ea0de5318a188bd3.mockapi.io',
//     timeout: 10000,
//     headers: {'Content-Type': 'application/json'}
//   });

//   instance.post("users", {
//     name: "Cuong 1 tay", 
//     age: 21
//     }).then(response => {
//         console.log(response);
//     })

//demo dựng cấu hình axios thực tế
//class + instance + interceptor(cấu hình request và response)
class Http{
    constructor(){
        this.instance = axios.create({
                baseURL: 'https://6335aa43ea0de5318a188bd3.mockapi.io',
                timeout: 15000,
                headers: {'Content-Type': 'application/json'}

        });

        //dùng interceptors cấu hình response
        this.instance.interceptors.response.use(response => {
            return {
                data: response.data,
                status: response.status
            }
        }, response => {
            return Promise.reject({
                data: response.data,
                status: response.status  
            })
        })

        //cấu hình thằng request
        //khi ta đăng nhập ta sẽ có 1 accessToken
        //cấu hình lại request
        //   nếu có accessToken thì gữi kèm request, k thì thôi
        this.instance.interceptors.request.use(request => {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken){
                request.headers.authorization = accessToken
            }
            return request
        }, request => {
            return Promise.reject(request.response)
        })
    }
}
let http = new Http().instance

http.post("users", {
    name: "diep am thanh",
    age: 21
}).then(response => {
    console.log(response);
})
