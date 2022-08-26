import { createContext, useState, useEffect } from "react";

const HangmanContext = createContext();

export const HangmanProvider = ({ children }) => {
  // Here get word by fetch api, now just as array of word
  const words = ["plane", "car", "music", "house", "hangman"];

  // State for wordToFind
  const [wordToFind, setWordToFind] = useState({
    actualWord: "",
    wordArray: [],
  });

  //Get random word
  useEffect(() => {
    let word = words[Math.floor(Math.random() * words.length)];
    const arr = [];
    for (let i = 0; i < word.length; i++) {
      arr.push({ letter: word[i], class: "inactive" });
    }
    setWordToFind({ actualWord: word, wordArray: arr });
  }, []);

  //clickOnLetter
  const clickOnLetter = (letter) => {
    setWordToFind({
      ...wordToFind,
      wordArray: wordToFind.wordArray.map((item) => {
        if (item.letter.toLowerCase() === letter.toLowerCase()) {
          item.class = "active";
        }
        return item;
      }),
    });
  };

  return (
    <HangmanContext.Provider
      value={{
        wordToFind,
        clickOnLetter,
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
