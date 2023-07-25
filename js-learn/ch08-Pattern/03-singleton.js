// singleton là 1 obj chỉ khởi tạo 1 lần duy nhất trong quá trình chạy
//          dù cho bạn có gọi constructor của nó bao nhiêu lần
//          vần ko toạ mới
//              ==> tránh lãng phí bộ nhớ, chiếm ít ram

//vd:
const car = {
    name: "audi",
    price: 9000,
};
//
const xeHop = car; //2 chàng trỏ 1 nàng
//module
// const user = (function(){
//     function init(){
//         return {
//             name: "Diep",
//             printName: function(){
//                 console.log("Tên là " + this.name);
//             }
//         }
//     }
//     return {
//         getIntance(){
//             return init();
//         },
//     };
// })();
// const user1 = user.getIntance();
// const user2 = user.getIntance();

//singleton
const user = (function(){
    let intance;
    function init(){
        return {
            name: "Diep",
            printName: function(){
                console.log("Tên là " + this.name);
            }
        }
    }
    return {
        getIntance(){
            if(!intance){
                intance = init();
            }
            return intance;
        },
    };
})();
const user1 = user.getIntance();
const user2 = user.getIntance();
console.log(user1 == user2);

