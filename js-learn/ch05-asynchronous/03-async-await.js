//Promise: dùng để thay thế callback xử lý bất đồng(tránh đc callback hell)
//ES7: async-await không thay thế cho promise
//        async-await dùng để kết hợp vs promise đê dể đọc hơn

//async function : 1 hàm luôn return ra 1 promise
const handle = () => Promise.resolve("1")
async function handle1(){
    return 1
}
handle().then(value => console.log(value))
handle1().then(value => console.log(value))

//await: chỉ hoạt động trong async function
//hàm lấy dữ liệu
let getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" dataList")
    }, 3000)
})

let handle2 = async () => {
    let value = await getData();
    console.log("hello");
    console.log(value);
    return value;
}

handle2()

//xử lý lỗi
getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Lỗi ròi"))
    }, 3000)
})

handle3 = async () => {
    try{
        let value = await getData();
        console.log("hello");
        console.log(value);
        return value;
    }catch(error){
        console.log("loi roi " + error);
    }
}
handle3();
//lưu ý: nếu chỉ dùng promise thì mình bắt lỗi bằng  .catch
//nhưng nếu sài promise thông qua async await  thì dùng try catch để bắt

//khong bao giờ dùng thuật toán đồng bộ vs async-await
let x = 0;
let p4 = () => new Promise((resolve, reject) => {
    x += 1;
    console.log(x);
    resolve(5);
})

handle3 = async ()=>{
    let tmp = await p4();
    x += tmp
    console.log(x);
}

handle3()

//gọi tuần tự

//hàm lấy từ server về book
let getBook = () => new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(["Sách1", "Sách5", "Sách7"])
    },2000)
})

//hàm lấy từ server về các User
let getUsers = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["an","bình","cường"])
    },3000)
})


//dùng async await
// getdata = async () => {
//     const books = await getBook()
//     console.log(books);
//     const users = await getUsers()
//     console.log(users);
// }

getdata = async () => {
    const [books,users] = await Promise.all([getBook(),getUsers()])
    console.log(books);
    console.log(users);
}

getdata()