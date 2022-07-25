import "./App.css";

import NewButton from "./Component/Buttons/NewButton";
import Form from "./Component/Form/Form";

function App() {
  return (
    <div className="App">
      <h1>Hi hariharan</h1>
      {/* <Mybutton buttonText="Hello hariharan" color="white" backgroundColor="blue" width="200px" height="50px"/> */}
      <br></br>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
          buttonText="hello world!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--primary--outline"
          buttonSize="btn--large"
          buttonText="Hello World!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--danger--outline"
          buttonSize="btn--large"
          buttonText="Hello World!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--danger--solid"
          buttonSize="btn--medium"
          buttonText="Hello World!"
        />
        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonSize="btn--medium"
          buttonStyle="btn--warning--outline"
          buttonText="Hello World!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--warning--solid"
          buttonSize="btn--large"
          buttonText="Hello World!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--success--solid"
          buttonSize="btn--large"
          buttonText="hello world!"
        />

        <NewButton
          onClick={() => {
            alert("Button clicked!");
          }}
          buttonStyle="btn--success--outline"
          buttonSize="btn--medium"
          buttonText="hello world!"
        />
      </div>
      <Form />
    </div>
  );
}

export default App;
