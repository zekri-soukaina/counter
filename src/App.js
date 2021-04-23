import React from "react";
import CounterComp from "./components/CounterComp";

function App() {
  const counters = [
    {
      id: "43#66h",
      name: "First counter",
      description: "This is a great counter",
    },
    {
      id: "665$gg",
      name: "Second counter",
      description: "This is an awesome counter",
    },
    {
      id: "%555t",
      name: "Third counter",
      description: "This is an OK-ish counter",
    },
    {
      id: "gfh566",
      name: "Fourth counter",
      description: "Let's make counters great again.",
    },
  ];

  return (
    <div className="App">
      {counters.map((counter, index) => {
        return (
          <CounterComp
            key={index}
            id={counter.id}
            name={counter.name}
            description={counter.description}
          />
        );
      })}
    </div>
  );
}

export default App;
