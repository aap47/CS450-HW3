import React, { Component } from 'react'

class KeySkills extends Component {
    render() {
        return (
            <div class="body">
                <div class = "left-column">
                    Key Skills
                </div>
                <div class = "right-column-skills">
                    {this.props.skills.map(item=>
                        <div>
                            <div class="item"> {item} </div> 
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default KeySkills;