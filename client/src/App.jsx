import React, { useState, useEffect } from "react";
import Card from "./components/card";
import CardForm from "./components/cardform";
import "./components/card.css";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/api/cards");
        const jsonData = await res.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div   className="page">
      <div className="">
        <CardForm></CardForm>
      </div>
      <div className="card">
        {data.map((card, index) => (
          <div key={index} >
            <Card data={card}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
