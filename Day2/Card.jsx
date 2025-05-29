import profilePic from './assets/pp.jpg'

export default function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Placeholder Image" width="200" height="200"/>
            <h2 className="card-title">this is the card component</h2>
            <p className="card-text">wow i made this component from the base. I feel free to design and decorate it.</p>
            <button>Click Me</button>
        </div>
    )
}