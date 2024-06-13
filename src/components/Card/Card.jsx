import Data from '../../utils/data.json'
import './Card.css'
import '../NextButton/NextButton'
import React, { useState, useEffect, useRef } from 'react';
import NextButton from '../NextButton/NextButton';
import PrevButton from '../PrevButton/PrevButton';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function Card({addToLerned}){

    const [itemIndex, setItemIndex] = useState(0)
    const translateButtonRef = useRef(null)

    const [translateClicked, setTranslateClicked] = useState(false);
    const handleTranslateClicked = () =>{
        setTranslateClicked(!translateClicked)
        addToLerned();
        };

    const itemCard = Data[itemIndex]    

        const handleNext = () => {
            if (itemIndex < Data.length - 1){
                setItemIndex(itemIndex + 1);
                setTranslateClicked(false);
            }
            else if (itemIndex === Data.length - 1){
                setItemIndex(0);
                setTranslateClicked(false);
            }}
        const handlePrev = () => {
            if (itemIndex > 0){
                setItemIndex(itemIndex - 1);
                setTranslateClicked(false);
            }
            else if (itemIndex === 0){
                setItemIndex(Data.length - 1);
                setTranslateClicked(false);
            }}        

    return( 
            <div className='Container'>
            <div>
            <PrevButton 
                onPrev={handlePrev}/>
            </div>
            <div className='Wrapper'> 
            <TransitionGroup>
                <CSSTransition
                    key={itemIndex}
                    timeout={300}
                    classNames="slide"
                >
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
                    onClick={() => { handleTranslateClicked(); addToLerned();}}>Translate </button>)}
                    </div>                  
                </div>
                </CSSTransition>
            </TransitionGroup>
            </div>
            <div>
            <NextButton 
                onNext={handleNext}/>
            </div>
            </div>
    )
};