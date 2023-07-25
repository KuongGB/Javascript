//cookie
//cho phép lưu trữ thông tin ng dùng web vào máy tính
const date = new Date(2022, 7, 28).toString();
//` ` templete string
document.cookie = `username = diep; expires = ${date}; path =/`;
//nếu cookie mà ko truyền expires thì sẽ là session: trong lúc mở trình duyệt thoi
//path: là nơi chưa cookie
//nếu ko truyền thì mặc định là đường dẫn hiện tại
console.log(document.cookie);

//cookie thì có hạn hết
//k truyền cookie thì trang này sang trang khác đc
//để thao tác với cookie ngta dùng kèm thư viện js.cookie
//
//localStorage để lưu trữ với hiện lực vĩnh viễn | token JWT
//lưu trễ web
localStorage.setItem("name", "điệp đẹp trai");
//thêm 1 biến tên là name có giá trị diep dep trai
console.log(localStorage.getItem("name"));

//lưu trữ 1 object hay 1 mảng thì ko đc 
//nhưng mà ta có thể lưu 2 thằng đó dưới dạng json

//muốn lưu mảng | object
const profile = {
    name : "cuong",
    age : 20,
};
console.log(profile)
const profileJson = JSON.stringify(profile);
console.log(profileJson);
localStorage.setItem("Profile", profileJson);
//
let newObject = localStorage.getItem("Profile");
newObject = JSON.parse(newObject);
console.log(newObject)

