// get elements
let form = getElement("addForm");
let filter = getElement("filter");
let todos = getElement("todos");
let todo = getElement("todo");
const liItems = document.getElementsByTagName("li");





//event listener 

form.addEventListener("submit", addTodo);
todos.addEventListener("click", removeTodo);
filter.addEventListener("keyup", SearchTodos);






// printing from local storage
let locSto = Object.keys(localStorage).sort();
for(i=0;i<locSto.length;i++){
    let li = document.createElement('li');
    li.className = "list-group-item"
    li.innerText = localStorage.getItem(locSto[i]);

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm delete";
    deleteButton.value = locSto[i];
    deleteButton.innerText = "delete";
    li.append(deleteButton);
    todos.append(li)
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
    li.className = "list-group-item"
    li.innerText = newTodo;
    todo.value ="";

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm delete";
    deleteButton.innerText = "delete";
    deleteButton.value = valOfBtn(0);
    li.append(deleteButton);
    todos.append(li)
    localStorage.setItem(valOfBtn(0),newTodo)
    return;
};

function removeTodo(e){
    if(e.target.classList.contains("delete")){
        let result = confirm("are you sure?");
        if(result){
            let li = e.target.parentElement;
            todos.removeChild(li);
        }
        else {
            return;
        } 
        i = e.target.value;
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
