import React from "react";
import DeleteButton from "./DeleteButton";

const TodoItem = (props) => {
    return (
        <>
            <div className="pb-4">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="card-body">
                                <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckIndeterminate" />
                                {props.text}
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-center py-2">
                                <DeleteButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoItem;
