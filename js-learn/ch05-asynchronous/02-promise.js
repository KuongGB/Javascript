//02-promise.js
//Promise: Lời hứa rằng trong tương lai anh sẽ làm gì đó hoặc không làm gì đó
//ES6
//một Promise sẽ có 3 trạng thái
//pending: đang chờ kết quả
//fulfilled: đã có kết quả (thành công - giữ lời hứa) resolve("tui k phải jack")
//reject: đã có kết quả thất bại (thất hứa)  reject("tui là jack dưới 5 củ")

//cú pháp Promise
new Promise(function(resolve, reject){

})
//viết tắt thành
new Promise((resolve, reject)=>{

})



//lưu ý: Promise  are eager not  lazy: 
// Promise sẽ chạy code bên trong ngay khi khai báo

let a = 1;
//cách cùi
// let p3 = new Promise((resolve,reject)=>{
//     a++;
// })

//cách 1: dùng function reuturn promise
// function ahihi(){
//     let p3 = new Promise((resolve,reject)=>{
//         a++;
//     })
//     return p3;
// }
// ahihi().then()

//cách 2: dùng arrow
let p3 = () => new Promise((resolve,reject)=>{
    a++;
})
// p3().then() 
console.log(a);//2

//1 promise chỉ có thể rơi vào 1 trong 3 trạng thái(pending|fulfilled(resolve) |reject)
//ko thể đã fulfilled xong r rệct
//resolve và reject như return => khác vẫn chạy
p4 = new Promise((resolve, reject) => {
    resolve("hello")
    reject(new Error("Lỗi"))
    console.log("allooo");
})
p4.then(value => {
    console.log("giá trị nhân đc là " + value);
}).catch(error => {
    console.log("error la" + error);
})

//1* then/ .catch mà return thì nó sẽ trả về 1 Promise(onfulfilled)
p5 = new Promise((resolve, reject) => {
    reject("lỗi ròi")
})
//onReject => đc catch xử lý
p5.then(value => {}).catch(error => {
    console.log("Lỗi là " + error);
    return "ahihi"
}).then(value => {
    console.log("value: "+ value);
})
//return trong then và catch là 1 cái promise fulfilled
//sẵn sàng để then tiếp

//2* throw trongn then  hay catch sẽ đưa trạng thái onReject
p5.then(value => {}).catch(error => {
    console.log("Lỗi là " + error);
    throw "ahihi"
}).then(value => {
    console.log("value: "+ value);
}).catch(error => {
    console.log("lỗi vì dùng throw ne" +error);
})

//***một số cách cần tránh */
//l;ấy thông tin ng dùng
const getProfile = () => Promise.resolve({fname: "điệp đẹp trai", age: 20})
const getActicle = () => Promise.resolve(["sách văn học", "tiểu thuyết"])
const getActicle1 = () => Promise.resolve(["sách văn học", "tiểu thuyết"])
//lấy kêt quả
getProfile().then(profile => {
    console.log(profile);
    return getActicle();
}).then(acticleList => {
    console.log(acticleList);
    return getActicle()
}).then(acticleList1 => {
    console.log(acticleList1);
})