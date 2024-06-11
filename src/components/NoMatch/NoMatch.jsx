import './NoMatch.css';
import Cat from '../../images/cat.png'

export default function NoMatch(){
    return(
    <div className='Container404'>
        <h1>Welcome to the page!</h1>
        <div className='PicContainer' style={{ '--bg-image': `url(${Cat})` }}><p>404</p></div>
        <p>Sorry, the page you are looking for does not exist :(</p>
    </div>
    )
}