import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
import AddTask from "./AddTask";
import ListTask from "./List";

function taskReducer(tasks, action) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                { id: action.id, text: action.text, done: false },
            ];
        }
        case "deleted": {
            return tasks.filter((e) => e.id !== action.id);
        }
        case "changed": {
            return tasks.map((e) => {
                if (e.id === action.task.id) {
                    return action.task;
                } else {
                    return e;
                }
            });
        }

        default: {
            throw Error("What dou you mind?" + action.type);
        }
    }
}

let nextId = 3;

const Index = () => {
    const [tasks, dispatch] = useReducer(taskReducer);

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({ type: "deleted", id: taskId });
    }

    return (
        <div className="container pt-5">
            <h1>Jadwal Kegiatan Harian</h1>
            <AddTask onAddTask={handleAddTask}/>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Kegiatan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListTask
                            tasks={tasks}
                            onChangeTask={handleChangeTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Index;
