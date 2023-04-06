import React from 'react';

Todo.propTypes = {

};
function Todo(props) {
    const { todos, onTodoClick } = props;

    function handleTodoClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }
    return (
        <ul className='todo-list'>
            {
                todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleTodoClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default Todo;