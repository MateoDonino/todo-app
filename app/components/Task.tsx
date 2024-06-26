import { ITask } from "@/types/tasks";
import React from "react";

interface Taskprops {
  task: ITask;
}

const Task: React.FC<Taskprops> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
