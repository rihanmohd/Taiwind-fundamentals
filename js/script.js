let inputText = document.getElementById("input-text");
let Text = document.querySelector(".under-text");


function Add(){
    if(inputText.value == ""){
        alert("Enter Task Firstly")
    }else{
        let newElement = document.createElement("li");
        newElement.className = "task";
        newElement.innerHTML = `<input type="checkbox">
        <span
        class="ok">${inputText.value}</span>
        <button class="delete-btn">Delete Task</button>`;
        Text.appendChild(newElement);
        inputText.value = "";
        newElement.querySelector("button").addEventListener("click", ()=>{ 
            newElement.innerHTML = "";
            
        // newElement.querySelector("input").addEventListener("click", ()=>{
        //         alert("working")
        //     span.style.textDecoration = "line-through";
          // })
          
        })

    }

}