import React from 'react';

function TodoDetail(props) {
    return (
        <div>
            <div>{props.todo.id}</div>
            <div>{props.todo.description}</div>
        </div>
    );
}

export default TodoDetail;