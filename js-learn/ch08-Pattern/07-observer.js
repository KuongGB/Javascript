//Observer Pattern: là 1 design: nơi mà 1 obj đc gọi là subject
//  có nhiệm vụ duy trì 1 danh sách dựa vào nó tự động thông báo đến obj nếu có thông báo đến các object
//     nếu có bất kỳ thay đổi nào về trạng thái

//thằng idol: subject
// mãng ng theo dõi: observers
// hành động đăng ký: subcribe
// huỷ hành động đăng ký: unsubcribe
// fire()

class Subject{
    constructor(){
        this.observers = [];
    }
    //đăng ký
    subcribe(func){
        this.observers.push(func);
    }

    //huỷ đăng ký
    unsubcribe(func){
        this.observers = this.observers.filter((observer) => observer != func);
    }
    //thông báo đến các observer(func)
    fire(data){
        this.observers.forEach((observer) => observer(data));
    }
}

//demo
const captain = new Subject();
function fighter(value){
    console.log("Đã bắn "+value);
}
function eater(value){
    console.log("Đã ăn "+value);
}
captain.subcribe(fighter);
captain.subcribe(eater);captain.unsubcribe(fighter);
captain.fire("Hùng");