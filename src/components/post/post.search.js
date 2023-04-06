import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostSearch.propTypes = {
    onSubmit: PropTypes.func
};

PostSearch.defaultProps = {
    onSubmit: null
}

function PostSearch(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);


    function handleChangeValue(e) {
        const searchTerm = e.target.value;

        setSearchTerm(e.target.value);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = { searchTerm }
            onSubmit(formValues);
        }, 500)
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        // if (onSubmit) {
        //     onSubmit(searchTerm);
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChangeValue}
                >

                </input>
            </form>
        </div>
    );
};


export default PostSearch;