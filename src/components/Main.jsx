// import ExampleCard from '../example_card'
import Example_Card from "../images/example_card.png"

function Main(){
    return(
        <div className="MainContainer">
            <input type="text" />
            <div className="Card">
                <img src= {Example_Card}
                     alt={"Example_Card"} />
            </div>
            <div>table</div>
            <button>push me</button>
            <div>something important</div>
            

        </div>
    )
}
export default Main