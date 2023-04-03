"use strict";
// let userName:string;
// userName='1';
// let num:Number=12;
// type objtype={userName:string,age:Number};
// const obj:objtype = {
//     userName:'张三',
//     age:12
// };
// ======= TS中数据类型 ========
// let 变量名:Boolean = true;
// const 变量名3:string = 'sdad'
// var 变量名1:number = 123
// <-字面量-> 先声明变量，然后指定其变量的值可能出现的内容，然后赋值时只能赋予指定的内容选项
// let sex : '男' | '女';
// sex = '男'
// let statuss : '已送达' | '派送中' | '已送达';
// statuss = '已送达'
// (1) 字面量写法（使用?表示可选属性）
// let obj :{userName:string,sex:'男'|'女',age?:number}
// obj = {
//     userName:'123',
//     sex:'女',
//     age:12
// }
// (2) 字面量写法(只约束一个属性，其他属性不约束)
// let 变量名:{属性名1:属性的数据类型1,[自定义变量:String]:any}
// <-any 任意数据类型->。只要给变量声明的是any类型那么就无需在意值的类型
// let str:any= '123'
// function test(a:any) {
//     console.log(a);
// }
// <-unknown 任意数据类型->。通过该类型修饰的变量赋值给其他变量是需要使用判断，如果不使用判读会提示报错，无关判读的正确性
// let str:unknown="string";
// if(typeof str == 'string') {
//     let str1:string = str
// }
// 函数指定返回值的类型语法
// （1）有返回值
// function 函数名():数据类型 {
//     return 值； // 值的类型要和返回值的数据类型一致
// }
// （2）无返回值 void
// function fn():void {}
//  (3) 可选参数 如果设置了默认参数就不能给定其默认值
// function fn (num:number,str?:string):string {
//     return ''
// }
// function fn2 (num:number,str:string = ''):string {
//     return ''
// }
// <-never-> never类型表示没有返回值，连null和undefined都不返回，函数直接结束。
// 声明一个函数，函数没有返回值，通常这种函数用来为程序报错，代码立即结束
// function fn():never{
// throw new Error('报错')  需要throw抛出异常
// }
// Object 如果指定类型为Object无意义，因为所有数据类型都沿着原型链找到Object,所以没有意义
// 使用字面量对象，约束对象中所出现的属性名和属性名对应的类型
// const obj = {属性名1:数据类型,属性名2?:数据类型}
// 注意：?表示可选属性
// let obj:{userName:string,sex:'男'|'女',age?:number}
// obj = {
//     userName:'aaa',
//     sex:'男'
// }
// obj = {
//     userName:'aaa',
//     sex:'男',
//     age:123
// }
// Array 约束数组中的元素，以前在js中数组内可以存放任意数据类型，如果使用了TS，那么可以直接约束数组中只能出现统一的值类型
// ts中
// 1. let arr: 数据类型[] = [数组中的值的类型必须和要求的数据类型对应]
// 2.使用泛型 <>中间的就是泛型
// let arr:Array<数据类型> = [数组中的值的类型必须和泛型一致]
// 3. 多维数组
// let arr:Array<Array<string>> = []
// 4. 要求数组中必须存储的是一类的对象，对象有id,typeName,count可选属性
// let arr:Array<{id:number,typeName:string,coun?t:number}>
// let arr:number[]=[1,2,3,4]
// let arr2:Array<string> = ['123']
// type stuType = {userName:string,age:number,sex?:'男'|'女'}
// // 声明数组两种方法
// let objArr2:stuType[] = [
//     {   userName:'ddd',age: 12},
// ]
// let objArr:Array<stuType> = [
//     {   userName:'zzz',age: 12,sex: '女'},
// ]
// let arrs:Array<string[]> = [['123']] // 二维数组
// <-元组-> 指定数组的元素的个数以及每个元素所对应的数据类型
// let arr:['类型1','类型2'] = [值1，值2] // 注意前面约束了后面值的个数以及对应的类型
// type a = [string,number,{userName:string}]
// let arr:a = ['weq',123,{userName:'123'}]
// <-枚举-> 类似于对象，可以通过枚举名获取到属性的值
// enum 枚举名 {
//     枚举属性=值
// }
// 访问：枚举名：枚举属性
// enum url{
//     a = 'api/a',
//     b = 'api/b'
// }
// console.log(url.a);
// 逻辑预算符
//  | 或：表示多选一，可以有多个类型
// let 变量名：类型1|类型2 = 值 ， // 值类型何以是类型1也可以是类型2
// & 无使用意义
// 声明类型别名
// type 类型别名 = 自定义类型
// type objtype = {name:string,age:number}
// let a:Array<objtype> = [{
//     name :'123',
//     age:123
// }]
// let a2:objtype[] = [{
//     name :'123',
//     age:123
// }]
// type t=string|number|Boolean
// let num:t = 12
// 休止符
// function fn(...aa:number[]):number {
//     console.log(aa);
//     return 1
// }
// fn(1,2,3,4,1,123,2)
// 方法重载 只有一个函数体拥有实现的代码快，其余只有函数的声明没有具体代码的实现
// function fn(a:string):void
// function fn(a:any) {
//     console.log(a);
// }
// fn('')
// 总结：函数
// 函数在ts中的语法
//     function 函数名（形参：数据类型）：返回值类型{
//         return 值  // 次值的类型要和返回值的类型一致
//     }
// // 如果返回值类型为void则表示无返回值类型，此时函数体中没有return
// // 注意：ts中要求形式参数的个数以及类型要和调用时所传的实际参数的个数及类型一一对应
// 可选参数
//     function 函数名（形参1：数据类型，可选参数 ?:数据类型）：返回值类型 {
//         return 值 // 次值的类型要和返回值的类型一致
//     }
// 注意：可选参数类型需要定义在参数列表的最后
// 参数默认值
// function 函数名（形参1：数据类型，形参2:数据类型=值）：返回值类型 {
//     return 值 // 次值的类型要和返回值的类型一致
// }
// 注意：1.有默认值的形参都会定义在参数列表的最后面 2.一旦定义了默认值那么该参数就不可能是可选你参数
// 休止符
//     当需要接受很多实际参数且数量不定时可以使用休止符接受所有的时间参数，且接收到所有实际参数的集合为数组
//     function 函数名（...标识符：Array<参数的数据类型>）：返回值类型 {
//         return 值 // 次值的类型要和返回值的类型一致
//     }
// 函数的重载
//     // 方法重载 只有一个函数体拥有实现的代码快，其余只有函数的声明没有具体代码的实现
//     // function fn(a:string):void
//     // function fn(a:any) {
//     //     console.log(a);
//     // }
//     // fn('')
// 箭头函数
//     const 函数名 = (形参：数据类型)：返回值类型=> {}
// TS中的ES6语法
// ======== 1.类的声明 ========
// class 类名 {
//     // 声明类中的属性
//     属性名:数据类型
//     // 静态属性
//     static 属性名:数据类型
//     // 构造器
//     constructor (形参：数据类型) {
//         this.属性名 = 形参
//     }
//     // 原型方法
//     方法名(形参：数据类型) {
//         this.属性名 = 形参
//     }
//     // 静态方法 
//     static 方法名(形参：数据类型):返回值类型 {
//         console.log('静态方法');
//     }
//     // 注：静态属性和静态方法只能被类访问，不能为实例对象访问
// }
//     class Student {
//         // 声明类中的属性
//         userName:string
//         age:number
//         sex:'男'|'女'
//         static s:string = 'hello'  // 静态属性
//         // 构造器
//         constructor (userName:string,age:number,sex:'男'|'女') {
//             this.userName = userName
//             this.age = age
//             this.sex = sex
//         }
//         // 原型方法
//         函数名(nm:string) {
//             this.userName = nm
//         }
//         // 静态方法 
//         static 静态() {
//             console.log('静态方法');
//         }
//         // 注：静态属性和静态方法只能被类访问，不能为实例对象访问
//     }
//     const stu = new Student('张三',12,'女')
//     stu.函数名('如花')
//     Student.静态()
//     console.log(Student.s);
// ======= 继承 =======
class 父 {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class 子 extends 父 {
    constructor(sex) {
        super(userName, age);
        this.sex = sex;
    }
}
