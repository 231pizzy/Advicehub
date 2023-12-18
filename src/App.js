import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchData = () => {
    Axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip.advice);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchData}>
          <span>Seek Wisdom!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
