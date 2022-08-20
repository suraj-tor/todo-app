import React from "react";
import DeleteButton from "./DeleteButton";

const TodoItem = () => {
    return (
        <>
            <div className="col-sm-10">
                <div className="card-body">This is some text within a card body.</div>
            </div>
            <div className="col">
                <div className="text-center py-2">
                    <DeleteButton />
                </div>
            </div>
        </>
    );
};

export default TodoItem;
