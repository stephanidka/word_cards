import './Main.css';
import Card from '../Card/Card';
import WordsTable from '../WordsTable/WordsTable';
import { useState } from 'react';



function Main(){

    const [lerned, setLerned] = useState(0) //

    const addToLerned = () => {
        setLerned(lerned + 1)
    }

    return(
        <div className="MainContainer">
            {/* <input type="text" placeholder="find a word" className="FindAWord"/> */}
            <p>Words learned: {lerned}</p>
                <Card 
                    addToLerned={addToLerned}
                />

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>

            <WordsTable />
        </div>
    )
}
export default Main

