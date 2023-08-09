import { useState } from "react";
import LandingPage from "./components/landingpage/landingPage";
import QuestionPage from "./components/questionPage/questionPage";
import EndPage from "./components/endPage/endPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/access" element={<QuestionPage index={0} />} exact />
          <Route path="/results" element={<EndPage />} />
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
