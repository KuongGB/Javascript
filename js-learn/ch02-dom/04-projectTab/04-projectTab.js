const navtabBtnList = document.querySelectorAll(".navtab-btn");
const navtabContentList = document.querySelectorAll(".tab-content-item");
//
navtabBtnList.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        //xoá hết actived trên các nút
        navtabBtnList.forEach((btn1)=> {
            btn1.classList.remove("actived");
        });
        //thêm actived vào nút vừa bị nhấn
        event.target.classList.add("actived");
        //xoá actived trên content
        navtabContentList.forEach((ctTab) => {
            ctTab.classList.remove("actived");
        });
        document.querySelector(`.tab-content-item[data-content = '${event.target.id}']`).classList.add("actived");
    });
});







