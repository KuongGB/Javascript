// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó

//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function
//khi mà 1 obj đc tạo ra từ 1 constructor thì [[Prototype]] sẽ có giá trị là prototype của constructor đó

//Object.prototype
//  object rỗng
let obj = {};
//let obj1 = new Object();
console.log(obj.toString());
//đối tượng obj được tạo ra từ constructor tên Object
//          [[Prototype]] của obj là Object.prototype là class Object
//bên trong 1 object có thuộc tính, [[Prototype]] => sử dụng bằng __proto__
console.log(obj.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);
console.log(obj.__proto__.__proto__);

//Array, Date, Function cũng giữ trong mình các phương thức có sẵn trong prototype
let mang1 = [1,2,3];
// console.log(mang1.prototype);   ko có prototype vì nó k phải constructor
console.log(mang1.__proto__ === Array.prototype);
console.log(mang1.__proto__.__proto__ == Object.prototype);

//có trường hợp object có các method trùng nhau của các prototype
//vd method toString() cả Object và Array đều có
//vậy thì mang1 sẽ chọn toString của Array hay của Object
//Override: vượt mặt

//primitive - kiểu nguyên thuỷ ( String, number, boolean)
//ko phải là object nhưng vẫn truy cập như sau
let a=1;
console.log(a.toString());