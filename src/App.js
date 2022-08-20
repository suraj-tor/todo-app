import React from "react";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <AddTodo />
                    </div>
                    <div className="col-sm-8">
                        <TodoList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
