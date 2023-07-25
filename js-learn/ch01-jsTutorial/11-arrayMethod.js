console.log("Bài 11: Array Method")
//mảng trong js ko nhất thiết là phải cùng kiểu dữ liệu
var arr1 = [1,2,"a", {lname: "Hue", age: 19}, [3,5,6]];

//1.cách lấy phần tử trong mảng
console.log(arr1[3]) //ra cái object hue
//array là mutable: là method gây ảnh hưởng lên đối tượng
arr1[3] = "deep";
console.log(arr1);

//2.length lấy độ dài array
console.log(arr1.length); //5

//3. isArray() or instanceof Array để biết biến có phải là array ko?
console.log(arr1 instanceof Array); //true

//4. toString() : biến mảng thành chuỗi kèm ','
var workerList = ["Huệ", "Lan", "Trà"]
var str1 = workerList.toString();
console.log(workerList)
console.log(str1)

//5. demo split: băm và join: nối
var title = "xin chao cac ban";
//title => 'xin-chao-cac-ban'
title = title.split(" ").join("-");
console.log(title) 

//chèn phần tử
//6. push() nhét phần tử vào cuối| return ra độ dài mới
workerList = ["hue", "lan", "tra"];
var res = workerList.push("cuc"); //mutable
console.log(workerList, res);

//7.pop() xoá phần tử cuối | return đối tượng đã xoá
res = workerList.pop();
console.log(workerList, res);

//8. unshift() thêm phần tử vào đầu | return ra độ dài
res = workerList.unshift("cuc");
console.log(workerList, res);

//9. shift() coá phần tử vào đầu | return cái mới xoá
res = workerList.shift();
console.log(workerList, res);

//10. delete array[index]
//   xoá phần tử ở index
//   để lại khoảng trống ở vị trí đó
//   nếu mà truy cập vào vị trí đó sẽ (undefined)
//['cuc', 'hue', 'lan', 'tra']
//delete array[2] => ['cuc', 'hue', , 'tra'] => array[2]: undefined

//11.splice(index, sluong cần xoá, ...phần tử cần thêm)
//    them or xoá nhiều phần tử ở vị trí mình muốn
//    return về mảng các phần tử đã xoá

workerList = ["hue", "lan", "tra"]
res = workerList.splice(1,2,"cuc", "hong");
console.log(workerList, res)
//them ko xoa
workerList = ["hue", "lan", "tra"]
res = workerList.splice(1,0,"cuc", "hong");
console.log(workerList, res)
//xoa ko them
workerList = ["hue", "lan", "tra"]
res = workerList.splice(1,2);
console.log(workerList, res)

//12.slice: lấy ra đoạn giữa như string
//13.concat() :nối mảng như string
var workerGirl = ["hue", "lan", "tra"]
var workerBoy = ["diep", "nam", "an"]
workerList = workerGirl.concat(workerBoy, "tam", ["phu", "dai"])
console.log(workerList)

//14.spread operator: destructuring: phân rã   ...[1,2,3,5] => 1,2,3,5
workerList = [...workerBoy, ...workerGirl] //ngta gọi là sallow copy
console.log(workerList);

//15. forEach(callBackFunction) : lặp qua từng phần tử
//     callbackFunction có 2 đối số
//     value, index, array

arr1 = [1,2,"a", "hue"];
arr1.forEach((value,index,array) => {
    console.log(value,index,array);
});

//16.map(callback function): tạo ra mảng mới bằng khả năng tính toán từng phần tử
arr1 = [2,5,7];
arr1 = arr1.map((item) => item*3)
console.log(arr1)

//17. filter():lock theo 1 function
arr1 = [1,2,3,4,5]
arr1 = arr1.filter((item) => item % 2 == 0);
console.log(arr1)

//18. find(callbackfunction): return value nào thoả đầu
//                            ko tìm ra thì undefined
arr1 = [1,2,3,4,5]
arr1 = arr1.find((item) => item % 2 == 0);
console.log(arr1);  //2

//19. findIndex()  //return index tìm đc | ko thì -1
arr1 = [1,2,3,4,5]
arr1 = arr1.findIndex((item) => item % 2 == 0);
console.log(arr1);  //1

//20. indexOf()

//21. every() giống thằng All trong DBI
//          tất cả thoả điều kiện thì true
//          1 thằng ko thoả thì false
arr1 = [1,2,3,4,5]
arr1 = arr1.every((item) => item >= 1);
console.log(arr1)

//22. some(): giống every
//   chỉ cần 1 tk đúng là đúng hết
//  tất cả sai mới sai
arr1 = [1,2,3,4,5]
arr1 = arr1.some((item) => item >= 5);
console.log(arr1)

//23. includes: tìm  xem value có tồn tại trong mảng hay ko |true|false
arr1 = ["hue", "lan", "tra"]
res = arr1.includes("hong")
console.log(res)

//24.reverse() đảo ngược
//25. sort() sắp xếp
///1.string
arr1 = ["a", "c", "b"]
arr1.sort()
console.log(arr1)

///2.só
arr1 = [1,5,2,100,23]
arr1.sort((a,b) => a-b);
console.log(arr1)

//26. reduce
//   nếu map là thay đổi từng phần tử theo 1 công thức nào đó
//   reduce dồn các phần tử bằng 1 công thức
arr1 = [1,3,100,20]
res = arr1.reduce((total,current,currentIndex) => {
    return total + current;
}, 0);//initalValue quên thì tự cho là 0

console.log(res)

//reduce biến mảng thành object
arr1 = ['Diep', 22, 10]
var obj1 = arr1.reduce((total, current, currentIndex) => {
    total[currentIndex] = current;
    return total;
}, {});

console.log(obj1)



















