//①コンストで定義したオブジェクトは変更が可能
// const val4 = {
//   name:"じゃけぇ",
//   age:28,
// };
// val4.name =~"jak";
// val4.addres ="Hirohimo";
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0] = "bird"
// val5.push("monkey");
// console.log(val5);

//② テンプレート文字列
// const name ="としたか"
// const age =28;

//私の名前はとしたかです。

//従来の方法
// const message1 ="私の名前は"+ name + "です。年齢は"+age+"です";
// console.log (message1);

//テンプレートを使う方法
// const message2=`私の名前は${name} です。年齢は${age}です`;
// console.log(message2)

//③アロー関数
　// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 =function(str) {
// return str;
// }
// console.log(func1('fanc1です'));

// const func2 = (str) => {
//   return str;
// }

// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1+num2;
// }

// console.log(func3(20,5))

// ④分割代入
// const myprofile = {
//   name :"としたか",
//   age: 22,
// };

//     const message1 =`名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`
// console.log (message1);

// const {name, age} =myprofile;
// const message2 =`名前は${name}です。年齢は${age}歳です。`
// console.log (message2);

// const myprofile =['としたか',22];

// const message3 =`名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`
// console.log (message3);

// const [name,age] =myprofile;
// const message4 =`名前は${name}です。年齢は${age}歳です。`;
// console.log (message4);

//⑤デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんににちは${name}さん`);
// sayHello ("としたか");

//⑥スプレッド構文...
//配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log (arr4);
// const arr7 = [...arr4,...arr5];
// console.log (arr7)

//⑦mapやfileを使った配列の処理
const nameArr =["田中","山田","としたか"];
// for ( let index =0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log (nameArr2);

// nameArr.map((name,)=> console.log(`${name}です。`)
// );

// const numArr= [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num%2 ===1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "としたか"){
//     return name;
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//⑧三項演算子
// ある条件？条件がtrueの時: 条件がfolseの時
// const vall = 1> 0? `trueです`: `falseです`;
// console.log(vall);

//  const num ="1300";
// const formattedNum =typeof num === 'number'? num.toLocaleString():"数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1,num2)=> {
//   return num1+num2 > 100 ? `100を超えています！！`:`許容範囲内です`;
// }
// console.log(checkSum(20,90));

//⑨理論演算子の本当の意味を知ろう && ||
// const flag1 =true;
// const flag2 =false;
// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }
// if(flag1 && lag2){
//   console.log("1も2もtrueになります");
// }
//||は左側がfalseなら右側をかえす
// const num = null;
// const fee =num || "金額は未設定です"; 
// console.log(fee);
//左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 &&"何か設定されました";
// console.log(fee2);
