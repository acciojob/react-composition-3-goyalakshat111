import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
          <h2>Hover over me</h2>
      </Tooltip>
      <br/> <br/> <br/>
      <Tooltip text="This is another tooltip">
          <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
