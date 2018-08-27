import React from 'react';

const AddUser = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="title"
                value={props.title}
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="content"
                value={props.content}
                onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddUser;
