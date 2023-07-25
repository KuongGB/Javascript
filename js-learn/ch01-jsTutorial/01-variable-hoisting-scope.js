"Use strict"
console.log("Bài 1: Khai báo biến, hoisting, scope")


//var : xuất hiện từ thuở sơ khai của js
//reassigning: gán lại giá trị
//khai báo và gán biến
var name1 = 'Điệp';
console.log(name1);
name1 = "ahihi mute";
console.log(name1);

//khai báo biến mà ko gán
var age;
console.log(age);  //undefined
age = 10;
console.log(age);

//Quy tắc đọc tên cho biến
//ko đc bắt đầu bằng số -> phải bằng chữ cái
//áp dụng cammelCase, underscore, pascal case(UpperCammelCase)
//được dùng _ và $ ở đâu

//Hoisting với Var
console.log(msg);
var msg = "hello";

//normalMode/ Use strict mode
message = "thông báo";  //tự hiểu là tạo biến message
//NormalMode thì dòng 29 rất bth, máy tự tạo biến message
//Use strict mode thì dòng chữ code 34 đc tính là sai

//let và const
//let và const để thay thế biến var
//let giống var(let thì ko hoistring)
//const : hằng số
//const a = 10; //ko đc đổi
//const với primirive(kiểu nguyên thuỷ)

//const với object(đối tượng)
const myGirl = {name: "Tiến", height: 160};
console.log(myGirl.name); //tiến
//myGirl.name = "Tiến lùn"; //thay đổi 1 thuộc tính thì vẫn chạy bth
//myGirl = {name: "Tiến lùn", height: 160};// bậy nha, hết const

//array cũng là object
const array1 = [1,2,3,4,5];
array1.push(6);
//array1 = [1,2,3,4,5,6]; //sai nha

//scope
//Global scope: toàn cục
//Function Scope: trong hàm
//Block scope: cục bộ
//var: out scope
if(true){
    var toilet = "thơm";
}
console.log(toilet);

//let/const ko có hoisting | var : có hoisting (use strict)
//       có blockScope     | var outscope



