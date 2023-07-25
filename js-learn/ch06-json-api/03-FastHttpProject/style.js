//xây dựng 1 ứng dụng getAPI

//trước tiên mình tìm hiểu về RESTful API
// API(Application Programming interface): là tập hợp các quy tắc cơ chế mà theo đó
//      một ứng dụng(thành phần) tương tác với với ứng dụng(thành phần) khác
//      trả về những dữ liệu mình cần dưới dạng phổ biến như json/XML

// REST :một dạng chuyển đổi cấu trúc dữ liệu,một kiểu kiến trúc để viết API 
//      sử dụng phương thức HTTP đơn giản để tạo giao tiếp giữa các máy, thay vì dùng
//      1 url để xử lý 1 số thông tin người dùng thì "REST gữi 1 yêu cầu HTTP như GET/POST/DELETE
//      đến 1 url để xử lý dữ liệu"

// RESTful API: hoạt động dựa trên giao thức HTTP,các hoạt động CRUD sẽ dùng phương thức http riêng
//      -GET    (SELECT):trả về (danh sách)resource 
//      -POST   (CREATE):tạo mới một resource
//      -PUT    (UPDATE):cập nhật thông tin cho resource
//      -DELETE (DELETE):xóa một resource

// các lập trình viên hiện nay đều xây dựng RESTful API theo các method CRUD
//--CREATE      READ        UPDATE      DELETE

//XHR(thay cho Fetch, Axios) + Callback(thay cho Promise) + constructor function(class)

//chuẩn bị link(api)
const baseURL = "https://6335aa43ea0de5318a188bd3.mockapi.io/users"

//tạo FastHttp chuyên quản lý các tác vụ giao tiếp với server
function FastHttp(){
    this.xhr = new XMLHttpRequest()
}

//tạo hàm get nhận vào url và callback
//get(url, callback)

// FastHttp.prototype.get = function(url, callback){
//     this.xhr.onreadystatechange = function(){
//         if(this.readyState == 4){
//             if([200,201].includes(this.status)){
//                 callback(null, JSON.parse(this.responseText))
//             }else{
//                 callback(this.responseText, null)
//             }
//         }
        
//     };
//     this.xhr.open("GET", url, true);
//     this.xhr.send();
// };
// test code
// const http =  new FastHttp()
// http.get(baseURL, (error, data) => {
//     if(error){
//         console.log("Loi roi: ", error);
//     }else{
//         console.log("Data: ", data);
//     }
// })

// thêm mới 1 đối tượng

// FastHttp.prototype.post = function(url, body, callback){
//     this.xhr.onreadystatechange = function(){
//         if(this.readyState == 4){
//             if([200,201].includes(this.status)){
//                 callback(null, JSON.parse(this.responseText))
//             }else{
//                 callback(this.responseText, null)
//             }
//         }
        
//     };
//     this.xhr.open("POST", url, true);
//     this.xhr.setRequestHeader("Content-Type","application/json");
//     this.xhr.send(JSON.stringify(body));
// };

//test chức năng post
// let http = new FastHttp();
// http.post(baseURL, {name: "KuongNek", age: 19}, (error, value) => {
//     if(error){
//         console.log("Ko them duoc vi "+ error);
//     }else{
//         console.log("Da them duoc doi tuong la: ", value);
//     }
// });

//độ lại cách viết để ko lặp lại code
//lm 1 hàm tên send
FastHttp.prototype.send = function(method, url, body, callback){
    this.xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if([200,201].includes(this.status)){
                callback(null,JSON.parse(this.responseText));
            }else{
                callback(this.responseText, null);
            }
        }
    };
    this.xhr.open(method, url, true);
    this.xhr.setRequestHeader("Content-Type","application/json");
    this.xhr.send(body ? JSON.stringify(body) : null);
};
//xây dựng hàm get dựa trên hàm send
//get
//send("GET", baseURL,null, callback)
FastHttp.prototype.get = function(url, callback){
    this.send("GET",url,null,callback);
};
//post
//
FastHttp.prototype.post = function(url,body,callback){
    this.send("POST",url,body,callback);
};

//put
FastHttp.prototype.put = function(url,body,callback){
    this.send("PUT",url,body,callback);
};
//test hàm put
let html = new FastHttp();
// html.put(`${baseURL}/2`, {name : "than"}, (error, value) => {
//     if(error){
//         console.log("Loi vi " ,error);
//     }else {
//         console.log("da update la " ,value);
//     }
// })


//delete
FastHttp.prototype.delete = function(url,body,callback){
    this.send("DELETE",url,null,callback);
};

// html.delete(`${baseURL}/1`, {name : "than"}, (error, value) => {
//     if(error){
//         console.log("Loi vi " ,error);
//     }else {
//         console.log("da xoá la " ,value);
//     }
// })