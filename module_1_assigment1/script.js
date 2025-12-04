const form = document.getElementById('todoform');
const input = document.getElementById('todoinput');
const todolist = document.getElementById('todolist');

form.addEventListener("submit",function(event){
    event.preventDefault();


    const li = document.createElement('li');
    li.textContent = input.value ;

    li.addEventListener("click",function(){
        li.style.textDecoration = "line-through";
    });
    todolist.appendChild(li);
    input.value= "";
})