export default function hideCloseMark(e) {
    const closeEls = document.querySelectorAll('.close-task');
    closeEls.forEach(item => {
        item.classList.add('hidden');
    })
};