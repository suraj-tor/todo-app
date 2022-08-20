import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const TodoItem = (props) => {
    const [delCard, setDelCard] = useState("pb-4");

    const onDelete = () => {
        setDelCard("pb-4 d-none");
    };

    const [text, setText] = useState("");

    const handleTodo = () => {
        let addClass = "text-decoration-line-through"
        setText(addClass)
    }

    return (
        <>
            <div className={delCard}>
                <div className="card">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="card-body">
                                <input onClick={handleTodo} className="form-check-input me-3" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <span className={text}>{props.text}</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-center py-2">
                                <DeleteButton onDelete={onDelete} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoItem;
