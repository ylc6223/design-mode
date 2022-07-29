//函数也是对象
var CheckObj = function () {
    this.checkName = function () {
        console.log('check name');
    },
        this.checkEmail = function () {
            console.log('check email');
        },
        this.checkPassword = function () {
            console.log('check password');
        }
}


// 使用
var a = new CheckObj()
a.checkName()
a.checkEmail()
a.checkPassword()
//符合使用类创建对象的方式，但存在内存浪费 每次创建对象都会新生成一遍方法

