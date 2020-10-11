import buildTaskList from './buildTaskList';

export const todoArr = [];
export const progressArr = [];
export const doneArr = [];


export default function getTask(e) {
    const target = e.target;
    const box = target.closest('.box');
    const form = box.querySelector('.form');
    const text = box.querySelector('.task-text');
    const taskContainer = box.querySelector('.task-container');
    const btn = box.querySelector('.btn-text');
    if (!text.value) {
        const msg = form.querySelector('.msg');
        msg.classList.remove('hidden');
        setTimeout(() => {
            msg.classList.add('hidden')
        }, 3000);
        return;
    };
    if (box.hasAttribute('data-todo')) {
        todoArr.push(text.value);
        buildTaskList(todoArr, taskContainer);
        text.value = '';
        form.classList.add('hidden');
        btn.classList.remove('hidden');
        return;
    } else if (box.hasAttribute('data-progress')) {
        progressArr.push(text.value);
        buildTaskList(progressArr, taskContainer);
        text.value = '';
        form.classList.add('hidden');
        btn.classList.remove('hidden');
        return;
    } else if (box.hasAttribute('data-done')) {
        doneArr.push(text.value);
        buildTaskList(doneArr, taskContainer);
        text.value = '';
        form.classList.add('hidden');
        btn.classList.remove('hidden');
        return;
    };           
};