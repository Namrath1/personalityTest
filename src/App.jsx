import { useState } from "react";
import LandingPage from "./components/landingpage/landingPage";
import QuestionPage from "./components/questionPage/questionPage";
import EndPage from "./components/endPage/endPage"


function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <LandingPage/>
      <QuestionPage index={0}/>
      <EndPage/>
    </>
  );
}

export default App;
