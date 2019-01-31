/*定义一个人类*/  
    function Person(name,age)  
    {  
        this.name=name;  
        this.age=age;  
    }  
    /*定义一个学生类*/  
    function Student(name,age,grade)  
    {  
        Person.apply(this,arguments);  //此处的this指代的是Student  而 arguments是个参数数组
        this.grade=grade;  
    }  
    //创建一个学生类  
    var student=new Student("zhangsan",21,"一年级");  
    //测试  
    console.log("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);  
    //大家可以看到测试结果name:zhangsan age:21  grade:一年级  
    //学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.  