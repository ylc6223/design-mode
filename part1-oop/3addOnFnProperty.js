//函数也是对象
var CheckObj = function () {
}


CheckObj.checkName = function () {
    console.log('check name');
}
CheckObj.checkEmail = function () {
    console.log('check email');
}
CheckObj.checkPassword = function () {
    console.log('check password');
}


// 使用
CheckObj.checkName();
CheckObj.checkEmail();
CheckObj.checkPassword();

//该种方式无法做到属性的复用
