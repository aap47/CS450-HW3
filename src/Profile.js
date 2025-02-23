import React, { Component } from 'react'

class Profile extends Component {
    render(){
        return (
            <div class="body">
                <div class = "left-column">
                    Personal Profile
                </div>
                <div class = "right-column">
                    {this.props.profile}
                </div>
            </div>
        );
        
    }
}

export default Profile;