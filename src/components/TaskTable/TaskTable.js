import React, { useEffect, useState } from "react";
import Modal from "./Modal.js";
import TableRow from "./TableRow.js";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getTasksToDo`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const taskCompleted = (e, task) => {
    fetch(`http://localhost:5000/task-complete/${task._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true && data.modifiedCount == 1) {
          //navigate to Inventory List
          window.location.reload(true);
        }
      });
  };

  const handleEditClick = async (event, task) => {
    event.preventDefault();
    let value = parseInt(
      prompt("How many quantities do you want to re-stock?", task._id)
    );

    console.log("new stock: ", value);
    // console.log(itemName);
  };

  return (
    <div class="overflow-x-auto">
      <table class="table w-full border-b-2">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th className="">Task id</th>
            <th>Task Title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/* <!-- row 1 --> */}
          {tasks.map((task) =>
            task.isComplete ? (
              <></>
            ) : (
              <TableRow task={task} taskCompleted={taskCompleted}></TableRow>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
