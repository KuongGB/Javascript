//constructor function và kế thừa băng prototyoe
// function Student(name, birthday){
//     this.name = name;
//     this.birthday = birthday;
//     this.id = new Date().toISOString();
// }
//------------------LS---------------------
//add new student into server
// function Store(){}
// //getStudent: lấy ra danh sách sinh viên từ localStorage
// Store.prototype.getStudents = function(){
//     return JSON.parse(localStorage.getItem("students")) || []
// }

// //add: thêm student vào storage
// Store.prototype.add = function(student){
//     // const students = new Store().getStudents();
//     const students = this.getStudents();//lấy student từ Storage
//     ///nhét student vào students
//     students.push(student);
//     //cập nhật students lên lại localStorage
//     localStorage.setItem("students", JSON.stringify(students));
// }

// Store.prototype.getStudent = function(id){
//     const students = this.getStudents();
//     return students.find(student => student.id === id);
// }

// Store.prototype.remove = function(id){
//     const students = this.getStudents();
//     const indexRemove = students.findIndex(student => student.id === id);
//     students.splice(indexRemove,1); //xoá 1 từ index
//     localStorage.setItem("students",JSON.stringify(students));
// }
//-------------------UI--------------------
//add new student into UI
// function RenderUI(){}
// //add thêm student mới vào giao diện
// RenderUI.prototype.add = function(student){
//     const students = new Store().getStudents();
//     const newTr = document.createElement("tr");
//     newTr.innerHTML = `
//             <td>${students.length}</td>
//             <td>${student.name}</td>
//             <td>${student.birthday}</td>
//             <td>
//                 <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Xoá</button>
//             </td>
//     `
//     document.querySelector("tbody").appendChild(newTr);
//     //sau khi thêm vào thì xoá các giá trị
//     document.querySelector("#name").value = ""
//     document.querySelector("#birthday").value = ""
// }
// RenderUI.prototype.alert = function(msg, type = "success"){
//     //tạo div báo
//     const divAlert = document.createElement("div");
//     //thêm class
//     divAlert.className = `alert alert-${type}`
//     divAlert.innerHTML = msg;
//     document.querySelector("#notification").appendChild(divAlert);
//     //sau 2s tắt
//     setTimeout(() => {
//         divAlert.remove()
//     },2000);
// }
// //renderAll: dùng để render tất cả trong student lên giao diện
// RenderUI.prototype.renderAll = function(){
//     const students = new Store().getStudents();//
//     //dùng reduce để biến từng student trong students thành chuỗi và cộng dồn các chuỗi đó
//     const htmlContent = students.reduce((total,studentCurrent,indexStudentCurrent) => {
//         return total = total + `
//             <tr>
//                 <td>${indexStudentCurrent + 1}</td>
//                 <td>${studentCurrent.name}</td>
//                 <td>${studentCurrent.birthday}</td>
//                 <td>
//                     <button class="btn btn-danger btn-sm btn-remove" data-id="${studentCurrent.id}">Xoá</button>
//                 </td>
//             <tr>
//         `
//     }, "");
//     document.querySelector("tbody").innerHTML = htmlContent;
// }

//-------------chuyển cách viết class
//--class Student
class Student{
    constructor(name, birthday){
        this.name = name;
        this.birthday = birthday;
        this.id = new Date().toISOString();
    }
}
//--class Store
class Store{
    constructor(){}
    //getStudent: lấy ra danh sách sinh viên từ localStorage
    getStudents(){
        return JSON.parse(localStorage.getItem("students")) || []
    }

    //add: thêm student vào storage
    add(student){
        // const students = new Store().getStudents();
        const students = this.getStudents();//lấy student từ Storage
        ///nhét student vào students
        students.push(student);
        //cập nhật students lên lại localStorage
        localStorage.setItem("students", JSON.stringify(students));
    }

    getStudent(id){
        const students = this.getStudents();
        return students.find(student => student.id === id);
    }

    remove(id){
        const students = this.getStudents();
        const indexRemove = students.findIndex(student => student.id === id);
        students.splice(indexRemove,1); //xoá 1 từ index
        localStorage.setItem("students",JSON.stringify(students));
    }
}
//--class RenderUI
class RenderUI{
    constructor(){}
    //add thêm student mới vào giao diện
    add(student){
        const students = new Store().getStudents();
        const newTr = document.createElement("tr");
        newTr.innerHTML = `
                <td>${students.length}</td>
                <td>${student.name}</td>
                <td>${student.birthday}</td>
                <td>
                    <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Xoá</button>
                </td>
        `
        document.querySelector("tbody").appendChild(newTr);
        //sau khi thêm vào thì xoá các giá trị
        document.querySelector("#name").value = ""
        document.querySelector("#birthday").value = ""
    }
    alert(msg, type = "success"){
        //tạo div báo
        const divAlert = document.createElement("div");
        //thêm class
        divAlert.className = `alert alert-${type}`
        divAlert.innerHTML = msg;
        document.querySelector("#notification").appendChild(divAlert);
        //sau 2s tắt
        setTimeout(() => {
            divAlert.remove()
        },2000);
    }
    //renderAll: dùng để render tất cả trong student lên giao diện
    renderAll(){
        const students = new Store().getStudents();//
        //dùng reduce để biến từng student trong students thành chuỗi và cộng dồn các chuỗi đó
        const htmlContent = students.reduce((total,studentCurrent,indexStudentCurrent) => {
            return total = total + `
                <tr>
                    <td>${indexStudentCurrent + 1}</td>
                    <td>${studentCurrent.name}</td>
                    <td>${studentCurrent.birthday}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-remove" data-id="${studentCurrent.id}">Xoá</button>
                    </td>
                <tr>
            `
        }, "");
        document.querySelector("tbody").innerHTML = htmlContent;
    }
}

//-------------------Event---------------------
document.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault();//chặn reset
    //lấy giá trị từ input
    const store = new Store();
    const ui = new RenderUI();
    const name = document.querySelector("#name").value;
    const birthday = document.querySelector("#birthday").value;
    //tạo student
    const newStudent = new Student(name,birthday);
    //thêm vào server Store.add
    store.add(newStudent);
    //thêm vào giao diện RenderUI.add
    ui.add(newStudent);
    //thông báo đã thành công RenderUI.alert
    ui.alert(`Bạn đã thêm thành công ${name}`);
})

document.addEventListener("DOMContentLoaded", event => {
    const ui = new RenderUI();
    ui.renderAll();
})

//sự kiện xoá
document.querySelector("tbody").addEventListener("click", event => {
    if(event.target.classList.contains("btn-remove")){
        const idRemove = event.target.dataset.id;
        //khi ấn đúng sẽ lấy đc id
        const store = new Store();
        const ui = new RenderUI();
        //từ id lấy đc thông tin từ storage
        //hỏi có chắc là xoá ko?
        const student = store.getStudent(idRemove);
        const isConfirmed = confirm(`Bạn chắc là bạn muốn xoá '${student.name}'`);
        //từ id xoá đối tượng khỏi danh sách: storage
        if(isConfirmed){
            store.remove(idRemove);
        //render lại tất cả student : có ròi
            ui.renderAll();
        //alert đã xoá thành công
            ui.alert(`Bạn đã xoá thành công ${student.name}!!`);
        }
    }
})
