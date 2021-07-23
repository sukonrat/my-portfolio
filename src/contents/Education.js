import React, { Component } from 'react'
import  Wildcard  from '../components/Widecard'

class Education extends Component{
    render(){
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Wildcard title="Bachelor of science in information technology" where="University of Technology Sydney" from="2018" to="2020" />
                <Wildcard title="Advance Diploma of Information Technology" where="Kent Institute Australia" from="2016" to="2017" />
                <Wildcard title="Diploma of Website Development" where="Kent Institute Australia" from="2015" to="2016" />
                <Wildcard title="Certificate IV in Web Based Technology" where="Kent Institute Australia" from="2015" to="2015" />
                <Wildcard title="Certificate III in Information Technology" where="Kent Institute Australia" from="2014" to="2014" />
            </div>
        )
    }
}

export default Education