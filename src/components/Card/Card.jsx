import Data from '../../utils/data.json'
import './Card.css'
import '../NextButton/NextButton'
import React, { useState } from 'react';
import NextButton from '../NextButton/NextButton';
import PrevButton from '../PrevButton/PrevButton';


export default function Card(){

    const [itemIndex, setItemIndex] = useState(0)

    const [translateClicked, setTranslateClicked] = useState(false);
    const handleTranslateClicked = () =>{
        setTranslateClicked(!translateClicked)
        };

    const itemCard = Data[itemIndex]    

        const handleNext = () => {
            if (itemIndex < Data.length - 1){
                setItemIndex(itemIndex + 1);
                setTranslateClicked(false);
            }}
        const handlePrev = () => {
            if (itemIndex > 0){
                setItemIndex(itemIndex - 1);
                setTranslateClicked(false);
            }}        

    return( 
            <div className='Container'>
            <div>
            <PrevButton 
                onPrev={handlePrev}/>
            </div>
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
            <div>
            <NextButton 
                onNext={handleNext}/>
            </div>
            </div>
    )
};