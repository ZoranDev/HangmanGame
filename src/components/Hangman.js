import { useContext } from "react";
import HangmanContext from "../context/HangmanContext";
// Components
import MissingLetter from "../components/MissingLetter";

const Hangman = () => {
  const { wordToFind } = useContext(HangmanContext);

  return (
    <div className="w-3/4 h-4/6 bg-transparent mb-5 border-2 border-white flex flex-col items-center justify-center">
      {/* Hanging pole */}
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

      {/* Missing word */}
      <div className="flex justify-center items-center">
        {wordToFind.actualWord &&
          wordToFind.wordArray.map((item, index) => {
            return (
              <MissingLetter
                key={index}
                letter={item.letter}
                active={item.class}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Hangman;
