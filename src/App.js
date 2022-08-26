import { HangmanProvider } from "./context/HangmanContext";
// Components
import Hangman from "./components/Hangman";

function App() {
  return (
    <HangmanProvider>
      <div className="w-full min-h-screen p-5 sm:h-screen bg-slate-700 flex justify-center items-center">
        <Hangman />
      </div>
    </HangmanProvider>
  );
}

export default App;
