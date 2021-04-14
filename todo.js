

const onClickadd =()=> {
  const inputText =document.getElementById("add-text").value;
  document.getElementById("add-text").value ="";

//divを生成
const div =document.createElement("div");
div.className ="list-row"

//liを生成
const li =document.createElement("li");
li.innerText = inputText;

button

//divタグの子要素に各要素を設定
div.appendChild(li)
console.log(div)

//未完了のリストに追加
document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById(`add-button`).addEventListener("click",()=>onClickadd());

