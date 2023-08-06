import React,{useState} from 'react';
import showQuestion from '../../utils';

export default function Question(props) {
    console.log(props);
    const [question, setQuestion] = useState(props.data.question);
    const [options, setOptions] = useState(props.data.options);
    const [qno, setQno] = useState(props.qno);
    console.log(props.changeData,"ok");

    return (<div className='qCard'>
        <div className="font-Helvectica text-center max-w-[340px] m-auto flex-col overflow-hidden flex-wrap">
            <h3 className="font-semibold text-2xl pt-32">{question}</h3>
            {options.map(opt => {
                return (
                    <div className="h-[70px] max-w-[340px] px-[15px] pt-[25px] shadow-md bg-white my-5 rounded-xl"  onClick={function(){
                        
                    }}>
                        {opt.option}
                    </div>)
            })}
        </div>
    </div>)
}