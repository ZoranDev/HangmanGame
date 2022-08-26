import { HangmanProvider } from "./context/HangmanContext";
// Components
import Hangman from "./components/Hangman";

function App() {
  return (
    <HangmanProvider>
      <div className="w-full h-screen bg-slate-700 flex flex-col justify-center items-center">
        <Hangman />
      </div>
    </HangmanProvider>
  );
}

export default App;
