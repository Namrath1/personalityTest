import questions from "./assets/questions";
import Question from "./components/question/question";
import QuestionPage from "./components/questionPage/questionPage";

export default function showQuestion(index, handleClick){
    console.log(index);
    
    // console.log(card,card?.firstChild,"question element");

    return (<Question data={questions[index]} qno = {index} changeData = {handleClick}/>);
    
}