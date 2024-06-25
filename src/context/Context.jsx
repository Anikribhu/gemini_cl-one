import React, { createContext, useState } from 'react'
import run from '../config/gemini';
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props)=>{

    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const delayPara = (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },90*index)
    }


    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompt(prev=>[...prev,input])
        

      const response =await runChat(input);
      let responseArray = response.split("**")
      let newResponse="";
      for(let i=0;i< responseArray.length;i++)
        {
            if (i===0||i%2 !==1) {
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
      let newResponse2 = newResponse.split("*").join("</br>")  
      let newResponseArray = newResponse2.split(" ")
      for (let i = 0; i < newResponseArray.length; i++) 
        {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")      
        }
      setLoading(false)
      setInput("")
    }

    const handleKeyPress =(event) => {
        if (event.key === 'Enter') {
            onSent();
        }
    };


    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        onSent,
        recentPrompt,
        setRecentPrompt,
        loading,
        resultData,
        input,
        setInput,
        handleKeyPress
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
