import './Home.css';
import BigLogo from '../../images/logo.png';
import WordsTable from '../WordsTable/WordsTable';

export default function Home(){

    return(
        <div className='HomeContainer'>
            <h2>Welcome to the</h2>
            <img src={BigLogo} alt="Word Cards Logo" />
            <WordsTable />

        </div>
    )
}