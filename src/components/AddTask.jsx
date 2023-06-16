import { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState("");

    return (
        <div className="d-flex align-items-center justify-content-center mb-4">
            <input
                className="p-3 w-100 md:m-auto"
                value={text}
                type="text"
                style={{ marginRight: "20px", borderRadius: "6px", border: "1px solid black" }}
                placeholder="Tambahkan Kegiatan"
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button
                className="bg-primary text-white p-3"
                style={{ borderRadius: "6px", border: "1px solid black" }}
                onClick={() => {
                    setText("");
                    onAddTask(text);
                }}
            >Add</button>
        </div>
    );
};

export default AddTask