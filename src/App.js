import logo from './logo.svg';
import './App.css';
import axios from "axios";
import getData from "./getData";

function App() {

    // const text = async (){
    //     axios.get(url).then((Response) =>
    //         Response.data).catch((error) => console.log(error));
    // }
    const text = async function getData() {
        const url = "/dev.do";

        await axios.get(url).then(Response => document.getElementById("id").innerHTML = Response.data.dev);

    }

    window.onload = text();


  return (
    <div className="App">
      <header className="App-header">
          <p id="id"></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
