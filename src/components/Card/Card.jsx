import Data from '../../utils/data.json'
import './Card.css'
import React, { useState } from 'react';

export default function Card(){

    const [itemIndex, setItemIndex] = useState(0)

    const [translateClicked, setTranslateClicked] = useState(false);
    const handleTranslateClicked = () =>{
        setTranslateClicked(!translateClicked)
        };
const itemCard = Data[itemIndex]
    return(
                <div className="Card" key={itemCard}>
                    <div className='Word'>{itemCard.word}</div>
                    <div className='Transcription'>
                        <span>[ </span>
                        {itemCard.transcription}
                        <span> ]</span>
                    </div>
                    <div>
                        {translateClicked ? (
                        <div className='Translation'>{itemCard.translation}</div>
                    ) : (
                    <button className='TranslateButton'
                    onClick={handleTranslateClicked}>Translate </button>)}
                    </div>                  
            </div>
    )
};