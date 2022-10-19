// import React, { useState } from "react";
// import WorkflowSearchList from "./WorkflowSearchList"
// import './WorkflowSidebar.css'

// import { Icon, TextInput } from "@contentstack/venus-components";

// const WorkflowSideBar = () => {
//   const [inputText, setInputText] = useState("");
//   let inputHandler = (e) => {
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };
//   let cancelHandeler = (cancelevent) => {
//     setInputText("")
//   }

//   return (
//     <div className="main">
//       <h1>Workflow Component</h1>
//       <div className="search">
//         <TextInput
//           id="outlined-basic"
//           onChange={inputHandler}
//           placeholder="Search"
//           value={inputText}
//           icon='SearchSmall'
//         />
//         <Icon icon="ErrorWhite" onClick={cancelHandeler} data-testid="icon" />
//       </div>
//       <WorkflowSearchList input={inputText} />
//     </div>
//   )

// }

// export default WorkflowSideBar;













import React, { useState } from "react";
import WorkflowSearchList from "./WorkflowSearchList"
import './WorkflowSidebar.css'
import { searchAtom } from "../store";
import { useAtom } from "jotai";

import { Icon, TextInput } from "@contentstack/venus-components";

const WorkflowSideBar = () => {
  // const [inputText, setInputText] = useState("");
  const [inputText, setInputText] = useAtom(searchAtom);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let cancelHandeler = (cancelevent) => {
    setInputText("")
  }

  return (
    <div className="main">
      <h1>Workflow Component</h1>
      <div className="search">
        <TextInput
          id="outlined-basic"
          onChange={inputHandler}
          placeholder="Search"
          value={inputText}
          icon='SearchSmall'
        />
        <Icon icon="ErrorWhite" onClick={cancelHandeler} data-testid="icon" />
      </div>
      <WorkflowSearchList input={inputText} />
    </div>
  )

}

export default WorkflowSideBar;