//符合使用类创建对象的方式，但并在原型对象上定义了方法，但是prototype要写很多遍 下面是简化写法
var CheckObj = function () {}
// CheckObj.prototype.checkName = function () {
//     console.log('check name');
// },
//     CheckObj.prototype.checkEmail = function () {
//         console.log('check email');
//     },
//     CheckObj.prototype.checkPassword = function () {
//         console.log('check password');
//     }


CheckObj.prototype= {
    checkName: function () {
        console.log('check name');
    },
    checkEmail: function () {
        console.log('check email');
    },
    checkPassword: function () {
        console.log('check password');
    },
}

// 使用
var a = new CheckObj()
a.checkName()
a.checkEmail()
a.checkPassword()


