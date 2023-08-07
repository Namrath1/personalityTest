import { useState } from "react";
import questions from "../../assets/questions";

export default function QuestionPage(props) {
    const [qno, setQno] = useState(props.index);
    const [selectedAnswers,setAnswers] = useState(new Map());


    const handleClick = (e) => {
        

        selectedAnswers.set(qno,e.target.innerText);
        

        if (qno < questions.length - 1) {
            const ele = document.querySelector("#fade-in");
            ele.classList.toggle("show");
            setTimeout(() => {
                ele.classList.toggle("show");
                setQno(prev => prev + 1);
            }, 1070)
        }

    }
    const getBack = (e) => {
        if (qno > 0) {
            const ele = document.querySelector("#fade-in");
            ele.classList.toggle("show");
            setTimeout(() => {
                ele.classList.toggle("show");
                setQno(prev => prev - 1);
            }, 1070)
            
        }
    }
   
    
    

    return (
        <div >
            <div className="px-12">
                <div className="max-w-[85%] min-h-screen rounded md:rounded-full bg-[#c0c0c065] m-auto  mb-0 pb-10">
                    <div className='qCard'>
                        {qno < questions.length && qno >= 0 && (
                            <div className="font-Helvectica text-center max-w-[340px] m-auto flex-col overflow-hidden flex-wrap show" id="fade-in">
                                <h3 className="font-semibold text-2xl pt-32">{questions[qno].question}</h3>
                                {questions[qno].options.map(opt => {

                                    return (
                                        <div className="h-[70px] max-w-[340px] px-[15px] pt-[25px] shadow-md bg-white my-5 rounded-xl" onClick={handleClick}>
                                            {opt.option}
                                        </div>)
                                })}
                            </div>
                        )}
                        <button onClick={getBack}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


