const scanf=require('scanf');
const Sequelize=require('sequelize');  //首字母必须大写
/*今天看一看ES 6
关于scanf，scanf类似与C语言中输出语句printf,但是在ES 6项目中需要先引入scanf插件，才可以使用，得联网
做ES6 项目，先创建一个文件夹，然后在文件夹中创建一个js文件，你们可以先在我给你们发下去得ES文件中创建一个js文件
1、先将ES 6文件用vscode打开，在ES 6文件中创建一个demo.js文件

2、假设，咱们这个ES 6文件是个只有demo.js的文件夹，其他东西都没有，咱们得先需要对咱们的这个项目（demo.js）进行初始化,
怎样初始化那，需要先打开demo.js文件，然后打开终端，在终端里面输入npm init,回车即可！
因为没有网，所以咱们用我已经给大家下载好的依赖，就可以

3、这样咱们的项目就已经初始化完成，下面我们就可以进行ES 6开发，对了你们知道什么是ES 6吗？

ES 6：简单来说，他其实就是JavaScript，只不过他是最新的JavaScript，就是新一代的JS标准，原名叫JavaScript 2015（不用记，知道就行）
4、下面开始写代码，在写代码之前咱们需要先引入一个东西，就是scanf,如下代码，需要先require一个scanf，这里我们引入以后还不能直接使用，、
因为我们没有下载与之相关的插件，我们需要在命令行中执行npm i scanf(得联网去下载)

5、如果下载依赖成功，就可以使用scanf了，下面你们就可以在这个demo.js文件中，按照我发给你们那个ES6 编程.pdf文件，看着里面代码尝试一下。

6、开始联系吧小伙子们，看给大家发es6编程.pdf文件

7、再说一点，刚才忘了说，你们写完代码需要运行，在终端里面运行一个项目，
比如说项目的文件名叫demo.js，那么终端里面就写node demo/demo.js,demo可以加.js也可以不加
先将scanf给一个变量，然后在输出
注意：console.log(+a+b)输出的不是两个数相加，而是两个数拼接,如果需要写相加的和，应先将console中a+b括起来，看下面
或者给a+b赋一个新的变量c,输出c
*/

// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));


// console.log('欢迎进入xx系统');
// while(1){
//     console.log('1------');
//     console.log('2------');
//     console.log('3------');
//     console.log('4------');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1-1-----');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('1-2-----');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('1-3-----');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('1-4-----');
//         console.log('点击回车继续');
//         break;
//     }
// }

// 

        // const seq=new Sequelize('es6','root','',{dialect:'mysql'});   // 连接数据库名字为es6
        // const Point=seq.define('point',{//定义数据模型，point数据库表名称，再数据库生成时会自动加s
        //     x:Sequelize.INTEGER,
        //     y:Sequelize.INTEGER,
        //     },{
        //     //如果设置此字段，数据库中表名不会增加s,数据表名则与此处设置的数据模型point一致
        //     freezeTableName:true,
        //     });
        //     // 3、同步数据库
        //     seq.sync();


        //     console.log('欢迎进入坐标管理系统');//启动logo
        //     async function main(){ //对函数内代码进行封装
        //     while(1){
        //     console.log('1---添加一个坐标');
        //     console.log('2---显示全部坐标');
        //     console.log('3---通过id删除指定坐标');
        //     console.log('4---退出');
        //     let con=scanf('%d'); //输入一个数字
        //     if(con===1){
        //     console.log('1---添加一个坐标');
        //     console.log('请输入横坐标：');
        //     let x=scanf('%d');
        //     console.log('请输入纵坐标：');
        //     let y=scanf('%d');
        //     let zuobiao={
        //     'x':x,
        //     'y':y
        //     };
        //     // arr.push(zuobiao); //往数组中添加一个数字
        //     //向数据库中保存数据
        //     await Point.create(zuobiao);
        //     console.log('添加坐标成功');
        //     scanf('%d');
        //     }
        //     if(con===2){
        //     console.log('2---显示全部坐标');
        //     //findALL获取书库中所有数据
        //     let arr=await Point.findAll();
        //     for(let i=0;i<arr.length;i++){
        //     let syk=arr[i];
        //     // console.log(syk);
        //     console.log(`坐标id:${syk.id}坐标为(${syk.x},${syk.y})`);
        //     }
        //     console.log('点击回车继续');
        //     scanf('%d');
        //     }
        //     if(con===3){
        //     console.log('3---通过id删除指定坐标');
        //     let id=scanf('%d');
        //     // arr.pop(); //删除数组中最后一个数字
        //     await Point.destroy({
        //     where:{
        //     'id':id
        //     }
        //     });
        //     console.log('删除坐标成功');
        //     scanf('%d');
        //     }
        //     if(con===4){
        //     console.log('退出');
        //     break;
        //     }
        //     }
        //     }
        //     main(); //执行main()函数


// 

console.log('欢迎进学生成绩系统');
// 定义数组
let arr=[];
while(1){
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个学生学科成绩');
    console.log('4---退出');
    let con=scanf('%d');  //输入一个数字
    if(con===1){
        console.log('1---添加一个学生学科成绩');
        console.log('请输入学生姓名：');
        let xingming=scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue=scanf('%d');
        let student={
            'xingming':xingming,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
        arr.push(student);  //往数组中添加一个数字
        console.log('添加成绩成功');
        scanf('%d');
    }
    if(con===2){
        console.log('2---显示全部学生学科成绩');
        for(let i=0;i<arr.length;i++){
            let syk=arr[i];
            // console.log(syk);
            console.log(`学生：${syk.xingming}\n语文：${syk.yuwen}\n数学：${syk.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(con===3){
        console.log('3---删除最后一个学生学科成绩');
        arr.pop();  //删除数组中最后一个数字
        console.log('删除最后一名学生成绩成功');
        scanf('%d');
    }
    if(con===4){
        console.log('退出');
        break;
    }
}