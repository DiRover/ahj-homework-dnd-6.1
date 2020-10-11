/* eslint-disable no-param-reassign */
export default function buildTaskList(arr, containerTask) {
  containerTask.innerHTML = '';
  arr.forEach((data) => {
    const elem = document.createElement('div');
    elem.classList.add('task');
    elem.setAttribute('data-task', 'task');
    elem.innerHTML = `<p class="text">${data}</p><div class="close-task hidden" data-close="close">&#10006</div>`;
    containerTask.appendChild(elem);
  });
}
