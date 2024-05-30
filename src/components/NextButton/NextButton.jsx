import "NextButton.css"

export default function NextButton({onNext}) {
    return (
        <div className="Arrow Right" onClick={onNext}></div>
    )};