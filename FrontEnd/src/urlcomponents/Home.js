import React, { useState, useRef } from "react";

export default function Home() {
  let inputUrlRef = useRef(); // inputUrl value
  let inputUrlDateRef = useRef(); // inputUrlExpDate Value
  let generatedUrl = "https://myurl/"; // RandomString variable

  const [generatedUrlValue, setgeneratedUrlValue] = useState(""); //Initialize surl

  const RANDOM_STRING = // RandomString variable
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
  const TODO_KEY = "Output"; // Local Storage Array Key

  function getTodo() {
    // getItems from local Storage
    return JSON.parse(localStorage.getItem(TODO_KEY));
  }

  //onClick function on GenerateUrl Button
  const handleSubmit = () => {
    if (!inputUrlDateRef.current.value) {
      let noDate = document.getElementById("noDate");
      noDate.innerHTML = "** Please Enter Date"; // Show Error Msg
      noDate.style.display = "inline-block"; // Show Error Msg
      setTimeout(() => {
        // Hide Error Msg after 3 seconds
        noDate.style.display = "none";
      }, 3000);
    }
    if (inputUrlRef.current.value && inputUrlDateRef.current.value) {
      console.log(inputUrlDateRef.current.value);
      if (
        inputUrlRef.current.value.includes("https://") ||
        inputUrlRef.current.value.includes("http://")
      ) {
        for (let i = 0; i < 5; i++) {
          //generate 5 random characters to concatenate
          generatedUrl += RANDOM_STRING.charAt(
            Math.floor(Math.random() * RANDOM_STRING.length)
          );
        }
        //Generate Url again if it matches in Local Storage
        if (generatedUrl === TODO_KEY.generatedUrl) {
          handleSubmit();
        } else {
          // Store newUrl into a generatedUrlValue
          setgeneratedUrlValue(generatedUrl);
        }
        // }
        const newTodo = {
          // Create new object into an array
          inputUrl: inputUrlRef.current.value,
          generatedUrl: generatedUrl,
          expiryDate: inputUrlDateRef.current.value,
        };

        let oldTodo = getTodo(); // oldTodo variable = getItem.localStorage

        if (oldTodo === null || oldTodo === undefined) {
          localStorage.setItem(TODO_KEY, JSON.stringify([newTodo])); //setItems in localstorage
        } else {
          oldTodo = [...oldTodo, newTodo]; // Same Working as Push Statement ( // oldTodo.push(newTodo);)
          localStorage.setItem(TODO_KEY, JSON.stringify(oldTodo));
        }
      }
    }
  };

  function onCopy() {
    //onClick Function on Copy Button
    if (generatedUrlValue) {
      navigator.clipboard.writeText(generatedUrlValue); // Copy COMMAND
      let copy = document.getElementById("copy");
      copy.innerHTML = "Copied"; // Show Copied Msg
      copy.style.display = "inline-block"; // Show Copied Msg
      setTimeout(() => {
        // Hide Copied Msg after 3 seconds
        copy.style.display = "none";
      }, 3000);
    }
  }

  return (
    <div>
      <div id="divl">
        <h1 id="div1h1">URL Shortener</h1>
        <p id="div1p1">
          A URL shortener is a tool that takes a long URL (Uniform Resource
          Locator) and creates a shorter, more manageable link that redirects to
          the original long URL.
          <br /> The shorter URL typically has fewer characters, making it
          easier to share and remember. The shortened URL can also be used to
          track clicks and traffic to the original long URL.
          <br />
          URL shorteners are commonly used on social media platforms where
          character limits are imposed, such as Twitter, or in email messages or
          other contexts where a long URL may be unwieldy or unappealing.
        </p>
      </div>
      <div id="inputmaindiv">
        <form
          onSubmit={(event) => {
            // stop form to refresh ui
            event.preventDefault();
          }}
        >
          <div>
            <input
              ref={inputUrlRef}
              className="lurl"
              type="url"
              placeholder="Please Enter Your URL"
            />
            <input
              ref={inputUrlDateRef}
              className="lurldate"
              type="date"
            ></input>
            <span id="noDate"></span>
            <button className="enter" onClick={handleSubmit}>
              Generate URL
            </button>
          </div>
          <div>
            <input
              className="surl"
              type="text"
              placeholder="Generated URL"
              value={generatedUrlValue}
              id="copyText"
            />
            <span id="copy"></span>
            <button
              className="copy"
              onClick={() => {
                onCopy();
              }}
            >
              Copy this URL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
//     if (inputUrlDateRef.current.value == "" || inputUrlDateRef.current.value == null || inputUrlDateRef.current.value == undefined || !inputUrlDateRef.current.value) {
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
