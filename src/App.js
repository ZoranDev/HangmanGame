import { HangmanProvider } from "./context/HangmanContext";
// Components
import Hangman from "./components/Hangman";
import Background from "./images/background.jpg";

function App() {
  return (
    <HangmanProvider>
      <div className="w-full min-h-screen p-5 sm:h-screen bg-background bg-cover flex justify-center items-center">
        <Hangman />
      </div>
    </HangmanProvider>
  );
}

export default App;
