//コンストで定義したオブジェクトは変更が可能
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

// テンプレート文字列
// const name ="としたか"
// const age =28;

//私の名前はとしたかです。

//従来の方法
// const message1 ="私の名前は"+ name + "です。年齢は"+age+"です";
// console.log (message1);

//テンプレートを使う方法
// const message2=`私の名前は${name} です。年齢は${age}です`;
// console.log(message2)

//アロー関数
　// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 =function(str) {
// return str;
// }
// console.log(func1('fanc1です'));

const func2 = (str) => {
  return str;
}

console.log(func2("func2です"));

const func3 = (num1,num2) => {
  return num1+num2;
}

console.log(func3(20,5))

