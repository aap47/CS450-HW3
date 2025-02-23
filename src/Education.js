import React, { Component } from 'react'

class Education extends Component {
    render(){
        return (
            <div class="body">
                <div class = "left-column">
                    Education
                </div>
                <div class = "right-column">
                    <div class="heading">{this.props.education.school}</div> 
                    {this.props.education.degree}<br></br>
                    {this.props.education.year}<br></br>
                    GPA: {this.props.education.gpa}
                </div>
            </div>
        );
        
    }
}

export default Education;