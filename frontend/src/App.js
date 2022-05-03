import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios("http://localhost:3008/portFolio/Khongorzul").then((e) =>
      setData(e.data)
    );
  }, []);
  return data.age;
}

export default App;
