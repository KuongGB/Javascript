let btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click",(event) => {
    console.log(event);
    console.log(event.clientX, event.clientY);
    //client: hệ quy chiếu là viewpoint
    console.log(event.offsetX, event.offsetY);
    //offset: hệ quy chiếu là element
    console.log(event.target);
    //return về element vừa click

    //
    const inputName = document.querySelector("#name");
    console.log(inputName.value);
    const newItem = document.createElement('li');
    newItem.className = "card mb-3 p-2";
    newItem.innerHTML = inputName.value;
    document.querySelector("#list").appendChild(newItem);
    
});

//event
//  dbclick: nhấn 2 lần mới chạy
//  submit thì cần event.preventDefault(); để chặn reset trang
// mouseover : đưa chuột vào
//  mouseout : đưa chuột ra
//Keyboard:
//  keydown: nhận tất cả các phím khi nhấn 1 phím bất kì
//  keypress: nhận tất cả các phím (trừ alt, esc, shift, ctrl)
//  keyup : nhận các nút khi nhả 1 phím bất kì (trừ alt, esc, shift, ctrl)
//  oninput|onchange: thực thi khi value của input thay đổi
//      oninput: thực thi ngay khi thay đổi
//      onchange: thực thi khi bỏ forcus
//


