const scanf=require('scanf');
const Sequelize=require('sequelize');  //首字母必须大写


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
