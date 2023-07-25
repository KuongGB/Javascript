console.log("Bài 9: numberMethod")
///số trong js chỉ có kiểu number mà thôi 
// số nguyên độ chính xác chỉ đến 15 số

var x = 99999999999999999; //16

//giới hạn của số thập phân là 17
x = 0.2 + 0.1;
x = (0.2 * 10 + 0.1 * 10) / 10
console.log(x);

//làm tròn
x = 0.2 + 0.1;
console.log(Number(x.toFixed(1)))
//.toFixed() // trả ra số đã làm tròn
//wrapper constructor Number ép nó về number
//Math.js (npm i math)

console.log(2 + 2); //4
//số + số đc số
console.log(2 + "2"); //22
//số + chuỗi ra chuỗi
console.log(2 - 2); //0
//số - sô = số
console.log(4 - "2"); //2
//số - chuỗi = số
console.log(4 - "a"); //NaN
console.log(NaN == NaN); //false
console.log(2 / 0) //infinity => là number
console.log(-2 / 0) //-infinity
x = 07; // hệ octal
x = 0xff; //hệ hexa

//ép số thành chuỗi
x = String(1999);
x = 1999;
x.toString();
//ép về số
//Number() | parseInt() | parseFloat()




















