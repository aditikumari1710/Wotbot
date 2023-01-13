import Form from "./Components/Form";
import "./Components/App.css";
import Logo from "./Logo";

function App() {
  return (
    <div className="app">
      <div className="form-outside">
        <Logo />
      </div>

     

      <div className="centered-content blue-border">
        <Form />
      </div>
    </div>
  );
}

export default App;
