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

  console.log(wordToFind);

  return (
    <HangmanContext.Provider
      value={{
        wordToFind,
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
};

export default HangmanContext;
