import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CounterComp.scss";

export default function CounterComp({ name, description, id }) {
  const [like, setLike] = useState(false);
  const [currentCount, setCourentCount] = useState(0);

  const start_again = 0;
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("	https://api.adviceslip.com/advice");
      console.log(response.data.slip.advice);
      setAdvice(response.data.slip.advice);
    }

    fetchData();
  }, []);

  const toggleLike = () => {
    setLike(!like);
  };
  console.log(like);

  return (
    <div className="counter">
      <h3>
        Name: {name}, id :{id}
      </h3>
      <h4>{description} </h4>
      <p>
        {" "}
        advice given: <strong>{advice ? advice : "no advices given"}</strong>
      </p>
      <p>current count: {currentCount}</p>
      <input id="comment" type="text" placeholder="add comment..." />
      {/* <div>`${getElementById("comment").innerHtml}`</div>  */}
      <button
        onClick={() => {
          setCourentCount(currentCount + 1);
        }}>
        increment
      </button>
      <button
        onClick={() => {
          setCourentCount(currentCount - 1);
        }}>
        decrement
      </button>
      <button
        onClick={() => {
          setCourentCount(start_again);
        }}>
        reset
      </button>
      <button onClick={toggleLike}>{like ? "dislike" : "like"}</button>
    </div>
  );
}
// incrementCount={() => {
//   const newCounters = counters.map(counterWithinOriginalArray => {
//     if (counterWithinOriginalArray.id === counter.id) {
//       return {
//         ...counterWithinOriginalArray,
//         currentCount: counterWithinOriginalArray.currentCount + 1,
//       };
//     }
//     return counterWithinOriginalArray;
//   });

//   setCounters(newCounters);
// }}
