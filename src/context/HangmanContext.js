import { createContext, useContext, useState } from "react";

const HangmanContext = createContext();

export const HangmanProvider = ({ children }) => {
  // Here get word by fetch api, now just as array of word
  const words = ["plane", "car", "music", "house", "hangman"];

  // State for wordToFind
  const [wordToFind, setWordToFind] = useState("ZORAN");

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
