import { HangmanProvider } from "./context/HangmanContext";
// Components
import Hangman from "./components/Hangman";
import Letter from "./components/Letter";

function App() {
  // All letters
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

  /* const getWord = async () => {
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

    let wordToFindArr = [];

    for (let i = 0; i < data.length; i++) {
      wordToFindArr.push(data[i]);
    }

    setWordToFind({ wordArray: wordToFindArr, word: data });
  }; */

  /*  useEffect(() => {
    getWord();
  }, []); */

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
      <HangmanProvider>
        <Hangman />
      </HangmanProvider>

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
