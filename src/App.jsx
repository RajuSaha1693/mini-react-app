import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <Counter />
          <UserList />
        </div>
      </main>
    </div>
  );
}

export default App;
