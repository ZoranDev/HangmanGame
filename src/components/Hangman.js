import { useContext } from "react";
import HangmanContext from "../context/HangmanContext";
import { FaPlay } from "react-icons/fa";
// Components
import MissingLetter from "../components/MissingLetter";
import AllLetters from "../components/AllLetters";

const Hangman = () => {
  const { wordToFind, numberOfMistakes, numberOfWins, playAgain } =
    useContext(HangmanContext);

  if (numberOfMistakes < 6 && numberOfWins < wordToFind.actualWord.length) {
    return (
      <div className="w-full sm:w-full sm:h-full lg:w-5/6 lg:h-5/6  p-5 border-2 border-white flex flex-col-reverse lg:flex-row items-center justify-evenly">
        {/* Letters side */}

        <AllLetters />

        {/* Hanging  pole and word to find */}
        <div className="w-full  sm:w-4/6 mb-5 sm:mb-0 flex flex-col items-center sm:p-5">
          {/* Hanging pole */}
          <div className="w-64 h-96 sm:h-80 relative">
            <div className="w-3 h-80 bg-white absolute top-0 left-0"></div>
            <div className="w-40 h-3 bg-white absolute top-0 left-0"></div>

            <div className="w-8 h-3 bg-yellow-900 absolute top-4 left-36 z-10 rounded border-b border-white"></div>
            <div className="w-8 h-3 bg-yellow-900 absolute top-7 left-36 z-10 rounded border-b border-white"></div>
            {/* Rope */}
            <div className="w-4 h-12 bg-white absolute top-0 left-37"></div>
            {/* Head */}
            <div
              className={
                numberOfMistakes > 0
                  ? "w-24 h-24 bg-transparent absolute top-10 left-28 border-8 border-white rounded-full"
                  : "hidden"
              }
            ></div>
            {/* Body */}
            <div
              className={
                numberOfMistakes > 1
                  ? "w-2 h-28 bg-white absolute top-32 left-40"
                  : "hidden"
              }
            ></div>
            {/* Left arm */}
            <div
              className={
                numberOfMistakes > 2
                  ? "w-2 h-24 bg-white absolute top-32 left-32 rotate-45"
                  : "hidden"
              }
            ></div>
            {/* Right arm */}
            <div
              className={
                numberOfMistakes > 3
                  ? "w-2 h-24 bg-white absolute top-32 left-48 -rotate-45"
                  : "hidden"
              }
            ></div>
            {/* Left leg */}
            <div
              className={
                numberOfMistakes > 4
                  ? "w-2 h-24 bg-white absolute top-56 left-32 rotate-45"
                  : "hidden"
              }
            ></div>
            {/* Right leg */}
            <div
              className={
                numberOfMistakes > 5
                  ? "w-2 h-24 bg-white absolute top-56 left-48 -rotate-45"
                  : "hidden"
              }
            ></div>
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
      </div>
    );
  } else {
    return (
      <div className="w-80  border-2 border-white rounded p-5 flex flex-col items-center">
        {numberOfMistakes === 6 && (
          <>
            <h1 className="mb-5 text-3xl text-red-500 font-bold">GAME OVER</h1>
            <h2 className="text-xl text-white mb-5 pr-5">
              The word was: "
              <span className="text-xl text-red">
                {wordToFind.actualWord.toUpperCase()}
              </span>
              "
            </h2>
          </>
        )}
        {numberOfWins === wordToFind.actualWord.length && (
          <h1 className="mb-5 text-3xl text-green-500 font-bold">GAME WIN</h1>
        )}

        <button
          onClick={() => playAgain()}
          className="w-full p-3 bg-neutral-200 rounded text-2xl  text-slate-700 flex items-center justify-center active:scale-95 hover:bg-neutral-100 "
        >
          Play Again <FaPlay className="ml-4" />
        </button>
      </div>
    );
  }
};

export default Hangman;
