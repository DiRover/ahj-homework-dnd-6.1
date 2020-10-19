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
const con = document.querySelector('.container');
let draggedItem;
let sortingItem;

boxes.forEach(item => item.addEventListener('mouseover', showCloseMark));
boxes.forEach(item => item.addEventListener('mouseleave', hideCloseMark));

todoBtn.addEventListener('click', showForm);
progressBtn.addEventListener('click', showForm);
doneBtn.addEventListener('click', showForm);

close.forEach(item => item.addEventListener('click', closeForm));
addBtns.forEach(item => item.addEventListener('click', getTask));

containers.forEach(item => item.addEventListener('mousedown', dragg));
//con.addEventListener('mousedown', dragg);

function onDrag(e) {
    console.log(e);
    draggedItem.style.top = `${e.layerY}px`;
    draggedItem.style.left = `${e.layerX}px`;
}

function dragg(e) {
    draggedItem = e.target.cloneNode(true);
    sortingItem = e.target;
    if (!sortingItem.hasAttribute('data-task')) return;
    draggedItem.classList.add('dragged');
    const container = sortingItem.closest('.container');
    container.addEventListener('mousemove', onDrag);
    container.addEventListener('mouseup', (e) => {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        container.insertBefore(sortingItem, element);
        draggedItem.classList.remove('dragged');
        draggedItem.style.top = undefined;
        draggedItem.style.left = undefined;
        //draggedItem = undefined;
        container.removeEventListener('mousemove', onDrag);
    })    
    console.log(e.target);
}
