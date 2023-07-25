//tạo 1 cái bảng chứa giá trị dạng table
const VALUES = [
    {id:"scissors", value:"✌🏼"}, //0
    {id:"rock", value:"✊🏻"},  //1
    {id:"paper", value:"✋"}  //2
]//độ dài length:3

//khi nào thì ?
//  thắng:  1 - 0 = 1
//          2 - 1 = 1
//          0 - 2 = -2
//      indexPlayer - indexComputer = 1 | -2                            return 1
//  hòa: indexPlayer - indexComputer = 0                                return 0
//  thua: indexPlayer - indexComputer mà không ra các số trên thì thua  return -1
// tạo hàm mà, mỗi lần gọi thì nó sẽ thay đổi giá trị của máy
//khi so sánh A và B hàm 1: thắng 0: hòa -1: thua
//lưu lại interval để mình có thể dựng lại việc call cf

// valuePlayer : rock           | valueComputer: data-id => scissors
// => indexPlayer : 1           |   =>indexComputer : 0

let i = 0;
//tạo hàm mỗi lần gọi thì nó sẽ thay đổi giá trị của máy
const handleChange = () => {
    let computer = document.querySelector("#computer")
    computer.textContent = VALUES[i].value;
    computer.dataset.id = VALUES[i].id
    if(i === VALUES.length - 1){
        i = 0;
    }else{
        i++
    }
}

//lặp hàm theo time bằng setInterval(cf,milisecond)
let interval = setInterval(handleChange, 100);

//hàm so sánh
const compare = (valuePlayer, valueComputer) => {
    let indexPlayer = VALUES.findIndex(item => item.id == valuePlayer)
    let indexComputer = VALUES.findIndex(item => item.id == valueComputer)
    let check = indexPlayer - indexComputer
    if(check == 1 || check == -2){
        return 1;
    }else if(check == 0){
        return 0;
    }else{
        return -1;
    }
}

//sự kiện chơi diễn ra khi 1 nút user bị click
//dom danh sách các nút user
let playerItem = document.querySelectorAll(".user")
playerItem.forEach(item => {
    item.addEventListener("click", event =>{
        clearInterval(interval)
        let valuePlayer = event.target.id
        let valueComputer = computer.dataset.id
        let result = compare(valuePlayer, valueComputer)
        //duyệt lại các nút và xoá actived | chặn sự kiện click
        playerItem.forEach(item1 => {
            item1.classList.remove("actived")
            item1.style.pointerEvents = "none"
        });
        event.target.classList.add("actived")

        //thông báo kết quả: tạo 1 div để thông báo kết quả
        const alertDiv = document.createElement("div")
        alertDiv.classList.add("alert")
        let msg = ""
        if(result == 1){
            msg = "Gioi Day Con Ga"
            alertDiv.classList.add("alert-success")
        }else if(result == 0){
            msg = "Ko Thang Duoc Bot A Con Ga"
            alertDiv.classList.add("alert-warning")
        }else{
            msg = "U are a chicken"
            alertDiv.classList.add("alert-dark")
        }
        alertDiv.textContent = msg
        document.querySelector(".notification").appendChild(alertDiv)
        document.querySelector("#play-again").classList.remove("d-none")
    })
});

//sự kiện chơi lại
document.querySelector(".btn-play-again").addEventListener("click", event => {
    interval = setInterval(handleChange, 100)
    playerItem.forEach(item1 => {
        item1.classList.remove("actived")
        item1.style.pointerEvents = ""
    });
    document.querySelector(".notification").innerHTML = ""
    document.querySelectorAll("#play-again").classList.add("d-none")
})
