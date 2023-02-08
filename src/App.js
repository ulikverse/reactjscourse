import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Ulik" age={27} email="ulik@ulik.com" />
      <User name="Jake" age={29} email="jake@ulik.com" />
      <User name="Jessica" age={190} email="jessica@ulik.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
      </div>
    </div>
  );
};

export default App;
