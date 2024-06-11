import './Main.css';
import Card from '../Card/Card';
import WordsTable from '../WordsTable/WordsTable';



function Main(){

    return(
        <div className="MainContainer">
            <input type="text" placeholder="find a word" className="FindAWord"/>

                <Card />

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>

            <WordsTable />
        </div>
    )
}
export default Main

