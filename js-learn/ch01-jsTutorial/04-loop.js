console.log("Bài 5 : vòng lặp - Loop")
//reUse: dùng lại | repeat: lặp lại
//while | do-whilte | for
var student1 = {name: "Điệp", point: 10, major: "SE"}
//              thuộc tính | property | entry
//              key: value
//For-in: lặp các key trong object
for(let key in student1){
    console.log(key)
}///name point major
console.log(student1["point"]);
console.log(student1.point)

var array1 = [12, 17, 19]
console.log(array1[1])
//duyệt array bằng for in 
for(const key in array1){
    console.log(key + " = " + array1[key])
}
// 0 12
// 1 17
// 2 19

//For in sẽ vô dụng với set
let set1 = new Set(['a', 'b', 'c', 'a', 'd'])
console.log(set1) //tự loại trùng
for(const key in set1){
    console.log(key)  /// ko có gì hết 
}

//For-of: chuyên duyệt value
let workerList = ['Diep', 'Hoa', 'Lan', 'Hoa']
for(const x in workerList){
    console.log(x) //0 1 2 3
}
for(const x of workerList){
    console.log(x) // diep hoa lan hoa
}

//array là object nhưng là plain object
//for-of ko chơi vs object phẳng
// var object1 = {a: 1, b: 2, c: 3}
// for(const x of object1){
//     console.log(x)  //TyoeError: object1 is not iterable
// }
//itareble: tính khả lập

//fore: for-each: lập value và cả key(index)
['a','b','c'].forEach((item) => {
    console.log(item)
});
//a b c
['a','b','c'].forEach((val, index) => {
    console.log(val +" "+index)
});





