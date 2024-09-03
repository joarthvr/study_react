// import { useState } from "react";
import "./styles/App.css";
import InputContainer from "./components/inputContainer";
// import SearchContainer from "./components/SearchContainer";
import ListArea from "./components/ListArea";

function App() {
  const data = JSON.parse(localStorage.getItem("contactList")) || [];
  return (
    <main className="main">
      <h1>연락처리스트</h1>
      <section className="sec1">
        <InputContainer data={data} />
        <ListArea />
      </section>
    </main>
  );
}

export default App;
