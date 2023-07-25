console.log("Bài 6: Hàm -Function")
//Function: Function Declaration | Function expression

//1. cách khai báo hàm (tạo hàm)
//Function Declaration: hoisting
handle1(); //nhờ vào hoisting nên chạy bth
//dùng trc khai báo sau
function handle1(){
    console.log("Hàm này đc tạo bằng Function declaration")
}
handle1()

//2. Biểu thức hàm - Function Expression (ko hoisting)
//dù là dùng var nhưng vẫn ko hoisting
//handle2() //lỗi ngay
var handle2 = function(){
    console.log("Hàm này đc tạo bằng function expession")
};
handle2();

//IIFE (immediately invokable function expression)
//vừa mới tạo ra là đc dùng luôn
(function(){
    let a = 1
    let b = 2
    console.log(a + b)
})();

//IIFE mạnh khi dùng với async await | gói code lại cho gọn
//nhiều khi mình k bik đặt tên gì | tạo ra dùng ròi thôi ko dùng lại
//nếu thiếu ; ở đầu, vô tình ở trên có 1 function thì lỗi

//Anonymour Function : hàm ko có tên
//callback: gọi lại sau
//          hàm nhận vào 1 hàm làm đối số

//function1(function2()) callback  //function2() -> callback function
//setTimeout(functionE(), milisecond)  -- callback
//           functionE() là callback function
// var handle3 = function(){
//     console.log("Lips")
// };
// setTimeout(handle3, 3000); // callback
// setTimeout(function(){
//     console.log("Feeling")
// }, 3000);

//====Arrow Function(Hàm rút gọn của Function Expression | anonymous function)

//ko phụ thuộc vào this và k thay thế đc function declaration
//this: trong js chỉ ng gọi nó
//fd
function handle4(){
    console.log(this)
}
//fe
const handle5 = function(){
    console.log(this)
}
//fa 
const handle6 = () => {
    console.log(this)
}
//fd giam this
handle4(); // undefined || nếu châm chước thì windowObject
//fe giam this
handle5(); // undefined || nếu châm chước thì windowObject
//fa
handle6(); //window

//vd2:
var person1 = {
    fullName: "Điệp đẹp trai",
    getNameByFunctExpr: function(){
        console.log(this.fullName)
    },
    getNameByFunctArrow: () => {
        console.log(this.fullName)
    },
};
person1.getNameByFunctExpr(); //'Điệp đẹp trai'
person1.getNameByFunctArrow(); //undefined

//=> Arraw function thì k nên xài this

//phân biệt tham số (parameter) và đối số (argument)
function handle7(a, b){ //a , b là parameter: tham số: đi tham khảo số khác
    return a + b;
}
//handle7(2, 6);   //2,6 là đối số, để ngta tham khảo

//tham số mặc định: default parameter
function handle8(x, y=10){
    console.log(x + " " + y);
}
handle8(2,7);
handle8(2);

//tham số còn lại | tham số đợi (rest parameter)
//vd1:
function handle9(a,b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
handle9(1,5);
handle9(1,5,6,4,3);
//ứng dụng
//viết hàm nhận vào nhiều số, tính tổng các số
function sumAll(...numList){
    let result = 0;
    for (const x of numList) {
        result += x;
    }
    return result;
}

let b = sumAll(1,43,3,2,5);
console.log(b);

//... nằm trong parameter(rest parameter)
//... nằm lộ thiên spread operator (destructuring: kỹ thuật phân rã)


