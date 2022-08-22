import Letter from "./components/Letter";

function App() {
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

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
      {/* Hangman section */}
      <div>
        <h1>Here put hangman</h1>
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
