import React from "react";

const AddTodo = () => {
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
                            <input type="text" className="form-control" id="todotext" />
                        </div>

                        <button type="submit" className="btn btn-danger">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTodo;
