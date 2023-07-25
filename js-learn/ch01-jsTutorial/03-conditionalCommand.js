console.log("Bài 4: Câu điều kiện - conditional commands");
//if
if(true){
    console.log("Dancin'");
}

//if else
let a = 8;
if(a < 7){
    console.log(1)
}else{
    console.log(2)
}
//**
let b = 8
if(b < 7 ){
    console.log(1)
}else if(b > 7){
    console.log(2)
}else if(b == 8){
    console.log(3)
}else{
    console.log("Ahihi Tui ne")
}

//Switch case
var choice = 3
switch(choice){
    case 1: {
        console.log("Move!")
        break
    }
    case 2: {
        console.log("Run!")
        break
    }
    case 3: {
        console.log("Jump!")
        break
    }
    default:{
        console.log("Fly!")
        break
    }
}

//*thiếu break thì bị trôi lệnh 
//*thiếu default thì như thiếu else
//*các case và default có thể xáo trộn vị trí

//Nâng cao: toán tử 3 ngôi
let res;
res ? console.log("Có giá trị") : console.log("Ko có giá trị")
// if(res){
//     console.log("Có giá trị")
// }else console.log("Ko có giá trị")

//Pro
// if(!res) console.log("Ko có giá trị")
!res && console.log("Ko có giá trị")















