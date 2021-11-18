import React from 'react';
import { useHistory } from "react-router-dom";

export default function ToDoCard(props) {
    const history = useHistory();
    const { todo } = props;
    const { id, title, completed } = todo;
    return (
        <div style={{
            backgroundColor: 'gainsboro',
            margin: '10px',
            padding: '10px',
            width: '150px'
        }}
            onClick={() => history.push(`/todo/${id}`)}
        >
            <h4>{title}</h4>
            <h6>{`Completed : ${completed}`}</h6>
        </div>
    )
}
