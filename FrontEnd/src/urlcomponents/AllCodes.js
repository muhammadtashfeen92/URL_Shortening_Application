// // Navbar.js code
// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <nav>
//         <div id="imgdiv">
//           <img
//             src="https://cdn6.aptoide.com/imgs/b/9/c/b9cac9b36d84fbb1c2159b14c3175e72_icon.png"
//             alt="logo"
//           ></img>
//         </div>
//         <Link to="/" className="home">
//           Home
//         </Link>
//         <Link to="/history" className="history ">
//           History
//         </Link>
//         <div className="imgspan">URL Shortener</div>
//       </nav>
//     </div>
//   );
// }
// export default Navbar;

// Nabvar.css code
// body{
//     background-color: whitesmoke;
// }
// nav{
//     background-color: rgb(32, 0, 150);
//     height: 110px;
// }
// #imgdiv {
//     float: left;
//     background-color:whitesmoke;
//     width: 120px;
//     height: 80px;
//     border-radius: 15px;
//     margin: 15px 0px 0px 100px;
// }
// img{
//     height: 60px;
//     margin: 10px 0 0 29px;
// }
// .imgspan {
//     float: right;
//     background-color: whitesmoke;
//     font-size: 20px;
//     font-weight: 700;
//     border : 3px solid greenyellow;
//     border-radius: 3px;
//     text-align: center;
//     padding-top: 22px;
//     width: 210px;
//     height: 53px;
//     margin: 15px 140px 0 0;
// }
// .home,.history{
//     color: whitesmoke;
//     text-decoration: none;
//     font-weight: 800;
//     font-size: 21px;
//     display: inline-block;
//     text-align: center;
//     margin: 40px 0 0 5%;
//     border-radius: 5px;
// }
// .home:hover,.history:hover {
//     background-color: whitesmoke;
//     color:black;
//     margin: 40px 0 0 47px;
//     padding-bottom: 2px;
//     width: 100px;
// }
// .home:active,.history:active {
//    text-decoration: underline;
//    color: black;
// }

// // Home.js Code

// import React, { useState, useRef } from "react";

// export default function Home() {
//   let inputUrlRef = useRef(); // inputUrl value
//   let inputUrlDateRef = useRef(); // inputUrlExpDate Value
//   let generatedUrl = "https://myurl/"; // RandomString variable

//   const [generatedUrlValue, setgeneratedUrlValue] = useState(""); //Initialize surl

//   const RANDOM_STRING = // RandomString variable
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
//   const TODO_KEY = "Output"; // Local Storage Array Key

//   function getTodo() {
//     // getItems from local Storage
//     return JSON.parse(localStorage.getItem(TODO_KEY));
//   }

//   //onClick function on GenerateUrl Button
//   const handleSubmit = () => {
//     if (!inputUrlDateRef.current.value) {
//     let noDate = document.getElementById("noDate");
//     noDate.innerHTML = "** Please Enter Date"; // Show Error Msg
//     noDate.style.display = "inline-block"; // Show Error Msg
//     setTimeout(() => {
//       // Hide Error Msg after 3 seconds
//       noDate.style.display = "none";
//     }, 3000);
//   }
//     if (inputUrlRef.current.value && inputUrlDateRef.current.value) {
//       console.log(inputUrlDateRef.current.value);
//       if (
//         inputUrlRef.current.value.includes("https://") ||
//         inputUrlRef.current.value.includes("http://")
//       ) {
//         for (let i = 0; i < 5; i++) {
//           //generate 5 random characters to concatenate
//           generatedUrl += RANDOM_STRING.charAt(
//             Math.floor(Math.random() * RANDOM_STRING.length)
//           );
//         }
//         //Generate Url again if it matches in Local Storage
//         if (generatedUrl === TODO_KEY.generatedUrl) {
//           handleSubmit();
//         } else {
//           // Store newUrl into a generatedUrlValue
//           setgeneratedUrlValue(generatedUrl);
//         }
//         // }
//         const newTodo = {
//           // Create new object into an array
//           inputUrl: inputUrlRef.current.value,
//           generatedUrl: generatedUrl,
//           expiryDate: inputUrlDateRef.current.value,
//         };

//         let oldTodo = getTodo(); // oldTodo variable = getItem.localStorage

//         if (oldTodo === null || oldTodo === undefined) {
//           localStorage.setItem(TODO_KEY, JSON.stringify([newTodo])); //setItems in localstorage
//         } else {
//           oldTodo = [...oldTodo, newTodo]; // Same Working as Push Statement ( // oldTodo.push(newTodo);)
//           localStorage.setItem(TODO_KEY, JSON.stringify(oldTodo));
//         }
//       }
//     }
//   };

//   function onCopy() {
//     //onClick Function on Copy Button
//     if (generatedUrlValue) {
//       navigator.clipboard.writeText(generatedUrlValue); // Copy COMMAND
//       let copy = document.getElementById("copy");
//       copy.innerHTML = "Copied"; // Show Copied Msg
//       copy.style.display = "inline-block"; // Show Copied Msg
//       setTimeout(() => {
//         // Hide Copied Msg after 3 seconds
//         copy.style.display = "none";
//       }, 3000);
//     }
//   }

//   return (
//     <div>
//       <div id="divl">
//         <h1 id="div1h1">URL Shortener</h1>
//         <p id="div1p1">
//           A URL shortener is a tool that takes a long URL (Uniform Resource
//           Locator) and creates a shorter, more manageable link that redirects to
//           the original long URL.
//           <br /> The shorter URL typically has fewer characters, making it
//           easier to share and remember. The shortened URL can also be used to
//           track clicks and traffic to the original long URL.
//           <br />
//           URL shorteners are commonly used on social media platforms where
//           character limits are imposed, such as Twitter, or in email messages or
//           other contexts where a long URL may be unwieldy or unappealing.
//         </p>
//       </div>
//       <div id="inputmaindiv">
//         <form
//           onSubmit={(event) => {
//             // stop form to refresh ui
//             event.preventDefault();
//           }}
//         >
//           <div>
//             <input
//               ref={inputUrlRef}
//               className="lurl"
//               type="url"
//               placeholder="Please Enter Your URL"
//             />
//             <input
//               ref={inputUrlDateRef}
//               className="lurldate"
//               type="date"
//             ></input>
//             <span id="noDate"></span>
//             <button className="enter" onClick={handleSubmit}>
//               Generate URL
//             </button>
//           </div>
//           <div>
//             <input
//               className="surl"
//               type="text"
//               placeholder="Generated URL"
//               value={generatedUrlValue}
//               id="copyText"
//             />
//             <span id="copy"></span>
//             <button
//               className="copy"
//               onClick={() => {
//                 onCopy();
//               }}
//             >
//               Copy this URL
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// home.css code

// #divl {
//     display: inline-block;
//     background-color: white;
//     width: 360px;
//     height : 630px;
//     border-radius: 14px;
//     border: 1px solid rgba(71, 63, 63, 0.13);
//     margin: 3% 0 0 125px;
// }
// #inputmaindiv {
//     float: right;
//     background-color: rgb(32, 0, 150);
//     width: 60%;
//     height : 630px;
//     border-radius: 15px;
//     margin: 3% 10% 0 0;
// }
// .lurl,.lurldate,.enter,.surl,.copy {
//     background-color: whitesmoke;
//     border: 1px solid rgba(61, 53, 53, 0.247);
//     border-radius: 10px;
//     text-align: center;
//     padding: 8px 15px;
//     font-size: 15px;
//     height: 40px;
// }
// .lurl{
//     border-top-left-radius: 10px !important;
//     border-bottom-left-radius: 10px !important;
//     border-top-right-radius: 0px !important;
//     border-bottom-right-radius: 0px !important;
//     width: 400px;
//     margin: 20% 0 0 8% !important;
// }
// .lurldate{
//     border-top-left-radius: 0px !important;
//     border-bottom-left-radius: 0px !important;
//     border-top-right-radius: 0px !important;
//     border-bottom-right-radius: 10px !important;
//     width: 150px;
// }
// .surl {
//     border-top-left-radius: 10px !important;
//     border-bottom-left-radius: 10px !important;
//     border-top-right-radius: 0px !important;
//     border-bottom-right-radius: 10px !important;}
// .enter,.copy {
//     padding: 0px 40px !important;
//     margin: 0 0 0 5% !important;
//     height: 55px !important;
//     font-weight: bold;
// }

// .enter:hover,.copy:hover {
//    cursor: pointer;
// }
// .enter:active,.copy:active {
//     background-color:black;
//     color: whitesmoke;
//  }
// .surl{
//     width: 400px;
//     margin: 5% 0 0 8% !important;
// }

// #div1h1{
//     text-align: center;
//     padding-top: 25px ;
//     text-decoration: underline;
// }
// #div1p1{
//     text-align: justify;
//     padding: 20px 30px 0 30px ;
//     font-size: 18px;

// }
// #copy {
//     background-color: whitesmoke;
//     padding: 1px 15px 3px 10px;
//     font-size: 12px;
//     position: absolute;
//     top: 460px;
//     left: 963px;
//     border-top-left-radius: 5px !important;
//     border-bottom-left-radius: 0px !important;
//     border-top-right-radius: 5px !important;
//     border-bottom-right-radius: 0px !important;
//     display: none;
// }
// #noDate {
//     background-color: whitesmoke;
//     color : red;
//     padding: 1px 15px 3px 10px;
//     font-size: 12px;
//     position: absolute;
//     top: 348px;
//     left: 1078px;
//     border-top-left-radius: 5px !important;
//     border-bottom-left-radius: 0px !important;
//     border-top-right-radius: 5px !important;
//     border-bottom-right-radius: 0px !important;
//     display: none;
// }

// // History.js code

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

// History.css code

/* table {
  margin: 3% 3% 0 3%;
  text-align: center;
  border: 1px solid black;
}
table,
th,
td {
  border-collapse: collapse;
  word-wrap: break-word;
}
thead tr th {
  background-color: rgb(32, 0, 150);
  color: whitesmoke;
  font-size: 20px;
}
tr {
  border: 1px solid black;
}
tr:nth-child(odd) {
  background-color: rgb(220, 220, 245);
}
tr:hover {
  background-color: #c6c7d1;
}
th {
  padding: 10px 0px;
}
th,
td {
  border: 1px solid black;
  min-width: 320px;
  max-width: 320px;
}
td {
  padding: 5px 0px;
  font-size: 18px !important;
  height: 75px;
  overflow: hidden;
}
.edit,
#deleteBtn {
  font-size: 16px;
  border-radius: 10px;
  padding: 4px 12px 3px 12px;
  margin: 10px 20px 10px 20px;
}
.edit {
  margin: 10px 8px 10px 15px;
}
#deleteBtn {
  margin: 10px 15px 10px 7px;
}
.hi {
  width: 150px;
} */
