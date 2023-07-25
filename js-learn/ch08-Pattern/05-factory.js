//factory pattern: là cách tạo obj bằng factory mà k cần chỉ định chính xác class or constructor
//Tạo obj mà k lộ logic khởi tạo
//Tạo obj khác dựa vào điều kiện đc chỉ rõ

class Car{
    constructor(options){
        this.door = options.door || 4;
        this.state = options.state || "Brand New";
        this.color = options.color || "While";
    }
}

class Truck{
    constructor(options){
        this.door = options.door || 2;
        this.state = options.state || "Used";
        this.color = options.color || "Black";
    }
}

//class trung gian : Factory
class VehicleFactory{
    createVehicle(options){
        if(options.vehicleType == "car") return new Car(options);
        if(options.vehicleType == "truck") return new Truck(options);
    }
}

//tạo 1car
let factory = new VehicleFactory();
let audi = factory.createVehicle({
    vehicleType: "car",
    door: 2,
});

let truck2 = factory.createVehicle({
    vehicleType: "truck",
    color: "violet",
});

console.log(audi);
console.log(truck2);
