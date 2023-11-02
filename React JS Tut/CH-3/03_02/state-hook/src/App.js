import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        {/* Hello world */}
        <div className="awesome" style={{ border: "1px solid red" }}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
          <input type="submit" value="Submit" />
        </div>
        <p>Enter your HTML here</p>
      </>
    </div>
  );
}

export default App;
