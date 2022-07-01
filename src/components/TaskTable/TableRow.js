import { handler } from "daisyui";
import React, { useState } from "react";

const TableRow = (props) => {
  const { task, taskCompleted } = props;
  const [response, setResponse] = useState({});

  if (response.modifiedCount == 1) {
    window.location.reload(true);
  }
  const handleClick = (task) => {
    // console.log(task.TaskTitle);
    let value = prompt("Edit you task", task.TaskTitle);
    console.log("valie: ", value);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TaskTitle: value,
      }),
    };

    fetch(`http://localhost:5000/edit-task/${task._id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };

  return (
    <tr>
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
      <td>
        <div class="">{task.TaskTitle}</div>
      </td>
      <td>
        <a onClick={() => handleClick(task)} className="btn">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
