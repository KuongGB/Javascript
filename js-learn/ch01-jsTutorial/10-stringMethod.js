console.log("Bai 10: String Method");
//chuỗi trong js bằng " " or ' ' đều đc
//method trong string
//1. length() //return ra độ dài chuỗi
let str = "aadsdad"
console.log(str.length) //5

//2. indexOf() //cho vị trí đầu tiên của từ trong chuỗi
console.log(str.indexOf("h")) //ko có thì ra -1
console.log(str.indexOf("ds")) //2 

//I. tách chuỗi
// 1. slice(start,end) : return ra đoạn từ start đến end - 1
var x = "chao that ban nha"
console.log(x.slice(2,9)) //ao that

//  cắt ngược
console.log(x.slice(-15,-8))//ao that

// cắt thiếu paramenter
console.log(x.slice(10))
console.log(x.slice(-7))

// 2. subString(start, end)  //giống cách sài của slice nhưng nó ko có chiều ngược
// 3. subStr(start, length)  //return ra chuỗi bắt đầu từ start và dài bằng length
console.log(x.substr(2,7))//ao that

//II. các method phổ biến
var str1 = "PiedTeam có giả học phí rẻ và chất lượng, rẻ nhưng tốt"
//1. replace(old, new) thay old bằng new | nhưng chỉ đc 1 lần
console.log(str1.replace("tốt", "dinkout"))
console.log(str1.replaceAll("tốt", "dinkout")) //chuyển hết

//2. chuyển đổi hoa thường .toUpperCase  .toLowerCase
//3. concat()  nối chuỗi
str1 = "xinchao";
str2 = "piedTeam";
str3 = str1.concat(" ", "mừng bạn đén với", " ", str2)
console.log(str3);

//4. trim() : xoá khoảng cách 2 đầu chuỗi
str1 = "    chao                em   nha"
str1 = str1.trim();
console.log(str1.trim())
// str1 = str1.replace(/\s+/g, " "); // vẫn còn dấu cách đầu cuối
// console.log(str1.trim());

str1 = str1.split(" ")  //băm
           .filter((item) => item != "")  //lọc thằng " "
           .join(" "); //gắn lại 

console.log(str1) //chao em nha
//5. so sánh chuỗi == | ===

//6. charAt(index) hoặc [], return ký tự ở vị trí index
str1 = "diep dep chai";
console.log(str1.charAt(2)) //e
console.log(str1[2]) //e
str1[2] = "e"; //lỗi ko chạy
console.log(str1);

//string là imutable: string ko bị tác động. 
//method của string chỉ tạo ra string mới












































