import React, { Component } from "react";
import { Main, Search, Petition, NotFound } from "../pages";
import { Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/search/:keyword" exact={true} component={Search} />
        <Route path="/petition/:id" exact={true} component={Petition} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
