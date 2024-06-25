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




    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        

      const response =await runChat(input);
      setResultData(response)
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
