console.log('Bài 2: dataType/ tham trị/ tham chiếu')
// I Datatype 
// I-primitive datatupe: kiểu dữ liệu nguyên thuỷ
//    number: 10, 12.4, 
//    string: 'anh điệp'
//    boolean: true(1)/false(0)
//    null: rỗng, nhưng biết kiểu dữ liệu
//    undefined: rỗng, nhưng ko bik kiểu

// giống nhau về giá trị, nhưng nhau về kiểu
console.log(typeof null); //kiểu của null là object nhưng nó thuộc primitive
console.log(typeof undefined); //kiểu của undefined

//==: so sánh châm chước| so sánh về giá trị
//===: so sánh về giá trị và kiểu
console.log(null == undefined); // true
console.log(null === undefined); //false
console.log(2 == '2'); //true
console.log(2 === '2'); //false

//Undefined: rỗng, ko biết giá trị, ko biết kiểu
// tạo biến mà ko gán giá trị
// thuộc tính chưa khởi tạo trong object
const khoa = {name: "Khoa", money: 10000};
console.log(khoa.girlFriend); //undefined

//truyền thiếu parameter
function handle1(a, b){
    return b;
}
let result = handle1(2);
console.log(result);//undefined

//Null: rỗng ko biết giá trị mà biết kiểu
let str1 = " "; //rỗng (chuỗi rỗng)
str1 = null; //rỗng(object) nhưng được xếp vào primitive
const myBike = null; //undefined
//console.log(myBike.color);
//-----------------------
//I.2 Object datatype: là nhưng kiểu khác primitive
//Plain Object : đối tưởng phẳng
var student = {
    name: "Điệp",
    point: 10,
}
//array
var array1 = ['hoa', 'cúc', 'huệ', 1999];
//regular expression:
var regex = /ab+c/
//Function typeof là function nhưng thuộc object
console.log(typeof handle1); //function nhưng thuộc object
console.log(10 / "D"); //NaN: not a number
console.log(typeof NaN); //number

//Tất cả các cách khai báo với kiểu dữ liệu nguyên thuỷ đều là constructor
//Wrapper Class: Class Trai Bao
var str = "ahihi";
var str2 = new String("ahihi"); //Wrapper Class
console.log(str);
console.log(str2);
console.log(str === str2);//false primitive | object(box)
console.log(str === str2.valueOf()); //true
//valueOf() lấy cái core bên trong hộp
console.log(str == str2); //true auto-unboxing

//ép kiểu bằng wrapper constructor
//số -> chuỗi
var year = String(1999);
console.log(year);
year = Number("1999");
console.log(year);

//bàn riêng về boolean
var isFind = Boolean(1999); //số
console.log(isFind); //true
//
isFind = Boolean(0); // 0| -0 
console.log(isFind); //false
//
isFind = Boolean("0");//chuỗi ký tự 0
console.log(isFind); //true 
//
isFind = Boolean(""); // chuỗi rỗng
console.log(isFind); //false
//
isFind = Boolean(null); //null
console.log(isFind); //false
//
isFind = Boolean({}); //object rỗng
console.log(isFind); //true 
//
isFind = Boolean([]); //mảng
console.log(isFind); //true 
//
isFind = Boolean(false);
console.log(isFind); //false
//Falsy: trong js cái gì rỗng là false
//       null, undefined, 0, -0, "", false, NaN
//Truthly: ngược lại cứ có giá trị là true
//         chuỗi khác rỗng, số khác 0, object đều là true

//1.Pass by value: truyền tham trị
let a = 1;
let b = a;
b = 2
//a = 1 | b = 2
//vd2.
function updatePoint(pointCurrent){
    pointCurrent = 10;
}
var myP = 4;
updatePoint(myP);
console.log(myP);//4
//Pass by references: truyền tham chiếu
var hotBoy1 = { name: 'hotGirl', size: "E cub"}
var hotBoy2 = hotBoy1;
hotBoy2.size = "D cub";
console.log(hotBoy1); //

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán =
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng  
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** (mũ) | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)

//toán tử ba ngôi
var cuong = "ne"
var isNe = cuong == "ne" ? true : false
console.log(isNe); //true

//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true  && false false
//  true  && true  true
//  false && false false
//  true  || false true
//  true  || true  true
//  false || false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1


