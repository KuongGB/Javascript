console.log("Bai 12: Object Method")
//Object 
//  entry
//  key luôn luôn là string or number
//  value có thể là bất cứ gì
var worker1 = {
    lname: "diep dep trai",
    age: '24',
    showInfor(){
        console.log(this.lname + ' ' + this.age);
    }
};
worker1.showInfor();
//them thuoc tinh
worker1.point = 10;
//sửa lại giá trị cho thuộc tính
worker1.lname = "Diep Yangho"
//xoá thuộc tính
delete worker1.age;
console.log(worker1);

//1. object.assign()
//  merge object
//  có ròi thì đè ch thì thêm 
var per1 ={
    lname: "diep",
    age: 24,
    job: ["yangho","coder"]
};
var per2 ={
    lname: "lan",
    age: 24,
    conpany: "piedTeam"
};
var per3 = Object.assign(per1, per2);
per3.job.push("dua xe")
console.log(per3);
console.log(per1 == per3); //true //2 chàng trỏ 1 nàng
//việc merge như này là shallow copy

per3 = {...per1, ...per2};
per3.job = [...per3.job];
per3.job.push("lai may bay")
console.log(per3)
console.log(per3==per1)

//Object.keys() //trả ra mảng cái key object
res = Object.keys(per3);
console.log(res)

//Object.values() //trả ra mảng cái key object
res = Object.values(per3);
console.log(res)

//for-in: lập object

