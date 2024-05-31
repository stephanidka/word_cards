import './Main.css';
import Card from '../Card/Card';

function Main(){

    return(
        <div className="MainContainer">
            <input type="text" placeholder="find a word" className="FindAWord"/>

            {/* <div className='CardContainer'> */}

                <Card />

            {/* </div> */}

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>
        </div>
    )
}
export default Main

