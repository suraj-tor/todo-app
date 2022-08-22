import React, { useState } from "react";
import TodoData from "../Data/TodoData";

const AddTodo = (props) => {
    const [getData, setData] = useState("");

    const handleInputText = (e) => {
        setData(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        let newData = {id:++TodoData.length, text:getData}
        props.sendData(newData);
        setData("")
    };

    return (
        <>
            <div className="card">
                <div className="card-title fs-4 text-center mt-5">Add Your Todays Goal Here</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="todotext" className="form-label">
                                Enter Something
                            </label>
                            <input onChange={handleInputText} type="text" value={getData} className="form-control" id="todotext" />
                        </div>

                        <button onClick={handleForm} type="submit" className="btn btn-danger">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTodo;
