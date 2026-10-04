const todos = [];
const addTodo = (name) => {
    todos.push(name)
}
const getTodos = () => {
    return todos;
}
module.exports = { addTodo, getTodos }