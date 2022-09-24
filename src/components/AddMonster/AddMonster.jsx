import React, { useState } from "react";

export default function AddMonster({ handleMonster, monstroso }) {
    // create the state, pay attention to how the inputs are setup!
    // The function that handles the changes on the input, Look at the inputs for the name of it
    // const [selectedMonster, setSelectedMonster] = useState("");


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', monstroso.name);
    //     formData.append('index', monstroso.index);
    //     formData.append('size', monstroso.size);
    //     formData.append('type', monstroso.type);
    //     formData.append('alignment', monstroso.alignment);
    //     handleMonster(formData); // formData is the data we want to send to the server!
    // }

    return (
        <div>
        {/* <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </form> */}
        </div>
    );
}