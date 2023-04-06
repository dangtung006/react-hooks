import React, { useState } from 'react';

function FormTodo(props) {

    const { onSubmit } = props;

    const [value, setValue] = useState("");

    function handleValueChange(e) {
        setValue(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (onSubmit) {
            const formValues = {
                title: value
            }
            onSubmit(formValues)
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleValueChange(e)}
                />
            </form>
        </div>
    );
}

export default FormTodo;