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
            <div className="px-3 border-8 border-[#c0c0c082]">
                <div className="max-w-[95%] max-h-fit rounded md:rounded-full bg-[#c0c0c050] m-auto md: my-9 max-w-[85%]">
                    <div className='qCard'>
                        {qno < questions.length && qno >= 0 && (
                            <div className="font-Helvectica text-center max-w-[250px] m-auto flex-col overflow-hidden flex-wrap  md:max-w-[400px] show" id="fade-in">
                                <h3 className="font-semibold text-2xl pt-40">{questions[qno].question}</h3>
                                {questions[qno].options.map(opt => {

                                    return (
                                        <div className="h-[75px] max-w-[220px] px-[15px] pt-[5px] pb-[5px] shadow-md  bg-white mt-10 mb-9 mx-auto rounded-xl text-sm  md:h-[90px] md:max-w-[400px] md:px-[15px] md:pt-[18px] md:pb-[4px] md:text-lg border-4 border-[#c0c0c065] hover:bg-[#ffffffc4] text-center" onClick={handleClick}>
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


