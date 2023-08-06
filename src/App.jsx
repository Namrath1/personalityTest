import { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingpage/landingPage";
import QuestionPage from "./components/questionPage/questionPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <QuestionPage/>
      </div>
    </>
  );
}

export default App;
