import react, {Component} from 'react'
import Profilepic from '../img/cat.png'

class About extends Component{
    render(){
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={Profilepic} alt="cat.png" className="profilepic"/>
                <h3>Hi! I'm Sukonrat</h3>
                <p>I am a website developer who has passion to gain new experience in various industries and expand my programming skills</p>
            </div>
        )
    }
}

export default About