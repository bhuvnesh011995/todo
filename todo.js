// get elements
let form = getElement("addForm");
let filter = getElement("filter");
let todos = getElement("todos");
let todo = getElement("todo");
const liItems = document.getElementsByTagName("li");
// let inp = document.getElementsByClassName("inpValue");



//event listener 

form.addEventListener("submit", addTodo);
todos.addEventListener("click", removeTodo );
todos.addEventListener("click", editer);
filter.addEventListener("keyup", SearchTodos);







// printing from local storage
let locSto = Object.keys(localStorage).sort();
for(i=0;i<locSto.length;i++){
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-item-row";
    li.value= locSto[i]

    let input1 = document.createElement("input");
    input1.className = "form-check-input";
    input1.type = "checkbox";
    li.appendChild(input1);
    
   

    let innerContnt = document.createElement("div");
    innerContnt.className="inpValue";
    innerContnt.innerText = localStorage.getItem(locSto[i]);
    li.append(innerContnt);
    todo.value ="";


    let input2 = document.createElement("input");
    input2.className = "form-control d-none";
    input2.type = "text";
    li.append(input2);
    


    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm edit";
    editBtn.value = value="";
    editBtn.innerText = "edit";
    li.append(editBtn);


    todos.append(li)
    // let li = document.createElement('li');
    // li.className = "list-group-item"
    // li.innerText = localStorage.getItem(locSto[i]);

    // let deleteButton = document.createElement("button");
    // deleteButton.className = "btn btn-danger btn-sm delete";
    // deleteButton.value = locSto[i];
    // deleteButton.innerText = "delete";
    // li.append(deleteButton);
    // todos.append(li)
};
function valOfBtn(j){
    locSto = Object.keys(localStorage).sort();
    for(j;j<locSto.length;j++){
        for(i=j;i<locSto.length;i++){
            if(j!=locSto[i]){
                return j;
            }
            if(j==locSto[i]){
                break;
            }
        }
    }
    return j;
}








// functions

function getElement(id){
    return document.getElementById(id);
}

// adding a task

function addTodo(e){
    e.preventDefault();

    let newTodo = todo.value;
    if(newTodo === "") return;
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-item-row";
    li.value= valOfBtn(0)

    let input1 = document.createElement("input");
    input1.className = "form-check-input";
    input1.type = "checkbox";
    li.appendChild(input1);
    
   

    let innerContnt = document.createElement("div");
    innerContnt.className="inpValue";
    innerContnt.innerText = newTodo;
    li.append(innerContnt);
    todo.value ="";


    let input2 = document.createElement("input");
    input2.className = "form-control d-none";
    input2.type = "text";
    li.append(input2);
    


    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm edit";
    editBtn.value = value="";
    editBtn.innerText = "edit";
    li.append(editBtn);




    
    todos.append(li)
    localStorage.setItem(valOfBtn(0),newTodo)
    return;
};

function removeTodo(e){
    if(e.target.checked){
            let li = e.target.parentElement;
            todos.removeChild(li);
        i = e.target.parentElement.value;
        localStorage.removeItem(i);
        return;
   }
}
function SearchTodos(e){
    let searchText = e.target.value.toLowerCase();
   Array.from (liItems).forEach(item=>{
    let todoName = item.firstChild.textContent;
    if(todoName.toLowerCase().indexOf(searchText)!=-1){
        item.style.display = "block";
    } else{
        item.style.display = "none";
    }
    })
    return;
}


function editer(e){
    let Div = e.target.previousElementSibling.previousElementSibling;
        let inpbtn = e.target.previousElementSibling;
    if(e.target.classList.contains("edit")){
        Div.className = "d-none";
        inpbtn.className = "form-control";
        inpbtn.value = Div.innerText;
        e.target.innerText = "add";
        e.target.className = "btn btn-danger btn-sm add"
    }
    else if(e.target.classList.contains("add")){
        Div.className="";
        Div.innerText= inpbtn.value;
        inpbtn.className="form-control d-none";
        e.target.innerText = "edit";
        e.target.className = "btn btn-primary btn-sm edit"
    }
    return;
}


// saving data in local storage

let savaData = function(e){
    localStorage.setItem("0","devesh");
        localStorage.setItem("1","bhuvnesh");
        localStorage.setItem("2","ram");
        localStorage.setItem("4","mohan");
        localStorage.setItem("5","suresh");
        localStorage.setItem("6","arti");
    return;
}
// console.log(localStorage.getItem(1));
// console.log(localStorage.getItem("name"));
// savaData();
