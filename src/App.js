import Letter from "./components/Letter";
import { useState, useEffect } from "react";

function App() {
  // State for word to find
  const [wordToFind, setWordToFind] = useState("");
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const getWord = async () => {
    const response = await fetch(
      "https://random-words5.p.rapidapi.com/getRandom",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b58fc1a139msh8ebf180a4c175a2p12fd02jsn7c7bdfecac08",
          "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
        },
      }
    );

    const data = await response.text();

    setWordToFind(data);
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
      {/* Hangman section */}
      <div className="w-3/4 h-4/6 bg-transparent mb-5 border-2 border-white flex flex-col items-center justify-center">
        {/* Hangling pole */}
        <div className="w-72 h-80 relative">
          <div className="w-3 h-80 bg-white absolute top-0 left-0"></div>
          <div className="w-40 h-3 bg-white absolute top-0 left-0"></div>
          {/* Rope */}
          <div className="w-4 h-12 bg-white absolute top-0 right-28"></div>
          {/* Head */}
          <div className="w-24 h-24 bg-transparent absolute top-10 left-28 border-8 border-white rounded-full"></div>
          {/* Body */}
          <div className="w-2 h-28 bg-white absolute top-32 left-40"></div>
          {/* Left arm */}
          <div className="w-2 h-24 bg-white absolute top-32 left-32 rotate-45"></div>
          {/* Right arm */}
          <div className="w-2 h-24 bg-white absolute top-32 left-48 -rotate-45"></div>
          {/* Left leg */}
          <div className="w-2 h-24 bg-white absolute top-56 left-32 rotate-45"></div>
          {/* Right leg */}
          <div className="w-2 h-24 bg-white absolute top-56 left-48 -rotate-45"></div>
        </div>
      </div>

      {/* Letters section */}
      <div className="w-3/4 flex justify-center items-center flex-wrap">
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </div>
    </div>
  );
}

export default App;
