import React from "react";
import TodoItem from "./TodoItem";
import TodoData from "../Data/TodoData";

let data = TodoData;
const TodoList = () => {
    return (
        <>
            <div className="row">{data.length !== 0 ? data.map((todo) => <TodoItem key={todo.id} text={todo.text} />) : <div className="card">No Item Found</div>}</div>
        </>
    );
};

export default TodoList;
