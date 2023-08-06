import { useState } from "react";
import Question from "../question/question";
import showQuestion from "../../utils";

export default function QuestionPage(props) {
    
    const [questionEle,setQuestionEle] = useState([showQuestion(props.index)]);

    
    return (
        <div >
            <div className="px-12">
                <div className="max-w-[85%] min-h-screen rounded md:rounded-full bg-[#c0c0c065] m-auto  mb-0 pb-10">
                    {questionEle.map(ele=>{
                        return (ele);
                    })}
                </div>
            </div>
        </div>
    )
}


