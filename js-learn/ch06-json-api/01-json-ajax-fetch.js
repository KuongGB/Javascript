// // 01-Json-Ajax-Fetch.js
// //JSON: js object notation
// //      mỗi chuỗi được viết dưới dạng js object
// //      dùng để lưu trữ và trao đỗi dữ liệu
// //          thường: string, number, boolean, array, object, null
// //      dễ dàng sử dụng với tất cả ngôn ngữ lập trình
// //      mình thao tác Json thông qua JSON.parse  | .stringify()

// //------
// //chuyển đổi json <= obj
// const obj1 = {
//     name: "Cường",
//     age: 23,
//     status: "hay dan"
// }

// let myJson = JSON.stringify(obj1);
// console.log(obj1);
// console.log(myJson);
// let str = '{"name": "Điệp", "age": 32, "status":"hihi"}'
// let newObj = JSON.parse(str);
// console.log(str);

// //cú pháp json
// //  -với object thì data là cặp name:value
// //  -data được ngăn cách bởi dấu phẩy(,)
// //  -ngoặc nhọn mô tả object
// //  -ngoặc vuông mô tả mảng
// //  -Json dùng dấu nháy "" để phân với dấu nháy '' ở ngoài cùng string
// //  -trường name phải bọc trong nháy kép ""
// //value của json phải là 1 trong những kiểu dữ liệu dưới đây
// //  -string
// //  -number
// //  -object
// //  -array
// //  -boolean
// //  -null

// //Array và JSON
// let arr = ["cam","ổi","chuối"] ; //'["cam","ổi","chuối"]'
// let num = 1; //'1'
// let str1 = "Điệp đẹp trai"
// let bool = true; // 'true'
// const obj2 = {
//     name: "Điệp đẹp trai",
//     age: 23,
//     status: "Hay giận dỗi",
//     sayHi: function(){
//         console.log("xin chào mọi người");
//     }
// }
// //=> '{"name":"Điệp đẹp trai","age": 23,"status":"Hay giận dỗi"}'


// //AJAX: Asynchronous javaScript and XML
// //      không phải ngôn ngữ lập trình (rất nhiều người mới bị lậm)
// //      AJAX chỉ là 1 sự kết hợp của 
//             // XMLHttpRequest object có sẳn trên trình duyệt
//             //          (dùng để gữi và nhận data từ web server)
// //          // Js và HTML DOM (để sử dụng hoặc hiển thị data)

// /*
//         cái tên ajax bị lầm là ứng dụng dùng ajax sẽ sử dụng XML(một kiểu data như json nhưng
//         để gữi và nhận dữ liệu                                   (phức tạp hơn)
//         nhưng trên thực tế chúng ta dùng text và json để trao đổi dữ liệu
// */

// //      AJAX giúp chúng ta đọc dữ liệu từ server trả vể
// //                         gữi dữ liệu lên server ở chế độ ngầm
// //                         cập nhật trang web mà không cần reload lại trang
// //                         là nền tảng phát triển của React, Angular, Vue



// //-----
// //cách AJAX hoạt động
// //xem hình ajax.gif

// //
// //XMLHttpRequest(XHR): là constructor function: 
// //                dùng để giao tiếp với server
// //                XHR là 1 webAPIs nên chỉ có trên môi trường trình duyệt
// //                không xuất hiện ở Node.js

// //tạo 1 XHR object
// let xhr = new XMLHttpRequest()
// // xhr sẽ có method và property

// //.onreadystatechange: nó sẽ chạy gì đó mỗi lần readystate thay đổi
// //readystate: là trạng thái khi kết nối với server
// //0: request chưa tạo
// //1: kết nối với server đã được thiết lập
// //2: request được server tiếp nhận
// //3: đang xử lý request
// //4: request đã kết thúc và response đã sẵn sàng để dùng
// //response: 1 gói hàng của server trả về
// xhr.onreadystatechange = function(){
//     console.log("Ready state: "+ this.readyState);
// }
// // xhr.open('GET','https://6335aa43ea0de5318a188bd3.mockapi.io/users', true)

// // let data = xhr.send();

// //thêm 1 user lên server
// xhr.open('POST','https://6335aa43ea0de5318a188bd3.mockapi.io/users', true)
// //xác thực mình là ai
// xhr.setRequestHeader('Content-type', 'application/json');
// const body = {name: "Cường", age: 20}
// xhr.send(JSON.stringify(body));

//---------------
//dùng XMLHttpRequest để xử lý AJAX được coi là cách cổ xưa nhất và rườm rà nhất
//ngày nay chúng ta có rất nhiều lựa chọn mạnh mẽ để xử lý AJAX như:
//  JQUERY: cung cấp hàm gọi Ajax tiện lợi như load,ajax,get,getJSON
//  FetchAPI: Những trình duyệt ngày nay cũng có: FetchAPI với nhiều tính năng nâng cao
//              và cú pháp dể sử dụng hơn XHR
//  Phổ biến nhất là AXIOS: thư viện chuyên dụng cho việc xử lý Ajax cũng như gọi API
//      cung cấp nhiều tính năng hay,dùng cho cả môi trường trình duyệt và Node.js
//                                  (nếu trình duyệt nó sẽ dựa trên XHR| node sẽ là HTTP Interface)

//đối với mình, thì mình k xài jquery :)) nói đúng hơn là nó cùi chết mẹ
//nên mình sẽ dùng fetchAPI và Axios

//--------------------


//FetchAPI: Fetch là 1 api đơn giản cung cấp cho ta khả năng nhận và gửi request đén server
//XHR nó đc dùng vs function => nên nếu xử lý bất đồng bộ phải dùng callback

//Fetch bản thân nó đc xem là 1 promise => nên xử lý bất đồng bộ dùng .then .catch
//      promise có thể kết hợp async await

//demo get data từ server bằng fetch 
//server ko bao giờ trả ra lỗi(reject) luôn luôn là resolve(response)
//response là 1 gói hàng của server
//th1: server ko cho data => response sẽ có trạng thái là not ok | data : null
//th2: server cho data    => response sẽ có trạng thái là  ok    | data : sẽ có data

// fetch("https://6335aa43ea0de5318a188bd3.mockapi.io/users")
//     .then(response => {
//         if(response.ok){
//             return response.json() //
//         }else{
//             throw new Error(response.statusText)
//         }
//     }).then(value => {
//         console.log("lấy data thành công: ",value);
//     }).catch(error => {
//         console.log("ko lấy data thành công vì", error);
//     })

//demo: thêm 1 user vào users trên server bằng fetch: method POST 
fetch("https://6335aa43ea0de5318a188bd3.mockapi.io/users", {
    method: "POST",
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({name: "Điệp nè", age: 2003})
}).then(response => {
            if(response.ok){
                return response.json() //Promise.resolve(response.json())
            }else{
                throw new Error(response.statusText)
            }
        }).then(value => {
            console.log("lấy data thành công: ",value);
        }).catch(error => {
            console.log("ko lấy data thành công vì", error);
        })
