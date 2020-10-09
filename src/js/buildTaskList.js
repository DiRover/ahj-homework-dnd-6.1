/* eslint-disable no-param-reassign */
export default function buildTaskList(arr, containerTask) {
  containerTask.innerHTML = '';
  arr.forEach((data) => {
    const elem = document.createElement('div');
    elem.classList.add('task');
    elem.innerHTML = `<p class="text">${data}</p>`;
    containerTask.appendChild(elem);
  });
}
