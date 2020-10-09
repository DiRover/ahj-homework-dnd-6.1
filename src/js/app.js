import buildTaskList from './buildTaskList';
import buildTasklist from './buildTaskList';

const btns = document.querySelectorAll('.add-btn');
const formq = document.getElementById('id');
const btnw = document.querySelector('[data-btn="add"]');
const todoArr = [];
const progressArr = [];
const doneArr = [];
const todoBtn = document.querySelector('[data-add="todo"]');
const progressBtn = document.querySelector('[data-add="progress"]');
const doneBtn = document.querySelector('[data-add="done"]');
let parent;
let form;

todoBtn.addEventListener('click', getTask);
progressBtn.addEventListener('click', getTask);
doneBtn.addEventListener('click', getTask);

function getTask() {
    const btn = event.target;
    btn.classList.add('hidden');
        parent = btn.closest('.box');
        form = parent.querySelector('.form');
        form.classList.remove('hidden');
        const text = document.querySelector('.task-text');
        const x = form.querySelector('.close');
        const msg = form.querySelector('.msg');
        x.addEventListener('click', ()=> {
            form.classList.add('hidden');
            btn.classList.remove('hidden');
        });
        const taskContainer = parent.querySelector('.task-container');
        const button = form.querySelector('[data-btn="add"]');
        button.addEventListener('click', () => {
            if (!text.value) {
                msg.classList.remove('hidden');
                setTimeout(() => {
                    msg.classList.add('hidden')
                }, 3000);
                return;
            }
            if (parent.hasAttribute('data-todo')) {
                todoArr.push(text.value);
                buildTaskList(todoArr, taskContainer);
                text.value = '';
                form.classList.add('hidden');
                btn.classList.remove('hidden');
                return;
            } else if (parent.hasAttribute('data-progress')) {
                progressArr.push(text.value);
                buildTaskList(progressArr, taskContainer);
                form.classList.add('hidden');
                btn.classList.remove('hidden');
                return;
            } else if (parent.hasAttribute('data-done')) {
                doneArr.push(text.value);
                buildTaskList(doneArr, taskContainer);
                form.classList.add('hidden');
                btn.classList.remove('hidden');
                return;
            }

        })
};

