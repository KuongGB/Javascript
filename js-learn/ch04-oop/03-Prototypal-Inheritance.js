// Prototypal Inheritance : kế thừa nguyên mẫu
// [[Prototype]]
// trong js 1 số thuộc tính ẩn trong obj được gọi là [[Prototype]]
//          dù bị ẫn nhưng có nhiều cách sử dụng nó 
//          một trong những cách dùng là thông qua getter và setter là __proto__
//          vd: tạo object rabbit kế thừa object animal

//
//sự kế thừa nguyên mẩu
// [[Prototype]] => __proto__
//kế thừa này cho phép 2 object kế thừa nhau

let congido = {
    eats: true,
    walk(){
        console.log("tao di bo");
    },
};

let pinkRabbit = {
    jumps: true,
};

let longEar = {
    ear: "long",
    __proto__: pinkRabbit,
};
//điều này đồng nghĩa với việc set longEar.[[Prototype]] = pinkRabbit
//                                  ==> longEar kế thừa pinkRabbit
pinkRabbit.__proto__ = congido; //pinkRabbit kế thừa congido
console.log(longEar.jumps);
console.log(longEar.eats);
//nếu như gốc thay đổi thì nhánh trên ăn theo
congido.height = 10;
console.log(longEar.height);
longEar.height = 7;
console.log(congido.height);

//Lưu ý với _proto_
/* trước es6(2015) không có cách chính thống nào truy vào prototype của 1 object
   vậy nên hầu hết các trình duyệt đều thêm vào 1 accessor property(get/set) được gọi là _proto_
   _proto_ không phải thuộc tính của [[Prototype]] mà là getter và setter của nó
   _proto_ tính đến năm 2021 thì đang được loại bỏ, k còn khuyên dùng nữa
                nhưng vẫn còn giữ lại trên 1 số lý do chưa cập nhật/ hay gì đó ai biết :))
    chúng ta nên thay thế nó bằng Object.getPrototypeOf()/ Object.setPrototypeOf() (ES6)
*/

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

let user = {
    isUser: true,
    __proto__: student, 
};
user.fullName = "khủng long"
console.log(student);
console.log(user);
