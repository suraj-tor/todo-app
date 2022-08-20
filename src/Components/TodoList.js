import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <>
            <div className="card">
                <div className="row">
                    <TodoItem />
                </div>
            </div>
        </>
    );
};

export default TodoList;
