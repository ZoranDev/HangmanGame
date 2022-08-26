import HangmanContext from "../context/HangmanContext";
import { useContext } from "react";

const Letter = ({ letter }) => {
  // Context stuff
  const { clickOnLetter } = useContext(HangmanContext);

  return (
    <button
      onClick={(e) => clickOnLetter(letter, e)}
      className="w-12 h-12 bg-transparent text-white mr-2 mb-2 text-lg flex justify-center items-center border-2 border-white cursor-pointer hover:bg-slate-500"
    >
      {letter}
    </button>
  );
};

export default Letter;
