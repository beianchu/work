# Es6简介

ECMAScript 6.0是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了，所以ES6语法又可以称为ECMAScript 2015。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

# Es6与JavaScript的关系

要讲清 `ECMAScript` 和 `JavaScript` 之间的关系，就需要回顾历史。1996 年 11 月，JavaScript 的创造者 `Netscape` 公司，决定将 JavaScript 提交给标准化组织 `ECMA`，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的`规格`，后者是前者的一种`实现`（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

# 新增方法



## 1.Let

​	特点：

​	1变量不能重复声明

​	2块级作用域

​	3不存在变量提升

​	4不影响作用域链

​		作用域链：作用域是在运行代码中的某些特定部分中的变量，函数和对象的可访问性。作用于就是一个独立的地盘，让变量不会外泄、报漏出去。也就是说作用于最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。

​		在es6之前只有全局作用域链和函数作用域链。只有在es6才有了块级作用域。

## 2.Const

​	

特点

​	1声明一个常量，且不可修改

​	2一般常量用大写（默认规则）

​	3块级作用域

​	4对于数组和对象的元素修改，不算对于常量的修改，不会报错。因为只是修改了内容并没有修改指针。

## 3.解构赋值

概念：ES6语序按照一定模式从数组和对象中提取值，对变量进行赋值

特点：

​	1数组的解构

```js
const F4=['aa','bb','cc','dd'];
	let [q,w,e,r]=F4
	log(q)	//aa
	log(w)	//bb
	log(e)	//cc
	log(r)	//dd
```

​	2对象的解构

```js
const zhao={
	name:'照无眠'，
	age:'988',
	xiaopin:function(){
	log('我可以👁')
	}
}
//常规赋值
let {name,age,xiaopin}=zhao
log(name)
log(age)
log(xiapin)
xiaopin()
//解构赋值
let{xiaopin}=zhao
xiaopin()

```

## 4.模板字符串

Es6引入新的声明字符串的方式 【``】' ',“ ”。

实际应用：

```html
1声明
	let str='我也是一个字符串嗷！'；
	log(str);
2内容中可以直接出现换行符
	let str=<ul>
				<li>沈腾</li>
				<li>沈腾</li>
				<li>沈腾</li>				
				<li>沈腾</li>
			</ul>
3变量拼接
	let name='刘翔'；
	let strs=`${name}是我心目中的英雄`;
	log(strs)
```

## 5.对象的简化写法

es6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法，这样写法使书写更加简洁。

实际写法

```js
//es6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
let name='清华北大'
let change =function(){
    log('我们可以做到的！')
}
const school={
    name,  //键值相等时的简写
    change,
    improve(){
        log('我们提高技能')
    }
}
log(school)
```

## 6.箭头函数

es6允许使用()=>{}定义函数

特点：

​	1this是动态的，this的值取决于函数本身如何被调用

​	2没有arguments伪数组，如果有那么是来自于父组件

​	3不能作为构造实例化对象

​	4箭头函数适合与this无关的回调，定时器，数组的方法回调等等

​	5箭头函数不适合与this有关的回调，事件回调，对象的方法

## 7.函数的默认值设置

```js
//ES6允许给函数参数赋值初始值
//1形参初始值，具有默认值的参数。一半位置靠后(潜规则)
functionv add(a,c=10,b){
    return a+b+c
}
let resuit=add(1,2)
log(resuit)//13

//2 与解构赋值结合
function content({host='127.0.0.1',username,password,post}){
    log(host)
    log(username)
    log(password)
    log(post)
}
```

## 8.reset参数

ES6引入reset参数用于获取函数的实参，用来代替arguments

Es5获取方法实通过使用arguments获取函数中的蚕食格式为数组

```js
//ES5
function date(){
	log(arguments)
}
date('白芷'，'阿娇'，'四惠')

//reset参数
function date(..ages){
    log(ages)
}
date('白芷'，'阿娇'，'四惠')

reset参数必须要放到参数最后
function fn(a,b,...args){
    log(a);//1
    log(b);//2
    log(args);//3,4,5,6
}
fn(1,2,3,4,5,6)
```

## 9.扩展运算符的概念

​	【...】扩展运算符能够将数组转化为逗号分割的参数序列