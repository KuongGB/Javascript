//lib

// function map(){
//     const toaDo = [110, 105];
//     function layToado() {
//         return toaDo;
//     }
//     return {
//         inToaDo: function () {
//             console.log("Toạ độ là " + layToado());
//         },
//     };
// }

//nhược điểm kiến cho ng dùng bị giới hạn đặt tên

//cách viết theo style module

// const map = (function(){
//     //private
//     const toaDo = [110, 105];
//     function layToado() {
//         return toaDo;
//     }
//     //public
//     return {
//         inToaDo: function () {
//             console.log("Toạ độ là " + layToado());
//         },
//     };
// })();

//revealing module pattern
const map = (function(){
    //private
    const toaDo = [110, 105];
    function layToado() {
        return toaDo;
    }
    function inToaDo() {
        console.log("Toạ độ là " + layToado());
    }
    //public
    return {
        inToaDo, //revealing + callback
    };
})();