//Static
//  static  trong Prop
class User{
    name = "Điệp";
    static name2 = "Lan";
}
let obj1 = new User();
console.log(obj1.name);
console.log(obj1.name2); //undefined
console.log(User.name2);
//static ám chỉ cái property đó thuộc về class 
//muốn dùng thì thông qua Class

//--
class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    show(){
        console.log("ahihi");
    }
    static compare(arA, arB){
        return arA.date - arB.date;
    }
}
//tạo mảng chưa các bài báo
let articleArray = [
    new Article("tuyển dụng sang Cam làm lợn", new Date(2022, 2, 4)),
    new Article("nữ đa cấp mượn tiền ở Đồng Nai", new Date(2022, 0, 6)),
    new Article("siêu trộm Anna lấy xe của quý nhân bỏ trốn", new Date(2022, 8, 20)),
];
articleArray.sort(Article.compare);
console.log(articleArray);
