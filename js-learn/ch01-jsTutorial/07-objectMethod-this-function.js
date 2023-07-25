console.log("07-objectMethod-this-function")
//
//object: đối tượng
//   tất cả những gì đếm đc sờ đc đều là đối tượng
//   các đối tượng có thể đc miêu tả bằng thuộc tính(properties)
//      các đối tượng có hành động function
//          (hàm ở ngoài gọi kà function, nếu hàm đc viết trong object thì đc là method)

let promotionBoy1 = {
    nickName: "Lê Mười Điệp",//properties 
    age: 24,//.................properties
    //fd
    sayHi(){
        console.log("Ahihi..Vao lua di anh");
    },
    //fe
    sayHi1: function(){
        console.log("Vao chon mon di chi oi")
    },
    //fa
    sayHi2: () => {
        console.log("Chọn món di ac")
    },
};
//cách toạ method bằng fe|fd về mặt lý thuyết có sự khác nhau trên cơ sở kế thừa | nhưng
//nhỏ ko đáng kể
//ngta thường chọn viết method bằng fd để đạt đc hiệu quả rút gọn
//dân chơi object chuộng fd
//dân chơi function chuộng fe|fa

//ta có thể tạo thêm prop or method sau khi đã tạo
console.log(promotionBoy1.money);
promotionBoy1.money = 10000;
promotionBoy1.chuikhach = function(){
    console.log("Mua dum di ba");
};

//Nâng cao 1 tý
//THIS trong method
let promotionBoy2 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    sayHi(){
        console.log("Nick name la: "+this.nickName);
    },
    //fe
    sayHi1: function(){
        console.log("Nick name la: " + this.nickName);
    },
    //fa
    sayHi2: () => {
        console.log("Nick name la: " + this.nickName);
    },
};
//this chỉ có giá trị khi runtime | khi mà hàm đc gọi thì this mới có giá trị
promotionBoy2.sayHi(); //Lê Mười Điệp
//showName đc ai gọi | fd
// showName: fd => giam this => ép this phải ng gọi
//    this => promotionBoy2
promotionBoy2.sayHi2();
//showName2 ai gọi promotionBoy2 : fa
// bung thả this => this là global
// =>undefined
//viết method ko nên dùng fa

///////Nâng thêm 1 tý
//tại sao cần this
let promotionBoy3 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    showName(){
        console.log("Nick name la: "+this.nickName);
    },
};
promotionBoy3.showName();

let promotionBoy4 = promotionBoy3; //2 chàng trỏ 1 làng
promotionBoy3 = null;
// promotionBoy4.showName(); //
//=> this ko bị rằng buộc giá trị, ai gọi tui tui là ng đó

/////Nâng lên xí
//this trong function trong method (object > method > function > this)
let promotionBoy5 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    showName(){
        let arrow = () => {
            console.log("Nickname: " + this.nickName);
        };
        arrow();
    },
    //fd
    showName1(){
        let expression = function () {
            console.log("Nickname: " + this.nickName);
        };
        expression();
    },
};
promotionBoy5.showName();
//showName ai gọi promotionBoy5 : fd
//      arrow : ko ai gọi : fa => ko giam this
//          fa thả this, nhưng sua đó this bị chặn showName
//              =>showName là fd => thả this => this phải là ng gọi showName
//                  => this là promotionBoy5

promotionBoy5.showName1();
//showName1: promotionBoy5 : fd => giam this
//   expression: ko có ai gọi : fe => giam this
//      (use strict)        |       normal
//      undefined           |    global(window)
// undefined.nickName>lỗi   |  window.nickName>undefined

////////////Nâng lên tí
//this trong ham callback

let promotionBoy6 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    showName(){
        setTimeout(function() {
            console.log("nickName= " + this.nickName);
        }, 1000);
    },
};
//promotionBoy6.showName();
//this là gì?
//showName: promotionBoy6 : fd => giam this
//hàm vô danh: ko ai gọi:fd => giam this
//      (use strict)        |       normal
//      undefined           |    global(window)
// undefined.nickName>lỗi   |  window.nickName>undefined

//
let promotionBoy7 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    showName(){
        setTimeout(() => {
            console.log("nickName la: " + this.nickName);
        }, 1000);
    },
};
////////promotionBoy7.showName();
//showName : promotionBoy7 : fd => giam this
//   hàm vô danh : ko ai gọi: fa => ko giam this
//      this ra ngoài gặp ai showName
//          showName: fd => giam this => ép this là promortion7

//Nâng cao: HOF
//Higher Order Function:
//  1.callback : hàm nhận vào 1 hàm lm paramenter
//  2.closure
//  3.currying

///viết hàm nhận vào 2 số trả ra tổng 2 số
let sumDemo = (a,b) => {
    return a + b;
};
//HOF
sumDemo = (a) => {
    return (b) => {
        return a + b;
    };
};

sumDemo = (a) => (b) => a+b


//console.log(sumDemo(2,5)); //7
console.log(sumDemo(2)(5));
/*
    (b) => {
        return a + b;
    }; 
*/

//HOF: có 3 khái niệm
//1. callback: hàm nhận vào 1 hàm lm paramenter
const array1 = [1,2,3,4,5];
array1.forEach((item) => {
    console.log(item);
}); /// 1 2 3 4 5

//2.Closure
//  2.1 lexical scoping: hàm con dùng biến của hàm cha
//  2.2 closure: 1 function return 1 function
//  ứng dụng: tạo ra 1 hàm chuyên render id(máy tạo key tự tăng)
const initId = () => {
    let newID = 0;
    return () => ++newID; 
};
console.log(initId()); //() => ++newId; | kém theo newId = 0
console.log(initId()()); //1
console.log(initId()());////cách sài sai
//trong qua trình gọi initId()()
//thì em đã gọi initId() => lại tạo newId = 0

//xài đúng nè
let demoClo = initId(); //()=> ++newId;
console.log(demoClo());//1
console.log(demoClo());//2
console.log(demoClo());//3
console.log(demoClo());//4

//3. currying: kỹ thuật chuyển đổi từ 1 function nhận vào nhiều paramenter
//      thành những function liên tiếp có tham số

//viết 1 hàm xử lý 3 bài toán
//  1 hàm có thể sử dụng để giải quyết 3 bài toán
//          tìm  0 - 10 là số lẻ
//          tìm 0 - 20  là số chẵn
//          tìm  0 - 30 là số chia 3 dư 2
//=> callback | callback + currying
//làm 1 hàm nhận vào 1 số number, và 1 hàm check theo yêu cầu
function handle3(number, func){
    let result = [];
    for(let i = 0; i <= number; i++){
        if(func(i)) result.push(i);
    }
    return result;
}
console.log(handle3(10, (number)=> number % 2 == 1));
console.log(handle3(10, (number)=> number % 2 == 0));
console.log(handle3(10, (number)=> number % 3 == 2));

//currying
const handle4 = (number) => (func) => {
    let result = [];
    for(let i = 0; i <= number; i++){
        if(func(i)) result.push(i);
    }
    return result;
};
console.log(handle4(10)((number) => number % 2 == 1));
//xét về mặt ứng dụng trong code thì currying ko có tác dụng lắm 
//chỉ lm code phức tạp hơn
//react + angular thì nó mạnh
//---------------------
//Call apply bind
const people = {
    print(age, location){
        console.log(this.fullname + " " + age + " " + location);
    }
};
people.print(10, "TP HCM")  // undefinde 10 TP HCM
//this đây là people

//ta có thẻ bẻ cong đường dẫn của this Call Apply Bind
const diep = {fullname: "lê mười điệp"};
//1. Call(object, ...paramenter cũ)
people.print.call(diep, 10, "TP.HCM");
//2. Apply(object, []..paramenter cũ)
people.print.apply(diep, [10, "TP.HCM"]);
//3.Bind (object, ...paramenter cũ)() //closure
//3.Bind (object)( ...paramenter cũ) //currying
people.print.bind(diep, 10, "TP.HCM")()
people.print.bind(diep)(10, "TP.HCM");

let promotionBoy8 = {
    nickName: "Lê Mười Điệp",
    age: 24,
    //fd
    showName(){
        setTimeout(function() {
            console.log("nickName= " + this.nickName);
        }.bind(this), 1000);
    },
};

//datetime
//thời gian trong js là object | dựa voà milisecond
//đc tính từ 1/1/1970 theo chuẩn utc
//có 4 cách khởi tạo
let a = new Date();
a = new Date(1660745299952);
a = new Date("2022-8-17");//ko phải trình duyệt nào cũng hỗ trợ dateString
a = new Date(2022,7,17,21,10,32,100);
//y/m-1/d/h/m/s/ms
console.log(a);

//y/m-1/d/h/m/s/ms
// getDate()        : lấy ngày trong tháng //16
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được
console.log(a.toISOString());




























