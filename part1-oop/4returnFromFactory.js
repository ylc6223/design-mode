//函数也是对象
var CheckObj = function () {
    return {
        checkName: function () {
            console.log('check name');
        },
        checkEmail: function () {
            console.log('check email');
        },
        checkPassword: function () {
            console.log('check password');
        }
    }
}


// 使用
var a = CheckObj()
a.checkName()
a.checkEmail()
a.checkPassword()
//该种方式创建的函数不符合面向对象

