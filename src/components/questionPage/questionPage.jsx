import { useState } from "react";
import questions from "../../assets/questions";
import axios from "axios";
import EndPage from "../endPage/endPage";

export default function QuestionPage(props) {
    const [qno, setQno] = useState(props.index);
    const [selectedAnswers, setAnswers] = useState(new Map());
    const [results, setResults] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        console.log(results);



        const body = {
            "name": name,
            "email": email,
            "results": results
        }

        console.log(body);

        axios.post("http://localhost:3000/assess", body)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleClick = (e) => {
        const val = {"select" : e.target.innerText,"pts" :e.target.id};
       
        setResults([]);
        selectedAnswers.set(qno, val);
        selectedAnswers.forEach((value, ques) => {
            setResults((prev) => [...prev, { ques,value}])
        })
        const ele = document.querySelector("#fade-in");
        ele.classList.toggle("show");
        setTimeout(() => {
            ele.classList.toggle("show");
            setQno(prev => prev + 1);
        }, 900);

        

    }
    const getBack = (e) => {
        if (qno > 0) {
            const ele = document.querySelector("#fade-in");
            ele.classList.toggle("show");
            setTimeout(() => {
                ele.classList.toggle("show");
                setQno(prev => prev - 1);
            }, 900)

        }
    }




    return (
        <div >
            <div className="px-3 border-8 border-[#c0c0c082]">
                <div className="max-w-[95%] max-h-fit rounded md:rounded-full bg-[#c0c0c050] m-auto md:my-9 mdmax-w-[85%]">
                    <div className='qCard'>
                        {qno < questions.length && qno >= 0 ? (
                            <div className="font-Helvectica text-center max-w-[250px] m-auto flex-col overflow-hidden flex-wrap  md:max-w-[400px]  show" id="fade-in">
                                <h3 className="font-semibold text-lg pt-40 mb-10 md:text-2xl ">{questions[qno].question}</h3>
                                {questions[qno].options.map(opt => {
                                    
                                    return (
                                        <div className="h-[75px] max-w-[290px] px-[15px] py-2 shadow-md  bg-white  mb-5 mx-auto rounded-xl text-sm  md:h-[90px] md:max-w-[400px] md:px-[15px] md:pt-[18px] md:pb-[4px] md:text-lg border-4 border-[#c0c0c065] hover:bg-[#ffffffc4] text-center " onClick={handleClick} id={opt.pts} >
                                            {opt.option}
                                        </div>)
                                })}
                                <button className="h-10 w-20 -ml-44 mt-3 mb-8 border-4 border-[#c0c0c065]  hover:bg-[#ffffffc4] text-black md:-ml-80 rounded-xl md:mt-2 bg-white md:px-5 md:h-14 md:w-30 md:mb-20" onClick={getBack}>Back</button>
                            </div>
                        ) :
                            (<>
                                <EndPage handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} />
                            </>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


