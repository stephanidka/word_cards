import './Main.css';
import Card from '../Card/Card';

function Main(){

    return(
        <div className="MainContainer">
            <input type="text" placeholder="find a word" className="FindAWord"/>

            <div className='CardContainer'>
                <div className="Arrow Left"></div>
                <Card />
                {/* <div className="Arrow Right"></div> */}
            </div>

            <button>get a sentence</button>
            <div className='Sentence'>Random sentence with that word</div>
        </div>
    )
}
export default Main

