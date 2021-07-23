import { extend } from 'lodash'
import React, { Component } from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'
import Profilepic from '../img/cat.png'

class Home extends Component{
    render(){
        return (
            <div className="condiv home">
                <img src={Profilepic} alt="cat.png" className="profilepic"/>
                <ReactTypingEffect text={['I am Sukonrat', 'I am a web developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        )
    }
}

export default Home