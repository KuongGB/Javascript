//trong js ngta thích dùng func hơn là class
//nếu muốn tạo 1 object bên java em phải thông qua Class
//bên js :
//ta có constructor độc lập
//tức là 1 function dùng để tạo object (ko cần class bọc)

function Car(name, price){
    this.name = name;
    this.price = price;
}
let factory = {
    date: "2021",
};

let audi = new Car("Audi", "2 tỷ");
//nhờ vào constructor (cái phểu) tạo ra 1 chiếc xe 2 tỷ
//trong constructoe Car có gì?
// // nó có:
//     this.name = name;
//     this.price = price;
//     prototypr

//trong prototype có gì?
console.log(audi);
//đối với các object được tạo bằng constructoe hay class
// ta có thể kế thừa bằng .prototype của constructor
console.log(audi.date);
Car.prototype = factory;
let toyota = new Car("toyota", "200");
console.log(toyota.date);

//
//F.prototype mặc định , thuộc tính constructor
// mỗi function đều có thuộc tính prototype ngay cả khi chưa gán hoặc cung cấp 
//      prototype mặc định là 1 object chứa thuộc tính là constructor trỏ ngược lại contructor function đó

function Animal(name){
    this.name = name
}
//ngta gọi constructoe hay class đều là animal

console.log(Animal.prototype) //Animal{}
console.log(Animal.prototype.constructor === Animal) //true
//nên nếu như có 1 object đc tạo ra từ constructor function này thì nó sẽ có constructor
//                                                                  của prototype
let dog = new Animal();
console.log(dog);
console.log(dog.constructor)//*Animal{}
console.log(dog.constructor === Animal)//*true

//vậy tức là mỗi 1 object đều có constructor 
//vậy ta có thể tạo ra 1 object tương tự object dog từ constructor mà dog có
let cat = new dog.constructor('kyky');
console.log(cat.constructor)//*Animal
console.log(cat)//*Animal {name: 'kyky'}


//NHƯNG: js không đảm bảo đúng constructor mà ta cần
//nếu như ta thay thế prototype thì nó k còn là constructor nữa
// Animal.prototype = {
//     jump: true
// }