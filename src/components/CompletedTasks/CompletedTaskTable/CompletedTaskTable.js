import React, { useEffect, useState } from "react";

const CompletedTaskTable = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getTasksToDo`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  //   const editTask = (taskTitle) => {
  //     let gg = prompt("Edit the task");
  //     console.log(gg);
  //   };

  return (
    <div class="overflow-x-auto w-3/4 mx-auto h-screen">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type="checkbox" class="checkbox" />
              </label> */}
            </th>
            <th>Task Title</th>

            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {tasks.map((task) =>
            task.isComplete ? (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" checked />
                  </label>
                </th>
                <td className="">
                  <div class="font-bold">{task.TaskTitle}</div>
                </td>
              </tr>
            ) : (
              <></>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTaskTable;
