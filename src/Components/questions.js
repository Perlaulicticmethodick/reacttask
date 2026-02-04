import { useState } from "react";

let Questions=(props)=>{
    
    let {question,setpoints,points}=props;
    let[numberofquest,setnumber]=useState(0)
    let[message,setmessage]=useState(null);
    let anwserQuest=(anwser)=>{
        if(anwser=question[numberofquest].correct){
            //points up
            setmessage("Respuesta correcta!")
            setpoints(points+1)
            


        }else{
            //mal
            setmessage("Respuesta incorrecta!")
        }
        if(numberofquest<question.length-1){
            setnumber(numberofquest+1)
            setTimeout(()=>{
                setmessage(null)
            },2000)
        }else{
            //se acabo
            setTimeout(()=>{
                setmessage("SE ACABO!")
            },2000)
            setTimeout(()=>{
                setnumber(0)
                setpoints(0)
            },4000)
        }
    
    
    
    }
    return(
        <div className="question">
            {message!=null &&
                <h2>{message}</h2>
            }
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