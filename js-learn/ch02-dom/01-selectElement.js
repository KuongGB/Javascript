//liên kết (DOM) | móc 1 biến vào 1 đối tượng
//nếu muốn lấy 1 đối tượng:
// document.getElementById("..."); //chỉ đc điền ID : live
// document.querySelector("..."); //cách select của nó giống css : non-live
let input = document.getElementById("name"); 
input = document.querySelector("#name")
console.log(input)

//nếu muốn lấy 1 danh sách các đối tượng thoả thì sao
let cardList = document.querySelectorAll(".card"); //NodeList
// cardList = document.getElementsByClassName("card"); //HTMLCollection
console.log(cardList);
//HTMLCollection: giống array, nhưng ko có các method hỗ trợ nhiều vidu: ko chơi với forEach
//cách xử lý em phải phân rã htmlcollection rồi bỏ vào mảng
//===> nen dung query
// cardList = [...document.getElementsByClassName("card")]; //HTMLCollection
// console.log(cardList)
//NodeList: nó giống array. có cả method của array

//demoMethod

let a = document.querySelector(".card")
console.log(a)
console.log(a.children)
console.log(a.childNodes)
console.log(a.parentElement) //element cha chứa nó
console.log(a.nextElementSibling) //lấy ra tk dúng nó mà ở dưới
console.log(a.firstChild) //ra phần tử con đầu
console.log(a.lastChild) //phần tử con cuối

//tạo mới 1 element
let newCard = document.createElement("div")
// newCard.className = "card p-2 mb-3"
newCard.classList.add("card", "p-2", "mb-3");
newCard.innerHTML = "<h1>Tao card moi bang DOM</h1><p>chao moi nguoi</p>";
let cardGroup = document.querySelector(".card-group");
// cardGroup.appendChild(newCard) //nhét card mới vào cardGroup
cardGroup.replaceChild(newCard,cardGroup.children[1]);

a.setAttribute("data-id", "1") //thêm thuôc tính
console.log(a.getAttribute("data-id")) //1
a.removeAttribute("data-id") //xoá thuộc tính



