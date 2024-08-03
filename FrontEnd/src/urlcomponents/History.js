import React, { useState } from "react";

export default function History() {
  const TODO_KEY = "Output";
  const [data, setData] = useState(getTodo());

  function getTodo() {
    return JSON.parse(localStorage.getItem(TODO_KEY));
  }

  const onDelete = (elm) => {
    const index = getTodo().findIndex(
      (all) => all.generatedUrl === elm.generatedUrl
    );
    if (index !== -1) {
      const newdata = [...getTodo()];
      newdata.splice(index, 1);
      localStorage.setItem(TODO_KEY, JSON.stringify(newdata));
      setData(getTodo());
    }
  };

  const onEdit = (elms, index) => {
    let editBtn = document.getElementById("editBtn" + index);
    let onEditDates = document.getElementById("onEditDate" + index);
    if (onEditDates.hidden) {
      // show date
      onEditDates.hidden = false;
      editBtn.innerText = "Save";
    } else {
      // hide date
      onEditDates.hidden = true;
      editBtn.innerText = "Edit";
      const index = getTodo().findIndex(
        // find index in todo list
        (item) => item.generatedUrl === elms.generatedUrl
      );
      data[index].expiryDate = onEditDates.value; // set new item in local storage
      localStorage.setItem(TODO_KEY, JSON.stringify(data));
      setData(getTodo()); // get new items
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Input URL</th>
            <th>Generated URL</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getTodo()?.map((todo, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{todo.inputUrl}</td>
                <td>{todo.generatedUrl}</td>
                <td id={"expiryDateTD" + i}>{todo.expiryDate}</td>
                <td>
                  <button
                    className={"edit " + i}
                    id={"editBtn" + i}
                    onClick={() => {
                      onEdit(todo, i);
                    }}
                  >
                    Edit
                  </button>
                  <button id="deleteBtn" onClick={() => onDelete(todo)}>
                    Delete
                  </button>
                  <input
                    id={"onEditDate" + i}
                    className="hi"
                    type="date"
                    hidden={true}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


// import React, { useState } from "react";

// export default function History() {
//   const TODO_KEY = "Output";
//   const [data, setData] = useState(getTodo());

//   function getTodo() {
//     return JSON.parse(localStorage.getItem(TODO_KEY));
//   }

//   const onDelete = (elm) => {
//     const index = getTodo().findIndex(
//       (all) => all.generatedUrl === elm.generatedUrl
//     );
//     if (index !== -1) {
//       const newdata = [...getTodo()];
//       newdata.splice(index, 1);
//       localStorage.setItem(TODO_KEY, JSON.stringify(newdata));
//       setData(getTodo());
//     }
//   };

//   const onEdit = (elms, index) => {
//     let editBtn = document.getElementById("editBtn" + index);
//     let onEditDates = document.getElementById("onEditDate" + index);
//     if (onEditDates.hidden) {
//       // show date
//       onEditDates.hidden = false;
//       editBtn.innerText = "Save";
//     } else {
//       // hide date
//       onEditDates.hidden = true;
//       editBtn.innerText = "Edit";
//       const index = getTodo().findIndex(
//         // find index in todo list
//         (item) => item.generatedUrl === elms.generatedUrl
//       );
//       data[index].expiryDate = onEditDates.value; // set new item in local storage
//       localStorage.setItem(TODO_KEY, JSON.stringify(data));
//       setData(getTodo()); // get new items
//     }
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Sr No.</th>
//             <th>Input URL</th>
//             <th>Generated URL</th>
//             <th>Expiry Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getTodo()?.map((todo, i) => {
//             return (
//               <tr key={i}>
//                 <td>{i}</td>
//                 <td>{todo.inputUrl}</td>
//                 <td>{todo.generatedUrl}</td>
//                 <td id={"expiryDateTD" + i}>{todo.expiryDate}</td>
//                 <td>
//                   <button
//                     className={"edit " + i}
//                     id={"editBtn" + i}
//                     onClick={() => {
//                       onEdit(todo, i);
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button id="deleteBtn" onClick={() => onDelete(todo)}>
//                     Delete
//                   </button>
//                   <input
//                     id={"onEditDate" + i}
//                     className="hi"
//                     type="date"
//                     hidden={true}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
