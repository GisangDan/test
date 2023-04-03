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
    // 子类继承父类
        // 子类后面使用extends继承父类
        // 子类构造函数中的第一句要使用super调用父类的构造函数（现有父后又子）
        // class 父类{}
        // class 子类 extends 父类 {
        //     constructor() {
        //         super()
        //     }
        // }
    // class 父 {
    //     protected userName:string;
    //     age:number;
    //     constructor(userName:string,age:number) {
    //         this.userName = userName
    //         this.age = age
    //     }
    // }

    // class 子 extends 父{
    //     sex: '男' | '女' 
    //     constructor(userName:string,age:number,sex:'男'|'女') {
    //         super(userName,age) // super 用来调用父类的构造函数
    //         this.sex = sex
    //     }
    //     getuserNmae() {
    //         console.log(this.userName);
            
    //     }
    // }

    // const z = new 子( '如花',12,'女')

// ======= 访问修饰符 ======= 主要用来封装思想 私有化属性（将所有属性全部都用private修饰），暴露公共方法（方法可以被外部访问，使用public修饰）
    // 修饰了属性能够被访问到范围
    // public:公有的，被public修饰的属性为公共属性，被public修饰的方法为公共方法，可以在类中、子类、在类的外部访问
    // protected:保护类型，可以在类中，子类里面访问，不能在类的外部访问
    // private:私有的、只能在类中访问，不能在子类和其他类的外部访问
    // 访问修饰符的范围大小：public>protected>private
    // console.log(z.userName);

    // class student {
    //     // 私有化属性
    //     private userName :string

    //     constructor(userName:string) {
    //         this.userName = userName
    //     }

    //     // 暴露公共方法
    //     public getuserNmage():string {
    //         return this.userName
    //     }

    // }
    // const stu = new student('aaa')
    // console.log(stu.getuserNmage());


// ======= 多态 ======= 同一接口，使用不同的实例而执行不同操作
// 多态实现方法：1.使用方法重写  2.使用抽象类  3.使用接口实现多态
// 1.使用方法重写
        // 子类重写父类中的方法，必须建立在继承的关系上
    // class Person {
    //     sex :'男' |'女'
    //     constructor (sex:'男' |'女') {
    //         this.sex = sex
    //     }
    //     study() {
    //         console.log('父类中方法');
    //     }
    // }

    // class student extends Person{
    //     // 私有化属性
    //     private userName :string
    //     constructor(userName:string,sex :'男' |'女') {
    //         super(sex)
    //         this.userName = userName
    //     }
    //     // 暴露公共方法
    //     public getuserNmage():string {
    //         return this.userName
    //     }
    //     study() {
    //         console.log('子类中方法');
    //     }
    // }
    // //  创建父类对象
    // const p =new Person('女')
    // p.study()
    // // 床架子类对象
    // const s = new student('asd','女')
    // s.study()

// 2.使用抽象类和抽象方法实现多态
    // 抽象类：使用abstract关键字定义的类为抽象类，否则没有任何意义。抽象类中可以有抽象方法也可以有实现方法，建议一个抽象类中必须要包含一个抽象方法，否则没有任何意义。
    //     抽象类也不能被实例化
    // 抽象方法：抽象方法只能存在于抽象类中，方法没有具体的实现代码，必须使用abstarct进行修饰

    // 抽象类  抽象类中可以有标准方法也可以有抽象方法（抽象方法是没有具体实现的）,只要继承了这个抽象类的类都必须重写父类中的抽象方法

    // abstract class 类名 {
    //     方法名():返回值类型
    // }
    // 只要继承了这个抽象类的子类都必须重写父类中的抽象方法

    // abstract class c {
    //     eat() {
    //         console.log('吃饭');
    //     }
    //     abstract fn():void
    // }

    // class S extends c{
    //     fn():void {
    //     }
    // }

    // class A extends c {
    //     fn(): void {
            
    //     }
    // }


// 3.使用接口实现多态  
// （1）类接口
    // 约束了实现这个接口的类必须包含哪些内容
    // interface 接口名 {
        // 属性名：数据类型 // 定义属性约束
        // 方法名（参数名：参数类型）：方法返回值类型  // 定义方法约束
    // }
// interface A {
//     userName:string
//     fn():void
// }
// class B implements A {
//     userName:string
//     constructor(userName:string) {
//         this.userName = userName
//     }
//     fn(): void {
        
//     }
// }

// （2）属性类接口
// interface 接口名 {
//     属性：类型名
// }
// 可以约束一个对象中应该有的属性
// const 对象名：接口名= {
//     属性：值
// }
// interface objType {
//     userName:string,
//     age:Number,
//     sex?:'男'|'女'
// }
// class student implements objType {
//     userName:string
//     age:Number
//     sex?:'男'|'女'
//     constructor( userName:string,age:Number,sex?:'男'|'女') {
//         this.userName = userName
//         this.age = age
//         this.sex = sex
//     }
// }
// const obj:objType = new student('如花',18,'女')

// （3）函数类接口
// interface 接口名 {
//     （形参：参数类型）：返回值类型
// }
// const 函数名：接口名 = （形参：参数类型）=> {}
// interface in_fn{
//     (userName:string):void
// }
// const fn :in_fn = (userName:string):void => {}

// （4）接口与接口继承
// js是单线程的，只允许单继承。但是可以有多实现链式继承（一个类可以实现多个接口）
// interface A{
//     userName :string
// }
// interface B extends A {
//     age:number
// }
// interface C extends B {
//     sex:'男'|'女'
// }
// class 类名 implements C {
//     // 此时ABC三个接口中的所有约束都要实现
//     userName :string
//     sex: "男" | "女"
//     age: number
//     constructor(sex: "男" | "女",age: number,userName :string) {
//         this.sex = sex
//         this.age = age
//         this.userName = userName
//     }
// }

// interface A {
//     userName :string
// }
// interface B extends A {
//     age:number
// }
// class C implements B,A{
//     userName :string
//     age:number
//     constructor (userName :string,age:number) {
//         this.userName = userName
//         this.age = age
//     }

// }

// （5）多接口实现
// interface A{}
// interface B{}
// interface C{}
// class 类名 implements A,B,C {
//     // 多实现多个接口之间使用逗号分割，此时ABC三个接口中的所有约束都要实现
// }


// <----泛型---->
// 函数泛型 先用一个别名代替确切的数据类型，然后在实例时指定这个数据类型
// 要求函数的传入的参数的数据类型和返回值的类型一致
// string Number Boolean

// function fn1(str:string):string {
//     return ''
// }
// function fn2(num:Number):Number {
//     return 12
// }
// function fn3(bo:Boolean):Boolean {
//     return true
// }
// // any 没有办法具体推断
// function fn4(aa:any):any {
//     return true
// }

// 泛型  其中T就是一个泛型，在调用时执行
// function fn<T>(aa:T):T {
//     return aa
// }
// fn<string>('')
// fn<Number>(123)
// fn<Boolean>(true)

// class A <T,A,B> {
//     userName: T
//     age:A
//     sex:B
//     constructor(userName: T,age:A,sex:B,) {
//         this.userName = userName
//         this.age = age
//         this.sex = sex
//     }
// }
// const stu = new A<string,Number,'男'|'女'>('',123,'女')







    
    







    









 

