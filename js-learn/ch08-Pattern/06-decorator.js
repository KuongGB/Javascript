//Decorator Pattern:  dùng để mở rộng chức năng của obj
//                  mà ko dụng tới class và constructor

//thay đổi tính năng của obj mà k thay đỏi code dưới

//vd
function Car(name){
    this.name = name;
    this.color = "white";
}
//tạo object từ constructor Car
let tesla = new Car("Tesla Model 3");
// Car.prototype.sayHi = function(){
//     console.log("Ahihi tôi là xe " + this.name);
// };

// tesla.__proto__.sayHi = function(){
//     console.log("Ahihi tôi là xe " + this.name);
// };

tesla.sayHi = function(){
    console.log("Ahihi tôi là xe " + this.name);
};
tesla.sayHi();

//vd:
class Car1{
    constructor(){
        this.cost = function(){
            return 20000;
        };
    }
}
//hãng bán xe, bán chiếc xe giá 20000
//và có 2 gói độ
//   gói 1 là thêm AC : 500
//   gói 2 là thêm AT : 2000
function carWithAC(car){
    car.hasAC = true;
    const prevCost = car.cost()
    car.cost = function(){
        return prevCost + 500;
    };
}

function carWithAT(car){
    car.hasAT = true;
    const prevCost = car.cost()
    car.cost = function(){
        return prevCost + 2000;
    };
}
//mua xe time
let harley48 = new Car1();
carWithAC(harley48);
carWithAT(harley48);
console.log(harley48.cost());
