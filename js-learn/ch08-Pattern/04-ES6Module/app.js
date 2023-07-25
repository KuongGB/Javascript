//ES6Module: lưu trữ trên nhiều file, mỗi file là 1 module, mọi thứ trong module mặc định là private
//   ném hàm  hay biến đều bằng export
//   code trên module luôn luôn là "use strict"
import {greeting} from "./util.js"; 
import {handleSum} from "./util.js"; 
console.log(greeting);
console.log(handleSum(5,4));