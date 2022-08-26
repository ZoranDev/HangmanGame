import { createContext, useState, useEffect } from "react";

const HangmanContext = createContext();

export const HangmanProvider = ({ children }) => {
  // Here get word by fetch api, now just as array of word
  const words = ["plane", "car", "music", "house", "hangman"];

  // State for wordToFind
  const [wordToFind, setWordToFind] = useState("");

  //Get random word
  useEffect(() => {
    setWordToFind(words[Math.floor(Math.random() * words.length)]);
  }, []);

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
