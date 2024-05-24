import Data from '../../utils/data.json'
// import Example_Card from "../images/example_card.png"
import './Main.css';
import React, { useState } from 'react';

function Main(){
    const WordIndex = Math.floor(Math.random() * Object.keys(Data).length);
    const Word = Data[WordIndex].word
    const Transcription = Data[WordIndex].transcription
    const Translation = Data[WordIndex].translation

    const [translateClicked, setTranslateClicked] = useState(false);
    const handleTranslateClicked = () =>{
        setTranslateClicked(!translateClicked)
    }
    return(
        <div className="MainContainer">
            <input type="text" placeholder="find a word"/>

            <div className='CardContainer'>
                <div className="Arrow Left"></div>
                <div className='Know'>i know&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                    <div className="Card">
                        <div className='Word'>{Word}</div>
                        <div className='Transcription'>
                            <span>[ </span>
                                {Transcription}
                                <span> ]</span>
                        </div>
                        <div>
                            {translateClicked ? (<div className='Translation'>{Translation}</div>) : 
                            (<button className='TranslateButton'
                            onClick={handleTranslateClicked}>Translate </button>)}
                        </div> 
                    </div>

                <div className='Know'>i don`t know</div>
                <div className="Arrow Right"></div>
            </div>

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>
        </div>
    )
}
export default Main

