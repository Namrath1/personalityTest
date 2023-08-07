import { useState } from "react";
import LandingPage from "./components/landingpage/landingPage";
import QuestionPage from "./components/questionPage/questionPage";


function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <QuestionPage index={0} />
    </>
  );
}

export default App;
