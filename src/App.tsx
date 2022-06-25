import QuizPage from './components/QuizPage';
import StartPage from './components/StartPage';
import { QuizContextProvider } from './context/QuizContextProvider';
import yellowBlob from './assets/bg-yellow-blob.svg';
import blueBlob from './assets/bg-blue-blob.svg';

function App() {
  return (
    <QuizContextProvider>
      <StartPage />
      <QuizPage />
      
    </QuizContextProvider>
  );
}

export default App;
