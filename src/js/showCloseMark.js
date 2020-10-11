import buildTaskList from './buildTaskList';
import { todoArr, progressArr, doneArr } from './getTask';

export default function showCloseMark(e) {
    const elem = e.relatedTarget;
    if (elem.hasAttribute('data-task')) {
        const close = elem.querySelector('.close-task');
        close.classList.remove('hidden');
        close.addEventListener('click', () => {
            const target = e.target;
            if (target.hasAttribute('data-close')) {
                const taskBox = target.closest('.task');
                const textEl = taskBox.querySelector('.text');
                const box = textEl.closest('.box');
                if (box === null) return;
                const taskContainer = box.querySelector('.task-container');
                const text = textEl.textContent;
                if (box.hasAttribute('data-todo')) {
                    const index = todoArr.indexOf(text);
                    todoArr.splice(index, 1);
                    buildTaskList(todoArr, taskContainer);
                } else if (box.hasAttribute('data-progress')) {
                    const index = progressArr.indexOf(text);
                    progressArr.splice(index, 1);
                    buildTaskList(progressArr, taskContainer);
                    return;
                } else if (box.hasAttribute('data-done')) {
                    const index = doneArr.indexOf(text);
                    doneArr.splice(index, 1);
                    buildTaskList(doneArr, taskContainer);
                    return;
                };
            }
        })
    }
};
