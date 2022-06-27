import QuizPage from './components/QuizPage';
import StartPage from './components/StartPage';
import { QuizContextProvider } from './context/QuizContextProvider';

function App() {
  return (
    <QuizContextProvider>
      <StartPage />
      <QuizPage />
    </QuizContextProvider>
  );
}

export default App;
