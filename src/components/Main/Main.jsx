import './Main.css';
import Card from '../Card/Card';
import WordsTable from '../WordsTable/WordsTable';
import ShowHideButton from '../../images/show.png'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';



function Main(){

    const [lerned, setLerned] = useState(0) //
    const addToLerned = () => {
        setLerned(lerned + 1)
    }

    const [show, setShow] = useState(false)

    return(
        <div className="MainContainer">
            {/* <input type="text" placeholder="find a word" className="FindAWord"/> */}
            <p>Words learned: {lerned}</p>
                <Card 
                    addToLerned={addToLerned}
                />

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>
            <div className='ShowTheTable'>{ show ? 'Hide' : 'Show' } the table</div>
            <div className='ShowHideContainer'>
                <div className='Border'></div>
                <div className='ShowHideButton' onClick={() => setShow(!show)}>
                    <img 
                        src={ShowHideButton} 
                        alt="show hide" 
                        className={show ? 'hide' : ''}/>
                </div>
                <div className='Border'></div>
            </div>
            <CSSTransition
                    in={show}
                    timeout={300}
                    classNames='alert'
                    unmountOnExit
                >
            <div className='WordsTable'>
                <WordsTable />
            </div>
            </CSSTransition>
        </div>
    )
}
export default Main

