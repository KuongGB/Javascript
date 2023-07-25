//sự kiện chính xảy ra khi input có id là name
//và mình bấm add(khi cái form được submit)
document.querySelector("form").addEventListener("submit", evemt => {
    evemt.preventDefault()
    let name = document.querySelector("#name").value
    //khi có giá trị ô input có id là name
    //ta sẽ tạo 1 đối tượng tên là item gồm 2 prop
    //id  và name
    let item = {
        id: new Date().toISOString(),
        name: name.trim(),
    }

    //1. render item lên ui (giao diện người dùng)
    addItemToUI(item)
    //2. lưu item vào localStorage
    addItemToLS(item)
})

//viết 1 cái hàm : n9hận vào (item) và hiện thị nó lên màn hình
const addItemToUI = (item) => {
    let newCard = document.createElement("div")
    newCard.className = ("card d-flex flex-row justify-content-between align-items-center p-2 mb-3")
    newCard.innerHTML = `
        <span>${item.name}</span>
        <button type="button" class="btn btn-danger btn-remove" data-id="${item.id}">Remove</button>
    `
    document.querySelector(".list").appendChild(newCard)
}

//hàm lấy ra danh sách từ localStorage
const getList = () => {
    return JSON.parse(localStorage.getItem("list")) || []
}

//hàm lưu item vào localStorage
const addItemToLS = (item) => {
    let list = getList();
    list.push(item)
    localStorage.setItem("list",JSON.stringify(list));
}

//hàm render ui cho các item trong danh sách
const init = () => {
    let list = getList()
    list.forEach(item => {
        addItemToUI(item)
    });
}
init()
//hàm nhận vào id và xoá
const removeItemFromLS = (idItem) =>{
    //lấy mảng
    let list = getList();
    //từ idItem tìm vị trí trong mảng
    let index = list.findIndex((item) => item.id == idItem);
    list.splice(index,1);
    localStorage.setItem("list",JSON.stringify(list));
}

//chức năng xoá 1 item
document.querySelector(".list").addEventListener("click", (event) => {
    if(event.target.classList.contains("btn-remove")){
        let nameItem = event.target.previousElementSibling.innerHTML;
        let isConfirmed = confirm(`Ban co muon xoa "${nameItem}" khong vay? `);
        if(isConfirmed){
            //xoá trên UI
            let card = event.target.parentElement;
            card.remove();
            //xoá item trên LS
            removeItemFromLS(event.target.dataset.id); //đưa hàm removeLS cái data-id
        }
    }
});

//xoá tất cả
document.querySelector("#btn-remove-all").addEventListener("click", (event) => {
    let isconfirmed = confirm("Ban muon xoa het dung khong?");
    if(isconfirmed){
        //cập nhật ui
        document.querySelector(".list").innerHTML = "";
        //cập nhật ls
        localStorage.removeItem("list");
    }
});

//
document.querySelector("#filter").addEventListener("keyup", (event) => {
    const valueInput = event.target.value;
    //lấy cái list
    let list = getList();
    let filteredList = list.filter((item) => item.includes.(valueInput));
    //xoá ds cũ
    document.querySelector(".list").innerHTML = "";
    //render len danh sách đã lọc
    filteredList.forEach((item) =>{
        addItemToUI(item);
    });
});