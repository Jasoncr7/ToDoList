const inputTodo = document.querySelector('.todo');
const saveTodo = document.querySelector('.btn');
const holdTodo = document.querySelector('ul');
const doneTodo = document.querySelector('.Done');
const show = document.querySelector('.show');

saveTodo.addEventListener('click', (e) =>{
    e.preventDefault();
    let value = inputTodo.value;
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');
    button.addEventListener('click', (event) =>{
        event.preventDefault();
        setTimeout(() => li.remove(), 0500);
    });
    if(value.length < 1) {
        show.textContent = 'Add a Todo';
        setTimeout(() => show.remove(), 2000);
    }
    else{
        li.textContent = value;
        holdTodo.appendChild(li);
        li.appendChild(span);
        span.appendChild(button);
        span.classList.add('span')
        button.textContent = 'Done/Remove';
        button.classList.add('Done');
    }
    setTimeout(() => inputTodo.value = '', 2000);
});