export default function closeForm(e) {
    const target = e.target;
    const box = target.closest('.box');
    const form = box.querySelector('.form');
    const text = box.querySelector('.task-text');
    const btn = box.querySelector('.btn-text');
    form.classList.add('hidden');
    text.value = '';
    btn.classList.remove('hidden');
}