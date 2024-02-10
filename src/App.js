import React from "react";

function App(){
  function fun() {
    let inputs = document.getElementById("inp");
    let text = document.querySelector(".text");
    if (inputs.value == "") {
      alert("ENTER SOMETHING");
    } else {
      let newEle = document.createElement("li");
      newEle.innerHTML = `${inputs.value}<i><i id="delete" class="fa fa-trash-o" color:black;margin-left:50px;">
      </i><i id="done" class="fa fa-check"></i></i>`;
      text.appendChild(newEle);
      inputs.value = "";
      newEle.querySelector("#delete").addEventListener("click", remove);
      function remove() {
        newEle.remove();
      }
      newEle.querySelector("#done").addEventListener("click", DONE);
      function DONE() {
        newEle.style.textDecoration = "line-through";
      }
    }
  }
  
  return(
    <div class="main">
    <h1>TO-DO-LIST</h1>
    <div class="input">
      <input type="text" id="inp" placeholder="ENTER HERE" />
      <button onClick={fun} id="button">ADD</button>

    </div>
    <div class="tex">
      <ol class="text"></ol>
    </div>
  </div>
  );
}
export default App;