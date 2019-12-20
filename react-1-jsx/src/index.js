//Import React and ReactDOM dependencies
import React from "react";
import ReactDOM from "react-dom";

//Create react component
const App = () => {
  // return <div>Hi!!</div>;
    //Reference into JSX
    const clickButton = 'Click Me!';
    const labelText = 'Enter Name: ';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* HTML NOT JSX */}
      {/* <button style="background-color: blue; color:white;">Submit</button> */}
      {/* JSX WORK ON BROWSERS */}
      <button style={{ 
                        backgroundColor: 'blue', 
                        color: 'white' 
                    }}>
        {/* Reference variable */}
        {clickButton}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  //document.getElementById('root') option 1
  document.querySelector("#root") // option 2
);
