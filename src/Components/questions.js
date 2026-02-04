import { useState } from "react";

let Questions=(props)=>{
    
    let {question,setpoints,points}=props;
    let[numberofquest,setnumber]=useState(0)
    let anwserQuest=(anwser)=>{
        if(anwser=question[numberofquest].correct){
            //points up
            setpoints(points+1)



        }else{
            //mal
        }
        if(numberofquest<question.length-1){
            setnumber(numberofquest+1)
        }else{
            //se acabo
            setTimeout(()=>{
                setnumber(0)
                setpoints(0)
            },4000)
        }
    
    
    
    }
    return(
        <div className="question">
            <div>
                <h2>Question {numberofquest+1}</h2>
                <p id="questionText">{question[numberofquest].text}</p>
                <ul class="options">
                    <li><button onClick={()=>{anwserQuest(0)}}>{question[numberofquest].options[0]}</button></li>
                    <li><button onClick={()=>{anwserQuest(1)}}>{question[numberofquest].options[1]}</button></li>
                    <li><button onClick={()=>{anwserQuest(2)}}>{question[numberofquest].options[2]}</button></li>

                </ul>


            </div>





        </div>
    )
}
export default Questions