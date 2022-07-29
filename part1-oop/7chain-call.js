// 方法的链式调用 谁调用函数 this就指向谁
const v = {
    a: function () {
        console.log("a")
        return this
    },
    b: function () {
        console.log("b")
        return this
    },
    c: function () {
        console.log("c")
        return this
    }
}
v.a().b().c()
var CheckObj = function (name,age) {
    this.name=name
    this.age=age
}
//将方法定义在构造函数的原型对象上,这里的this指向实例对象 不指向原型对象
CheckObj.prototype = {
    checkName: function () {
        console.log('check name');
        console.log('this',this)
        return this
    },
    checkEmail: function () {
        console.log('check email');
        return this
    },
    checkPassword: function () {
        console.log('check password');
        return this
    },
}

// 使用
var a = new CheckObj("jerry",18)
// a.checkName()
// a.checkEmail()
// a.checkPassword()

a.checkName().checkEmail().checkPassword()
console.log("ins",a)
console.log("insPrototype",a.__proto__)
console.log("FnPrototype",CheckObj.prototype)
console.log("-------------")
CheckObj.prototype.checkName()
