##Es6

#### 1.includes方法  判断数组或集合中有没有参数
 比indexOf()方法好在不用判断-1
####2. 函数默认值
```
function action(num = 200) {
        console.log(num)
    }
    action() //200
    action(300) //300
```
####3. 解构赋值和解构取值
```
//对象
    const people = {
        name: 'lux',
        age: 20
    }
    const { name, age } = people
    console.log(`${name} --- ${age}`)
    //数组
    const color = ['red', 'blue']
    const [first, second] = color
    console.log(first) //'red'
    console.log(second) //'blue'
```
####4. 展开运算符...
```
const first = {
        a: 1,
        b: 2,
        c: 6,
    }
    const second = {
        c: 3,
        d: 4
    }
    const total = { ...first, ...second }
    console.log(total) // { a: 1, b: 2, c: 3, d: 4 }
```



##Es7+Es8
#### 1.幂运算符**
```
3 ** 2           // 9
```
#### 2.Object.entries()和Object.values()
```
Object.entries({ one: 1, two: 2 })    //[['one', 1], ['two', 2]]
Object.entries([1, 2])                //[['0', 1], ['1', 2]]

Object.values({ one: 1, two: 2 })            //[1, 2]
Object.values({ 3: 'a', 4: 'b', 1: 'c' })    //['c', 'a', 'b']
```

#### 3.字符串填充：padStart和padEnd
```
//默认空格填充
'Vue'.padStart(10)           //'       Vue'
'React'.padStart(10)         //'     React'
'JavaScript'.padStart(10)    //'JavaScript'
//用符号来填充
'Vue'.padStart(10, '_*')           //'_*_*_*_Vue'
'React'.padStart(10, 'Hello')      //'HelloReact'
'JavaScript'.padStart(10, 'Hi')    //'JavaScript'
'JavaScript'.padStart(8, 'Hi')     //'JavaScript'
```