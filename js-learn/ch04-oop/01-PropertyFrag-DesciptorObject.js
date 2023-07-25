//Property Flag
//value là giá trị của Property
// writable     : nếu true thì value có thể thay đổi, false thì read-only
// enumerable   : nếu true thì property được liệt kê khi lặp, false thì không được liệt kê
// configurable : nếu true thì property có thể bị xóa writable và enumerable có thể bị thay đổi,
                    //false thì không thể 

// 1 thuộc tính có đủ 3 cờ và value(tính là 1),bộ 4 cờ này người ta gọi đó 
//                                              là bộ mô tả thuộc tính (property descriptor)

//1. Object.getOwnPropertyDescriptor(obj, PropName)
//lấy ra đầy đủ thông tin của prop
let profile = {
    name: "Điệp",
    age: 18,
};
console.log(Object.getOwnPropertyDescriptor(profile, "age"))

//2. Object.defineProperty(obj, prop, {})
//định nghĩa 1 property mới hoặc chỉnh sửa property
//nếu lá cờ nào không được liệt kê trong quá trình thêm mới sẽ bị false
Object.defineProperty(profile, "name",{
    writable: false,
});
profile.name = "cúc";
console.log(profile);

//tạo mới giá trị
Object.defineProperty(profile,"job", {
    value:"Yangho",
    writable: true,
});
//nếu như trong quá trình tạo property mới mà em ko liệt kê flag nào thì flag đó false
console.log(Object.getOwnPropertyDescriptor(profile, "job"))

console.log(profile);
//duyệt
for (const key in profile) {
    console.log(key);    
}
//chỉ duyệt đc name và age, còn job vì emurable: false nên nó k đc duyệt
//
// Non-configurable: không thể cấu hình 
// configurable:false nghĩa là không cho ta set giá trị của các cờ ngoại trừ value nữa
// ngta thường dùng nó cho các giá trị đặc biệt như Math.PI không cho người dùng cấu hình
// các method mặt định
//////
//////
//* một khi đã set configurable: false thì k thể dùng defineProperty để set lại thành true
// configurable: false thì sẽ có những hạn chế sau
// 1. không thể thay đổi configurable
// 2. không thể thay đổi enumerable
// 3. không thể thay đổi writable: false -> true(nhưng ngược lại true -> false thì đc)
// 4. không thể thay đổi getter/setter


//Object.defineProperties(obj,{
        // key : {value:' ',descriptor}
        // key : {value:' ',descriptor}
// })
// giúp định nghĩa nhiều thuộc tính cùng lúc

// Object.getOwnPropertyDescriptors(obj,'PI')
// giúp return nhiều thuộc tính cùng lúc
// nếu kết hợp definesProperties có thể clone một object có full bộ cờ
console.log(Object.getOwnPropertyDescriptors(profile));

//clone object và các cờ prop
//vd anh muốn tạo ra 1 object giống profile
//tức là giống về prop mà còn phải giống về các lá cờ của prop
let objClone = {...profile}
//nhái được prop nhưng ko chép đc cờ
console.log(Object.getOwnPropertyDescriptors(objClone));
//sao chép cx gần giống: mất job vì enumerable false

//sao chép thông qua  getOwnPropertyDescriptors
objClone = Object.defineProperties({},Object.getOwnPropertyDescriptors(profile));
console.log(Object.getOwnPropertyDescriptors(objClone));
//nếu clone theo cách này sẽ chép đc 100%

//-----------------------------------
//có 2 loại thuộc tính trong object
//      thuốc tính dữ liệu: value property
//      thuộc tính bộ truy cập: accessor property

let student = {
    lastName: "Điệp",
    firstName: "Lê",
    //getter: lấy giá trị
    //accessor property
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    //setter: cập nhật lại giá trị
    //accessor property
    set fullName(newName){
        [this.firstName, this.lastName] = newName.split(" ");
    },
};
console.log(student.fullName);
student.fullName = "Trà Long"
console.log(student);

//xem thử chi tiết các cờ
console.log(Object.getOwnPropertyDescriptors(student));
//đối với value property: value, writable, enumerable, configurable
//đối với accessor property: get, set, enumerable, configurable

//getter và setter thông minh
//vd: giả sử cấm ng code gán giá trị cho name có độ dài < 4
student = {
    get name (){
        return this._name; //_name là tên giả
    },
    set name(newName){
        if(newName.length < 4){
            alert("Name is too short");
            return;
        }
        this._name = newName;
    }
}
console.log(student.name);
student.name = "huệ"


//fact: _ là quy ước ngầm của các dev
//prop nào có _ ở trước tên thì ám chỉ prop đó là private
