

const onClickadd =()=> {
  const inputText =document.getElementById("add-text").value;
  document.getElementById("add-text").value ="";

  createElementIncompleteList(inputText);
};

document.getElementById(`add-button`).addEventListener("click",()=>onClickadd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList =(target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createElementIncompleteList =(text) =>{
//divを生成
const div =document.createElement("div");
div.className ="list-row"

//liを生成
const li =document.createElement("li");
li.innerText = text;


//buttoun(完了)タグ生成
const complateButton = document.createElement('button'); complateButton .innerText="完了";
complateButton.addEventListener("click",()=>{
// 押された完了ボタンの親タグ(div)を未完了リストから削除
deleteFromIncompleteList(complateButton.parentNode);
//完了リストに追加する要素
  const addTarget = complateButton.parentNode;
  //TODO内容テキストを取得
  const text =addTarget.firstElementChild.innerText;
  //div以下を初期化
  addTarget.textContent =null;
//liタグを作成
const li =document.createElement("li")
li.innerText= text;

//buttonタグ生成
const backButton =document.createElement("button");
backButton.innerText="戻す";
backButton.addEventListener("click",()=>{
//押された戻すボタンのタグ(div)を完了リストから削除
const deleteTarget =backButton.parentNode;
document.getElementById("complete-list").removeChild(deleteTarget);

//テキストを取得
const text =backButton.parentNode.firstElementChild.innerText;
console.log(text);
createElementIncompleteList (text);

});

//divタグの子要素に各要素を設定
addTarget.appendChild(li);
addTarget.appendChild(backButton);
//完了リストに追加
document.getElementById("complete-list").appendChild(addTarget)
});

//button(削除)の生成
const delateButton =document.createElement('button');
delateButton.innerText ="削除";
// 押された削除ボタンの親タグ(div)を未完了リストから削除
delateButton.addEventListener("click",()=>{
  deleteFromIncompleteList(delateButton.parentNode);
});

//divタグの子要素に各要素を設定
div.appendChild(li)
div.appendChild(complateButton);
div.appendChild(delateButton);

//未完了のリストに追加
document.getElementById("incomplete-list").appendChild(div);
};
