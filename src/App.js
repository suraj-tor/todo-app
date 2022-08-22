import React, { useState } from "react";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import TodoData from "./Data/TodoData";

const App = () => {
    const [todos, setTodos] = useState(TodoData);

    const sendData = (data) => {
        // console.log(data)
        // let newData = [data, ...todos];
        // props.getData(newData)
        setTodos([data, ...todos]);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <AddTodo sendData={sendData} />
                    </div>
                    <div className="col-sm-8">
                        <TodoList todos={todos} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
