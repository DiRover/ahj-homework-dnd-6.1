import closeForm from './closeForm';
import showForm from './showForm';
import showCloseMark from './showCloseMark';
import hideCloseMark from './hideCloseMark';
import getTask from './getTask';

const addBtns = document.querySelectorAll('[data-btn="add"]');
const close = document.querySelectorAll('.close');
const todoBtn = document.querySelector('[data-add="todo"]');
const progressBtn = document.querySelector('[data-add="progress"]');
const doneBtn = document.querySelector('[data-add="done"]');
const boxes = document.querySelectorAll('.box');
const containers = document.querySelectorAll('.task-container');
let draggedItem;

boxes.forEach(item => item.addEventListener('mouseover', showCloseMark));
boxes.forEach(item => item.addEventListener('mouseleave', hideCloseMark));

todoBtn.addEventListener('click', showForm);
progressBtn.addEventListener('click', showForm);
doneBtn.addEventListener('click', showForm);

close.forEach(item => item.addEventListener('click', closeForm));
addBtns.forEach(item => item.addEventListener('click', getTask));

containers.forEach(item => item.addEventListener('mousedown', dragg));

function onDrag(e) {
    console.log(e);
}

function dragg(e) {
    draggedItem = e.target;
    if (!draggedItem.hasAttribute('data-task')) return;
    draggedItem.classList.add('dragged');
    const container = draggedItem.closest('.task-container');
    container.addEventListener('mousemove', onDrag);
    
    console.log(e.target);
}
