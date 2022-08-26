import { createContext, useState, useEffect } from "react";

const HangmanContext = createContext();

export const HangmanProvider = ({ children }) => {
  // Here get word by fetch api, now just as array of word
  const words = ["plane", "car", "music", "house", "hangman", "ambulance"];

  // State for wordToFind
  const [wordToFind, setWordToFind] = useState({
    actualWord: "",
    wordArray: [],
  });

  // State for number of mistakes
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  // State for number of wins
  const [numberOfWins, setNumberOfWins] = useState(0);

  //Get random word
  useEffect(() => {
    getRandomWord();
  }, []);

  // Get random word
  const getRandomWord = () => {
    let word = words[Math.floor(Math.random() * words.length)];
    const arr = [];
    for (let i = 0; i < word.length; i++) {
      arr.push({ letter: word[i], class: "inactive" });
    }
    setWordToFind({ actualWord: word, wordArray: arr });
  };

  //clickOnLetter function
  const clickOnLetter = (letter, e) => {
    // indicator that we do not have clicked letter in our missing word
    let isLetter = false;
    let wins = 0;

    // Print in missing word section letter if it is clicked letter
    setWordToFind({
      ...wordToFind,
      wordArray: wordToFind.wordArray.map((item) => {
        if (item.letter.toLowerCase() === letter.toLowerCase()) {
          wins = wins + 1;
          item.class = "active";
          isLetter = true;
        }
        return item;
      }),
    });

    setNumberOfWins(numberOfWins + wins);

    if (!isLetter) {
      setNumberOfMistakes(numberOfMistakes + 1);
    }

    // Change background for clicked letter
    e.target.className =
      "w-12 h-12 bg-slate-800 text-black mr-2 mb-2 text-lg flex justify-center items-center border-2 border-white";

    // Disable clicked letter
    e.target.disabled = true;
  };

  //playAgain function
  const playAgain = () => {
    setNumberOfMistakes(0);
    setNumberOfWins(0);
    getRandomWord();
  };

  return (
    <HangmanContext.Provider
      value={{
        wordToFind,
        numberOfMistakes,
        numberOfWins,
        clickOnLetter,
        playAgain,
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
};

export default HangmanContext;

// api for random word
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
