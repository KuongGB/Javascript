//syntax Error: lỗi sai cú pháp do mình => trycatch thua
//logic Error: lỗi do mình sai tư duy => trycatch thua
//runtime Error: lỗi phát sinh trong quá trình sử dụng => trycatch

//
//nhập vào input : number mà lại đi nhập ký tự

//vd1


//trycatch chỉ hoạt động đồng bộ thôi
//cách để khắc phục(callback/promise/asyn await)
// setTimeout(() => {
//     try{
//         diepPiedTeam;
//         console.log("hihi");
//     }catch(error){
//         console.log("nhập lại nha");    
//     }
// },1000);
// console.log("ahihi");

//lỗi trong js được xem là 1 object gồm 3 prop
//name: tên
//message: thông báo lôi
//stack: thông tin chi tiết
// try{
//     diepPeidTeam;
// }catch(error){
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//nhiều khi không phát sinh lỗi nhưng mà mình thích tạo ra lỗi
let loading = true;
try{
    let a = 10;
    // throw new Error("lỗi tự tạo")
}catch(error){
    console.log(error)
}finally{
    loading = false;
}

//finally : dù lỗi hay ko thì vẫn chạy
//finally là vô dụng 

//
// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp 
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

