import { useState } from "react";
import LandingPage from "./components/landingpage/landingPage";
import QuestionPage from "./components/questionPage/questionPage";
import showQuestion from "./utils";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <QuestionPage index={2} />
    </>
  );
}

export default App;
