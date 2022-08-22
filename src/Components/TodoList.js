import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoData from "../Data/TodoData";

let data = TodoData;
const TodoList = (props) => {
    const [todos, setTodos] = useState(data);
    // debugger
    let updatedData = props.todos;
    console.log(updatedData);

    useEffect(() => {
        setTodos(updatedData);
    }, [updatedData]);

    return (
        <>
            <div className="row">{todos?.length !== 0 ? todos?.map((todo) => <TodoItem key={todo?.id} text={todo?.text} />) : <div className="card">No Item Found</div>}</div>
        </>
    );
};

export default TodoList;
