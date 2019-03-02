// console.log("hi this is console");

// let taskList = [];
//
// let taskInput = ''
//
//
// do {
//   taskInput=prompt('Enter text');
//   taskList.push(taskInput);
//   console.log(taskList)
// } while (taskInput!='quit');
//
// console.log("Now sarts second part");
//
// taskList.forEach(function (e) {
//   console.log(e)
//
// })

let taskField = document.getElementById('taskField');
let button = document.getElementById('taskButton');

let taskList = document.querySelector('#taskList')

button.onclick = function() {
  console.log("button clicked :)");

  let newTask = document.createElement('LI');

  let newText=taskField.value;
  let newTextNode=document.createTextNode(newText);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  newTask.appendChild(checkbox);


  newTask.appendChild(newTextNode)
  taskList.appendChild(newTask)
}



console.log(taskField);
