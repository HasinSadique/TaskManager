import React, { useEffect, useState } from "react";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  const handleEdit = (task) => {
    console.log(task);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/getTasksToDo`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  //   const editTask = (taskTitle) => {
  //     let gg = prompt("Edit the task");
  //     console.log(gg);
  //   };
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

  return (
    <div class="overflow-x-auto ">
      <table class="table w-full border-b-2">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type="checkbox" class="checkbox" />
              </label> */}
            </th>
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
              <tr key={task._id}>
                <th>
                  <label>
                    <input
                      onChange={(e) => {
                        taskCompleted(e, task);
                      }}
                      type="checkbox"
                      class="checkbox"
                    />
                  </label>
                </th>
                <td>{task._id}</td>
                <td className="re">
                  <div class="font-bold">{task.TaskTitle}</div>
                </td>

                <th>
                  <button
                    onClick={(task) => {
                      console.log(task._id);
                    }}
                    class="btn btn-ghost btn-xs capitalize text-sm"
                  >
                    Edit
                  </button>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
