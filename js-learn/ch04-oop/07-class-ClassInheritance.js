//constructor function giúp ta tạo ra nhiều obj cùng loại
//nay phát triển class vs nhiều tính năg hơn

//tạo ra khuôn tên là User
class User{
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }
    //method show()
    show(){
        console.log(`FirstName cua tui: ${this.firstName}, LastName của tui: ${this.lastName}`);
    }
}

//tạo ra 1 user tên là điep
let diep = new User("Lê Điệp");
console.log(diep); diep.show();
//trong object diep có gì
//prop: firstName, lastName 
// [[Prototype]] == User.property == class User
//trong class User có gì? constructor, method show
//nên diep có thể dùng method show

//trong js class đc định nghĩa là 1 function đặc biệt
console.log(typeof User); //function
console.log(User === User.prototype.constructor);
console.log(User.prototype); //Class User (constructor|show)

//thông thường các dev thích dùng __proto__ | prototype để kế thừa
//Class là cách dùng khác của họ "syntactic sugar"
//cú pháp kẹo đường => việc thay đổi syntax cho dễ tiếp cận vs ng dùng mới
//vì xưa họ dùng constructor độc lập chứ k dùng class
//viết lại Student nhưng dùng constructor
function Student(fullname){
    [this.firstName, this.lastName] = fullname.split(" ");
    // this.show = function(){
    //     console.log(`FirstName cua tui: ${this.firstName}, LastName của tui: ${this.lastName}`);
    // };
}
Student.prototype.show = function(){
    console.log(`FirstName cua tui: ${this.firstName}, LastName của tui: ${this.lastName}`);
};
let diepStudent = new Student("Điệp Lê");
console.log(diepStudent);
//vậy khác gì giữa object đc tạo từ class và được toạ từ function constructor
//1. constructor tạo đc object mà k cần toán tử new
// let hung = User("Hùng Phạm");
let hung = Student("Hùng phạm");

//2.User và Student trong hiển thị
console.log(User);
console.log(Student);

//3. code bên trong Class luôn use Strict
//tức là ko có hoisting

//4. cách tạo class mà bạn vừa ms tạo là class declaration
//class Expression

Student = class ahihi {
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }
    //method show()
    show(){
        console.log(`FirstName cua tui: ${this.firstName}, LastName của tui: ${this.lastName}`);
    }
};

//ahihi là tên có thể dùng trong phạm vi body của Student

//** Compute Name []
class User5{
    firstName = "Nguyễn";
    ["show" + "Name"]() {
        console.log("hello");
    }
}
let hue = new User5();
hue.showName();

///Cảnh giác với this trong class
class Button {
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("Giá trị là " + this.value);
    }
}

let btn = new Button("VALUE");
btn.click();

//điều gì xảy ra nếu dùng click trong callback
// setTimeout(btn.click, 2000); //Giá trị là undefined
setTimeout(() => {
    btn.click();
},1000);

//vd2: bind
//đem giá trị vào hàm và return mới dùng giá trị đó
class Button1 {
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this);
    }
    click(){
        console.log("Giá trị là " + this.value);
    }
}
btn = new Button1("Ahuhu");
setTimeout(btn.click,1000);

//vd3:
class Button2 {
    constructor(value){
        this.value = value;
    }
    click = () => {
        console.log("Giá trị là " + this.value);
    }
}
btn = new Button2("hello");
setTimeout(btn.click, 1000);

//Class Inheritance : kế thừa thông qua class
//ngày xưa, khi loài lập trình viên vừa biết js thì ngài js chỉ cho học constructor để tạo object
//họ kế thừa các constructor bằng prototype

//về sau khi có đông thần dân, js cho ra class
//"sugar syntax" cú pháp kẹo đường
//để việc kế thừa trở nên dễ hơn thông qua keyword "extends"

//
class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    //method
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still`);
    }
}
let ani = new Animal("My Animal");
//ani
// name: "My Animal"
// speed: 0
// [[Prototype]] : Animal.prototype => Class Animal
class Rabbit extends Animal{
    constructor(name){
        super(name); //super này nghĩa là new Animal
    }
    hide(){
        alert(this.name + " hides!!!");
    }
}
let rabbitYellow = new Rabbit("Yellow Rabbit");
// rabbitYellow.hide();
// rabbitYellow.run(5);
//ani.hide(); //ko dc nha

//trong rabbitYellow có gì
//  name: "Yellow Rabbit"
//  speed: 5
//  [[Prototype]]: Rabbit.prototype => Class Rabbit
//      Rabbit.[[Prototype]]: Animal.prototype => Class Animal
//      Animal.[[Prototype]]: Object.prototype => Class Object
//      Object.[[Prototype]]: null

class Rabbit1 extends Animal{
    //stop
    stop(){
        setTimeout(() => {
            super.stop();
        },1000);
    }
}

//Trong animal có method stop
//trong Rabbit cũng có method stop
//hỏi rằng trong rabbit có mấy method stop
//khi 1 object đc tạo ra Rabbit thì nó sẽ dùng method stop của ai?
// let rb1 = new Rabbit1("rb ahihi");
// rb1.stop();


//class field
class Animal2{
    name = "isAnimal"; //class field
    constructor(){
        alert(this.name);
    }
}

class Rabbit2 extends Animal2{
    name = "isRabbit"; //class field
}
let ani1 = new Animal2(); //truy cập vào thuộc tính name của cha
let rb2 = new Rabbit2(); //truy cập vào thuộc tính name của cha
//class field nó ko kế thừa, k vượt mặt , k hề có override
// (nếu là class field thì trong 1 object  k hề có 2 thuộc tính trùng tên)
// classfield nó ghi dè overwrite| cái giá trị "isRabbit" đã đè lên "isAnimal"
