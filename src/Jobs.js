import React, { Component } from 'react'

class Jobs extends Component {
    render(){
        return (
            <div class="body">
                <div class = "left-column">
                    Work Experience
                </div>
                <div class = "right-column">
                    {this.props.workExperience.map(item=>
                        <div>
                            <div class="heading"> {item.jobName} </div> 
                            <div class = "entry"> {item.jobDescription} </div>
                        </div>
                    )}
                </div>
            </div>
        );
        
    }
}

export default Jobs;