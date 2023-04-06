import React, { useState } from 'react';
import Todo from './todo';
import FormTodo from "./form.todo";

function TodoContainer() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "aaa"
        },
        {
            id: 2,
            title: "bbb"
        },
        {
            id: 3,
            title: "ccc"
        }
    ]);

    function handleTodoClick(todo) {
        const idx = todoList.findIndex(item => item.id = todo.id);
        if (idx < 0) {
            return;
        }

        var newTodo = [...todoList];
        newTodo.splice(idx, 1);
        setTodoList(newTodo);
    }

    function handleTodoFormSubmit(formValues) {
        console.log("formValues", formValues);
        var itemTodo = {
            id: todoList.length + 1,
            ...formValues
        }
        var newTodo = [...todoList];
        newTodo.push(itemTodo);
        setTodoList(newTodo);
    }

    return (
        <div>
            <FormTodo
                onSubmit={handleTodoFormSubmit}
            />
            <Todo
                todos={todoList}
                onTodoClick={handleTodoClick}
            />
        </div>
    );
}

export default TodoContainer;