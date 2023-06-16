import { useEffect, useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";

const ListTask = ({ tasks, onChangeTask, onDeleteTask }) => {
    const url = "https://api.npoint.io/3c26ff950ba8288fc00d";
    const [todos, setTodos] = useState([]);

    const getDataTodos = async () => {
        const response = await fetch(url);
        const dataTodos = await response.json();
        setTodos(dataTodos);
    };

    useEffect(() => {
        getDataTodos();
    });

    return (
        <>
            {todos.map((task) => (
                <>
                    <tr key={task.id}>
                        <Task
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}
                            id={task.id}
                            done={task.done}
                            text={task.text}
                            userId={task.userId}
                        />
                    </tr>
                </>
            ))}
        </>
    );
};

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if (isEditing) {
        taskContent = (
            <div>
                <td>
                    <input
                        value={task.text}
                        onChange={(e) => {
                            onChange({ ...task, text: e.target.value });
                        }}
                    />
                </td>
                <td>
                    <button variant="warning" onClick={() => setIsEditing(false)}>Save</button>
                </td>
            </div>
        );
    } else {
        taskContent = (
            <div className="d-flex align-items-center gap-5">
                <td className="col-10">{task.text}</td>
                <td>
                    <Button
                        variant="warning"
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >
                        Edit
                    </Button>
                </td>
            </div>
        );
    }

    return (
        <>
            <td className="col-1">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChange({ ...task, done: e.target.checked });
                    }}
                />
            </td>
            <td className="col-9" style={{ textAlign: "left" }}>
                {taskContent}
            </td>
            <td>
                <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
            </td>
        </>
    );
};

export default ListTask