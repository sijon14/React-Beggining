import React, { Component } from "react";
import "./App.css";
import { name, age } from "./components/data";
import Booklist from "./components/Booklist";
import Namere from "./components/namere";

// <<<--STATELESS FUNCTIONAL COMPONENT-->>>>>
// function App() {
//   return (
//     <div>
//       <h1 className="hello">hello from app</h1>
//       <Booklist />
//       <Namere />
//       <p className="hello">{name}</p>
//       <p className="hello">{age}</p>
//     </div>
//   );
// }

class App1 extends Component {
  render() {
    return (
      <div>
        <Booklist />
      </div>
    );
  }
}

export default App1;
