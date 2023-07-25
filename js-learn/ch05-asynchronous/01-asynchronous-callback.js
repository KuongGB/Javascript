// ch05-asynchronous
//   01-asynchronous-callback.js
//js là ngôn ngữ chạy đơn luồng
//PHP hay Java là đa luồng

//Vd: anh có 2 dòng code lần lượt từ trên xuống là L1(5p) và L2(1p)
//đơn luồng: L1 xong thì L2 mới chạy: 6p

//nếu em có đa luồng: L1 chạy trong lúc đời thì nó chạy luôn L2 : 5p

//call stack: là 1 cấu trúc dữ liệu dạng ngăn xếp(stack) dùng để chứa thông tin
//lúc code thực thi
//LIFO: Last in first out: vào sau ra trước

function a(x){
    console.log(x);
}

function b(y){
    a(y+2)
}

function c(z){
    b(z+1)
}

c(5)

//Event Loop và Callback Queue(kiu)
//trong một js runtime(môi trường chạy js - web) còn 1 thứ khác quan trọng
//không kém gì call stack

//tổng thể là js có gì

//về vùng nhớ: memory heap              call stack

//event loop: liên tục lập đi lập lại chờ đợi 1 sự kiện "click, submit, change"
//               event loop                           callback queue

//webAPIS : DOM| AJAX(XMLhttpRequest)| timeout(setTimeout)

function handle(){
    console.log("command1");
    setTimeout(function ahihi(){
        console.log("command2");
    }, 2000);
    console.log("command3");
}
handle();
//mô tả cách dòng code này vận hành

//đoán đáp án
//Ý kiến 1: 1 2 3 
//      mô tả: 1 chạy, sau 3 giây thì 2 chạy, và cuối cùng thì 3 chạy

//Ý kiến 2: 1 3 2 (Đúng)
//      mô tả: 1 chạy, 2 chạy nhưng mà phải đợi 3 giây, trong lúc đợi thì 3 chạy
//          nên sau 3 giây thì 2 mới in ra

//ASYNC CallBack - bất đồng bộ từ callback
// ưu điểm: để hiểu
// nhược điểm: code bị lồng vào nhau, khó fix, (callback hell)

//độ quan trọng của bất đồng bộ và đồng bộ
//vd1: slider
//vd2: giả sử có 2 dòng code
//L1: trích xuất dữ liệu từ file và chuyển thành mảng student(3p)
//L2: in ra danh sách các student đã được trích xuất từ L1

try{}catch(error){console.log(error);}

//thử chuyển 1 async callback thành promise
// setTimeout(()=>{
//     console.log("hello");
// }, 1000)

//chuyển thành promise
let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("hello")
    }, 1000)
})

p2.then(value=>{
    console.log(value);
})

//thời gian đợi từ 0 - 1s là pending
//giai đoạn em nhận được resolve ngta gọi là on fulfilled

