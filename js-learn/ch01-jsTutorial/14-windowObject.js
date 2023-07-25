console.log("Bai 14: Window object");
//window object(wo) là đại diện cho cửa sổ trình duyệt
//tất cả các global object, function, biến mà tạo bằng var
//đều đc xem là method | pop của windowObject
//let và const thì ko phải

//ngay cả DOM(document object model) cũng là thuộc tính của WO

//I-Prop và method
//1.1 window.innerHeight: return ra chiều cao của trang web
console.log(window.innerHeight)
//1.2 window.innerWidth: return ra chiều rộng của trang web
console.log(window.innerWidth)
//1.3 window.open(url,target,fieldter)
// window.open('https://gearvn.com', '_blank','width = 500, height = 500');
//1.4 window.close(): tab sẽ bị đóng
//1.5 window.resizeTo(w,h)
// let mytab = window.open('https://gearvn.com', '_blank','width = 500, height = 500');
// mytab.resizeTo(700,500);

//II-Window Location
//2.1 window.location
console.log(location)
console.log(location.href) //đường dẫn
console.log(location.hostname) //domain hiện tại
console.log(location.pathname) //
console.log(location.protocol) //http

// href = protocol + hostname | pathname
//assign(url): chuyển hướng về trang mới
// location.href = 'https://gearvn.com' //nhu assign

//navigator: thuộc tính của ng dùng trình duyệt
// console.log(navigator)
//history: lịch sử trình duyệt đối với tab
// history.forward()
// history.back()

//trình duyệt cung cấp 3 loại popup
//alert
//alert("ahihi do cho")

//confirm: trả ra true | false
// confirm("chao lai di ba")

//prompt
// prompt("nhập tên đi: ") //có thể điền vô, hứng bằng dùng biến hứng








