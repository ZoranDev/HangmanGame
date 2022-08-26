import { HangmanProvider } from "./context/HangmanContext";
// Components
import Hangman from "./components/Hangman";
import AllLetters from "./components/AllLetters";

function App() {
  return (
    <HangmanProvider>
      <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
        <Hangman />
        <AllLetters />
      </div>
    </HangmanProvider>
  );
}

export default App;
