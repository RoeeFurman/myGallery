'use strict'

function onInit() {
    renderTodos()
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    console.log('Removing Todo', todoId);

    removeTodo(todoId)
    renderTodos()
}

function renderTodos() {
    const todos = getTodosForDisplay()
    var strHTMLs = todos.map(todo =>
        `<li class="${(todo.isDone) ? 'done' : ''}" onclick="onToggleTodo('${todo.id}')">
           ${todo.txt}
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')

    document.querySelector('.todos-total-count').innerText = getTodosCount()
    document.querySelector('.todos-active-count').innerText = getActiveTodosCount()
}


function onToggleTodo(todoId) {
    console.log('Toggling', todoId);
    toggleTodo(todoId)

    renderTodos()
}

function onAddTodo() {
    const elTxt = document.querySelector('input[name=todoTxt]');
    const txt = elTxt.value
    
    addTodo(txt)

    elTxt.value = ''
    renderTodos()
}

function onSetFilter(filterBy) {
    console.log('Filtering By:', filterBy);

    setFilter(filterBy)
    renderTodos()

}