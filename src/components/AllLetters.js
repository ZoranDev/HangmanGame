import HangmanContext from "../context/HangmanContext";
import { useContext } from "react";

// Components
import Letter from "./Letter";

const AllLetters = () => {
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

  // Context stuff
  const {} = useContext(HangmanContext);

  return (
    <div className="w-3/4 flex justify-center items-center flex-wrap">
      {letters.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </div>
  );
};

export default AllLetters;
