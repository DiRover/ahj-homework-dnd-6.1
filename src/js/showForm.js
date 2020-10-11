export default function showForm(e) {
    const target = e.target;
    target.classList.add('hidden');
    const parent = target.closest('.box');
    const form = parent.querySelector('.form');
    form.classList.remove('hidden');
}