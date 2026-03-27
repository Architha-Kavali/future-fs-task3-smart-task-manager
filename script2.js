function login(){

let username = document.getElementById("username").value;

if(username===""){
alert("Enter username");
return;
}

localStorage.setItem("user",username);

window.location.href="dashboard.html";

}

function logout(){

localStorage.removeItem("user");

window.location.href="index.html";

}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){

let list = document.getElementById("taskList");

if(!list) return;

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML += `
<li>
<span onclick="toggleTask(${index})" class="${task.done?'done':''}">
<i class="fa-solid fa-check-circle"></i> ${task.text}
</span>

<button class="delete" onclick="deleteTask(${index})">
<i class="fa-solid fa-trash"></i>
</button>
</li>
`;

});

updateStats();

}

function addTask(){

let input=document.getElementById("taskInput");

if(input.value==="") return;

tasks.push({text:input.value,done:false});

localStorage.setItem("tasks",JSON.stringify(tasks));

input.value="";

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function toggleTask(index){

tasks[index].done=!tasks[index].done;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function updateStats(){

let total=document.getElementById("total");
let completed=document.getElementById("completed");

if(!total) return;

let doneCount = tasks.filter(t=>t.done).length;

total.textContent = tasks.length;
completed.textContent = doneCount;

}

function toggleTheme(){

document.body.classList.toggle("dark");

}

displayTasks();